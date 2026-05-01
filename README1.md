# 🏠 BuyOrNotBuy — Automated Real Estate Lead Funnel

> A fully automated lead generation, nurturing, and CRM pipeline for real estate — built entirely on open-source tools running on a local macOS server.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Domain Map](#domain-map)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [1. System Setup](#1-system-setup)
  - [2. MySQL Setup](#2-mysql-setup)
  - [3. Nginx Setup](#3-nginx-setup)
  - [4. Apache Setup (SuiteCRM)](#4-apache-setup-suitecrm)
  - [5. Docker Services](#5-docker-services)
  - [6. SuiteCRM Setup](#6-suitecrm-setup)
  - [7. Mautic Configuration](#7-mautic-configuration)
  - [8. n8n Workflows](#8-n8n-workflows)
- [Lead Funnel Flow](#lead-funnel-flow)
- [Lead Scoring](#lead-scoring)
- [Mautic Forms](#mautic-forms)
- [SuiteCRM Custom Fields](#suitecrm-custom-fields)
- [Email Sequence](#email-sequence)
- [Website Tracking](#website-tracking)
- [Scripts Reference](#scripts-reference)
- [Credentials & Access](#credentials--access)
- [Troubleshooting](#troubleshooting)
- [Production Migration](#production-migration)
- [Project Status](#project-status)
- [File Structure](#file-structure)

---

## Overview

BuyOrNotBuy is a complete inbound lead funnel for a real estate buyer's agent. When a visitor lands on the website, the system automatically:

1. **Tracks** their behaviour via Mautic (anonymous until form submission)
2. **Scores** them based on engagement (page visits, email opens, form submissions)
3. **Captures** their details via embedded Mautic forms
4. **Creates** a Lead + Opportunity in SuiteCRM automatically via n8n
5. **Nurtures** them with an 11-email sequence over 120 days via Brevo SMTP
6. **Alerts** the agent instantly when a lead hits Hot Lead status (50+ points)
7. **Updates** the CRM stage automatically as the lead score increases

Everything runs locally on a macOS Intel machine with no external SaaS dependencies for automation — only Brevo for email delivery.

---

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    VISITOR JOURNEY                       │
└─────────────────────────────────────────────────────────┘

  https://buyornotbuy.test
          │
          ▼
  ┌───────────────┐     mtc.js loads     ┌─────────────────┐
  │   Website     │ ──────────────────►  │     Mautic      │
  │  (Nginx/PHP)  │                      │  Marketing Auto │
  └───────────────┘                      └────────┬────────┘
                                                  │
                              Contact identified  │  Points accumulate
                              Form submitted      │  (+5 page, +25 form)
                                                  ▼
                                         ┌─────────────────┐
                                         │      n8n        │
                                         │   Workflows     │
                                         └────────┬────────┘
                                                  │
                          ┌───────────────────────┼───────────────────────┐
                          ▼                       ▼                       ▼
                 ┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
                 │   SuiteCRM      │   │  Brevo SMTP     │   │  Agent Email    │
                 │  Lead + Oppty   │   │  11-Email Seq   │   │  Hot Lead Alert │
                 └─────────────────┘   └─────────────────┘   └─────────────────┘

┌─────────────────────────────────────────────────────────┐
│                   INFRASTRUCTURE                         │
├──────────────┬────────────────┬───────────────┬─────────┤
│    Nginx     │    Apache      │    MySQL       │ Docker  │
│  (Reverse    │  (SuiteCRM     │   (All DBs)    │(Mautic, │
│   Proxy)     │   mod_php)     │               │ n8n,    │
│              │                │               │ Matomo, │
│              │                │               │ Ninja)  │
└──────────────┴────────────────┴───────────────┴─────────┘
```

---

## Tech Stack

| Service | Version | Role | Hosting |
|---------|---------|------|---------|
| **Mautic** | 5.x | Marketing automation, contact tracking, lead scoring, webhooks | Docker (port 8081) |
| **SuiteCRM** | 8.x | CRM — leads, opportunities, pipeline management | Apache (port 8080) |
| **n8n** | 2.14.x | Workflow automation — connects all systems | Docker (port 5678) |
| **Matomo** | 5.x | Privacy-first website analytics | Docker (port 8082) |
| **Invoice Ninja** | 5.13.x | Invoicing and billing | Docker (port 8083) |
| **Brevo** | — | Transactional email delivery (SMTP) | External SaaS |
| **Nginx** | — | Reverse proxy + SSL termination | Homebrew |
| **Apache** | — | PHP web server for SuiteCRM | Homebrew |
| **MySQL** | 9.x | Database for all services | Homebrew |
| **PHP** | 8.2 | Runtime for SuiteCRM and website | Homebrew |

---

## Domain Map

All domains use `.test` TLD to avoid macOS Bonjour conflict with `.local`.

| Domain | Proxied To | Service |
|--------|-----------|---------|
| `https://mautic.test` | Docker `127.0.0.1:8081` | Mautic |
| `https://buyornotbuy.test` | `/usr/local/var/www/buyornotbuy/public/` | Website |
| `https://matomo.test` | Docker `127.0.0.1:8082` | Matomo |
| `https://n8n.test` | Docker `127.0.0.1:5678` | n8n |
| `https://invoices.test` | Docker `127.0.0.1:8083` | Invoice Ninja |
| `https://suitecrm.test` | Apache `127.0.0.1:8080` | SuiteCRM |

> **SSL:** Self-signed cert at `/usr/local/etc/nginx/ssl/server.crt` covers all `.test` domains.

---

## Prerequisites

- macOS (Intel, Sequoia tested)
- [Homebrew](https://brew.sh)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- 8GB+ RAM recommended
- 20GB+ free disk space

---

## Installation

### 1. System Setup

```bash
# Install required Homebrew packages
brew install php@8.2 mysql nginx httpd

# Add PHP to PATH
echo 'export PATH="/usr/local/opt/php@8.2/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# Add /etc/hosts entries
sudo tee -a /etc/hosts << 'EOF'
127.0.0.1 mautic.test
127.0.0.1 buyornotbuy.test
127.0.0.1 matomo.test
127.0.0.1 n8n.test
127.0.0.1 invoices.test
127.0.0.1 suitecrm.test
EOF

# Generate self-signed SSL certificate
sudo mkdir -p /usr/local/etc/nginx/ssl
sudo openssl req -x509 -nodes -days 3650 -newkey rsa:2048 \
  -keyout /usr/local/etc/nginx/ssl/server.key \
  -out /usr/local/etc/nginx/ssl/server.crt \
  -subj "/CN=*.test" \
  -addext "subjectAltName=DNS:mautic.test,DNS:buyornotbuy.test,DNS:matomo.test,DNS:n8n.test,DNS:invoices.test,DNS:suitecrm.test,DNS:localhost"

# Trust the certificate on macOS
sudo security add-trusted-cert -d -r trustRoot \
  -k /Library/Keychains/System.keychain \
  /usr/local/etc/nginx/ssl/server.crt
```

---

### 2. MySQL Setup

```bash
brew services start mysql
mysql_secure_installation

# Create databases and users
mysql -u root -p << 'SQL'
CREATE DATABASE mautic;
CREATE DATABASE matomo;
CREATE DATABASE n8n;
CREATE DATABASE invoiceninja;
CREATE DATABASE suitecrm;

CREATE USER 'mauticuser'@'%'  IDENTIFIED BY 'YOUR_PASSWORD';
CREATE USER 'matomouser'@'%'  IDENTIFIED BY 'YOUR_PASSWORD';
CREATE USER 'n8nuser'@'%'     IDENTIFIED BY 'YOUR_PASSWORD';
CREATE USER 'ninjauser'@'%'   IDENTIFIED BY 'YOUR_PASSWORD';

GRANT ALL PRIVILEGES ON mautic.*       TO 'mauticuser'@'%';
GRANT ALL PRIVILEGES ON matomo.*       TO 'matomouser'@'%';
GRANT ALL PRIVILEGES ON n8n.*          TO 'n8nuser'@'%';
GRANT ALL PRIVILEGES ON invoiceninja.* TO 'ninjauser'@'%';
FLUSH PRIVILEGES;
SQL
```

**Performance tuning** — add to `/usr/local/etc/my.cnf`:

```ini
[mysqld]
innodb_buffer_pool_size = 4G
innodb_flush_log_at_trx_commit = 2
bind-address = 0.0.0.0
```

```bash
brew services restart mysql
```

---

### 3. Nginx Setup

```bash
# Copy server configs
cp nginx/servers/*.conf /usr/local/etc/nginx/servers/

# Ensure nginx.conf includes servers directory (inside http {} block):
# include /usr/local/etc/nginx/servers/*.conf;

brew services start nginx
```

---

### 4. Apache Setup (SuiteCRM)

Apache serves SuiteCRM on port 8080 using `mod_php` (prefork MPM required).

Key `/usr/local/etc/httpd/httpd.conf` settings:

```apache
Listen 8080
LoadModule php_module /usr/local/opt/php@8.2/lib/httpd/modules/libphp.so

# SuiteCRM VirtualHost — must appear BEFORE the localhost vhost
<VirtualHost *:8080>
    ServerName suitecrm.test
    ServerAlias host.docker.internal
    DocumentRoot /usr/local/var/www/suitecrm/public
    <Directory /usr/local/var/www/suitecrm/public>
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

```bash
# Start Apache (use direct command — brew services has quirks with httpd)
sudo /usr/local/bin/httpd -k start &
```

> ⚠️ `ServerAlias host.docker.internal` is **required** — n8n Docker containers use this hostname to reach SuiteCRM's REST API from inside Docker.

---

### 5. Docker Services

```bash
# Copy environment template and fill in values
cp .env.example .env
# Set HOST_IP to your Mac's current local IP:
ipconfig getifaddr en0

# Start all services
cd docker/mautic       && docker compose up -d
cd docker/n8n          && docker compose up -d
cd docker/matomo       && docker compose up -d
cd docker/invoiceninja && docker compose up -d

# Verify
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
```

**After Mautic starts**, restore the config (prevents installer screen):

```bash
# Edit the example file with your values first
cp docker/mautic/mautic-local.php.example /tmp/mautic-local.php
# nano /tmp/mautic-local.php  ← fill in DB password, secret key, SMTP creds

docker cp /tmp/mautic-local.php mautic:/var/www/html/config/local.php
docker exec -u root mautic sh -c "chown www-data:www-data /var/www/html/config/local.php"
docker exec -u root mautic sh -c \
  "chown -R www-data:www-data /var/www/html/var/cache/ && \
   chmod -R 775 /var/www/html/var/cache/"
docker restart mautic
```

---

### 6. SuiteCRM Setup

```bash
# Install SuiteCRM 8.x
cd /usr/local/var/www
git clone https://github.com/salesagility/SuiteCRM-Core.git suitecrm
cd suitecrm && composer install

# Apply custom fields
mysql -u root -p suitecrm < suitecrm/sql/add_custom_fields.sql

LEGACY="/usr/local/var/www/suitecrm/public/legacy"
sudo mkdir -p $LEGACY/custom/modules/Leads/{metadata,language,Ext/Language}
sudo mkdir -p $LEGACY/custom/Extension/modules/Leads/Ext/{Language,Vardefs}
sudo mkdir -p $LEGACY/custom/Extension/application/Ext/Language

sudo cp suitecrm/custom/modules/Leads/metadata/editviewdefs.php  $LEGACY/custom/modules/Leads/metadata/
sudo cp suitecrm/custom/modules/Leads/language/en_us.lang.php    $LEGACY/custom/modules/Leads/language/
sudo cp suitecrm/custom/Extension/modules/Leads/Ext/Vardefs/buyornotbuy_vardefs.php \
        $LEGACY/custom/Extension/modules/Leads/Ext/Vardefs/
sudo cp suitecrm/custom/Extension/application/Ext/Language/buyornotbuy_dropdowns.php \
        $LEGACY/custom/Extension/application/Ext/Language/

sudo chown -R _www:_www $LEGACY/custom/
```

Run Quick Repair in browser:
```
http://suitecrm.test:8080/index.php?module=Administration&action=repair&view=default
```
Click **Quick Repair and Rebuild → Execute**

---

### 7. Mautic Configuration

Log in at `https://mautic.test` and configure:

**API:** Admin → Configuration → API Settings → Enable API + Basic Auth ✅

**Webhooks:** Admin → Webhooks → Add each:

| Name | URL | Events |
|------|-----|--------|
| SuiteCRM Contact Sync | `https://n8n.test/webhook/mautic-lead` | Contact Identified, Created |
| Hot Lead Score Alert | `https://n8n.test/webhook/mautic-score` | Points Changed |
| Form CRM Pipeline | `https://n8n.test/webhook/mautic-form` | Form Submit |
| Follow-up Email Sequence | `https://n8n.test/webhook/mautic-followup` | Contact Identified |
| Lead Stage Manager | `https://n8n.test/webhook/mautic-stage` | Points Changed, Form Submit |

**SMTP:** Admin → Configuration → Email Settings
```
Transport:  SMTP
Host:       smtp-relay.brevo.com
Port:       587
Encryption: TLS
From:       hello@buyornotbuy.com
```

---

### 8. n8n Workflows

Log in at `https://n8n.test` — verify all 5 workflows are **Active**:

| Workflow ID | Name | Webhook Path |
|-------------|------|-------------|
| `VnttTrl0Y0Xi3ilI` | Mautic → SuiteCRM Lead Sync | `/webhook/mautic-lead` |
| `oSEno9y0PLNVyVUq` | Hot Lead Alert (Score ≥ 50) | `/webhook/mautic-score` |
| `S7h1iP94sVfQ7rAo` | Form → CRM Pipeline | `/webhook/mautic-form` |
| `Lde1in9z4Cw2uPhu` | Follow-up Email Sequence | `/webhook/mautic-followup` |
| `awSquG70UgbEvykc` | Lead Stage Manager | `/webhook/mautic-stage` |

All workflows reach SuiteCRM via `http://host.docker.internal:8080/service/v4_1/rest.php`

---

## Lead Funnel Flow

```
1. Visitor arrives at buyornotbuy.test
   └── Mautic cookie set, Matomo visit logged

2. Visitor browses pages
   └── +5 points per page visit

3. Visitor submits a form
   └── +25 points
   └── Mautic contact created/updated
   └── 5 webhooks fire to n8n

4. n8n: Form → CRM Pipeline
   └── SuiteCRM Login via REST API
   └── Lead record created
   └── Opportunity created ("Property Enquiry — [Name]")

5. n8n: Follow-up Email Sequence
   └── Welcome email sent immediately (Day 0)
   └── 10 more emails queued over 120 days

6. Lead engages with emails
   └── Opens: +5 pts / Clicks: +10 pts

7. Lead reaches 50+ points → HOT LEAD
   └── SuiteCRM status updated to "Hot Lead"
   └── Agent alert email sent to hello@buyornotbuy.com
```

---

## Lead Scoring

### Point Actions

| Trigger | Points |
|---------|--------|
| Form Submission | **+25** |
| Email Click | **+10** |
| Return Visit | **+10** |
| Page Visit | **+5** |
| Email Open | **+5** |
| Social Visit | **+5** |

### Lead Stages

| Score | Stage | Tag | CRM Status |
|-------|-------|-----|-----------|
| 0–24 | New Lead | — | New |
| 25–49 | Engaged | `engaged` | Engaged |
| 50+ | 🔥 Hot Lead | `hot-lead` | Hot Lead |

---

## Mautic Forms

| ID | Alias | Placement |
|----|-------|-----------|
| 1 | `enquiry` | Hero section / primary CTA |
| 2 | `newsletter` | Footer / sidebar |
| 3 | `free_repor` | Lead magnet page |

**Embed:**
```html
<script type="text/javascript" src="//mautic.test/form/generate.js?id=1"></script>
```

See `website/tracking-snippets.html` for full embed code with CSS.

---

## SuiteCRM Custom Fields

### Buyer Requirements Panel

| Field | Label | Type | Options |
|-------|-------|------|---------|
| `buyer_type_c` | Buyer Type | Dropdown | Primary / Investment / Renter |
| `property_type_c` | Property Type | Dropdown | House / Apartment / Townhouse / Land / Commercial / Any |
| `budget_min_c` | Min Budget | Currency | — |
| `budget_max_c` | Max Budget | Currency | — |
| `bedrooms_wanted_c` | Bedrooms | Integer | — |
| `timeline_c` | Purchase Timeline | Dropdown | ASAP / Soon / Planning / Future / Just Browsing |
| `pre_approved_c` | Finance Pre-Approved | Checkbox | — |
| `mautic_score_c` | Lead Score | Integer | Synced from Mautic |

### Location Preferences Panel

| Field | Label | Type |
|-------|-------|------|
| `area_preference_c` | Preferred Area | Text |
| `suburb_c` | Suburb | Text |
| `area_c` | Area | Text |
| `city_c` | City | Text |
| `zipcode_c` | Zip Code | Text |

---

## Email Sequence

11 emails via Brevo SMTP over 120 days, triggered on form submission:

| Day | Purpose |
|-----|---------|
| 0 | Welcome / confirmation |
| 1 | Follow-up check |
| 3 | New listings — deliver value |
| 7 | Market education |
| 14 | Market update |
| 21 | Book consultation CTA |
| 28 | Personal outreach |
| 40 | Re-engagement |
| 60 | Check-in |
| 90 | Requalify |
| 120 | Final touch |

---

## Website Tracking

Two scripts required on **every page**.

### Mautic — in `<head>`

```html
<script>
  (function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;
  w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},w[n].l=1*new Date();
  a=d.createElement(t),m=d.getElementsByTagName(t)[0];a.async=1;
  a.src=u;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://mautic.test/mtc.js','mt');
  mt('send','pageview');
</script>
```

### Matomo — before `</body>`

```html
<script>
  var _paq = window._paq = window._paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://matomo.test/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
```

---

## Scripts Reference

| Script | Description |
|--------|-------------|
| `./scripts/health-check.sh` | Check HTTP status of all 6 services |
| `./scripts/start-all.sh` | Start MySQL, Nginx, Apache, Docker containers |
| `./scripts/update-ip.sh [IP]` | Update host IP across all configs after network change |

---

## Credentials & Access

> ⚠️ Copy `.env.example` to `.env` — never commit `.env` to git.

| Service | URL | Notes |
|---------|-----|-------|
| Mautic | `https://mautic.test` | admin / see .env |
| SuiteCRM | `https://suitecrm.test` | admin / see .env |
| n8n | `https://n8n.test` | see .env |
| Matomo | `https://matomo.test` | admin / see .env |
| Invoice Ninja | `https://invoices.test` | see .env |
| MySQL | `127.0.0.1:3306` | root / see .env |

---

## Troubleshooting

### Services return 500/502 after network reconnect
```bash
./scripts/update-ip.sh    # Detects new IP and updates all configs automatically
```

### Mautic offline error
```bash
docker exec -u root mautic sh -c \
  "chown -R www-data:www-data /var/www/html/var/cache/ && rm -rf /var/www/html/var/cache/prod/*"
docker restart mautic
```

### Mautic shows installer page
```bash
docker cp docker/mautic/mautic-local.php.example mautic:/var/www/html/config/local.php
docker exec -u root mautic sh -c "chown www-data:www-data /var/www/html/config/local.php"
docker restart mautic
```

### InvoiceNinja 502 after restart
```bash
NINJA_IP=$(docker inspect invoiceninja \
  --format '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}')
sed -i '' "s|fastcgi_pass .*:9000|fastcgi_pass ${NINJA_IP}:9000|g" \
  /usr/local/etc/docker/buyornotbuy/invoiceninja/nginx-conf/default.conf
docker restart invoiceninja-nginx
```

### n8n SuiteCRM Login fails
Ensure Apache vhost has `ServerAlias host.docker.internal` then:
```bash
sudo /usr/local/bin/httpd -k restart
```

### SuiteCRM custom fields not showing
```bash
LEGACY="/usr/local/var/www/suitecrm/public/legacy"
sudo rm -rf $LEGACY/cache/modules/Leads/ $LEGACY/cache/smarty/templates_c/
sudo chown -R _www:_www $LEGACY/cache/
# Then run Quick Repair in browser at /index.php?module=Administration&action=repair&view=default
```

See `docs/TROUBLESHOOTING.md` for full guide.

---

## Production Migration

When deploying to a live server, replace all `.test` references:

```bash
grep -r "\.test" docker/ nginx/ suitecrm/ website/
```

Key changes:
- Nginx server configs — update `server_name`
- Mautic `local.php` — update `site_url` and `cors_valid_hosts`
- n8n env — update `WEBHOOK_URL` and `N8N_HOST`
- Website tracking scripts — update `mautic.test` and `matomo.test` URLs
- Mautic Admin → Webhooks — update all 5 webhook URLs
- Replace self-signed SSL with Let's Encrypt certs

See `docs/PRODUCTION-MIGRATION.md` for complete checklist.

---

## Project Status

### ✅ Completed

- [x] Full infrastructure setup (Nginx, Apache, MySQL, Docker)
- [x] SSL certificates for all `.test` domains
- [x] Mautic 5.x — tracking, forms, lead scoring, webhooks, email sequences
- [x] SuiteCRM 8.x — leads, opportunities, custom Buyer Requirements fields
- [x] n8n — 5 active workflows connecting all systems
- [x] Matomo — privacy-first analytics
- [x] Invoice Ninja — invoicing platform
- [x] 11-email follow-up sequence via Brevo
- [x] Hot lead alert system (50+ points → instant agent notification)
- [x] End-to-end funnel test passed
- [x] Performance optimisation (MySQL, Nginx, PHP opcache)
- [x] All services updated to latest stable versions

### 🚧 Next Steps

- [ ] Resolve remaining SuiteCRM Location Preferences field rendering
- [ ] Write actual email sequence copy (all 11 emails)
- [ ] Build out website content (pages, copy, design)
- [ ] SuiteCRM reports and pipeline dashboard
- [ ] n8n → Invoice Ninja automation (lead converts → client → invoice)
- [ ] Calendar/booking integration (Cal.com or Calendly)
- [ ] SMS hot lead alerts via Twilio
- [ ] Production deployment to live server

---

## File Structure

```
buyornotbuy-stack/
├── README.md                              ← This file
├── .env.example                           ← Environment variable template (safe to commit)
├── .gitignore                             ← Excludes .env, certs, logs, cache
│
├── docker/
│   ├── mautic/
│   │   ├── docker-compose.yml
│   │   └── mautic-local.php.example       ← Mautic PHP config template
│   ├── n8n/
│   │   └── docker-compose.yml             ← Workflow IDs documented inline
│   ├── matomo/
│   │   └── docker-compose.yml
│   └── invoiceninja/
│       ├── docker-compose.yml
│       └── nginx-conf/default.conf        ← PHP-FPM proxy config
│
├── nginx/
│   └── servers/
│       ├── mautic.conf
│       ├── buyornotbuy.conf
│       ├── matomo.conf
│       ├── n8n.conf
│       ├── invoiceninja.conf
│       └── suitecrm.conf
│
├── suitecrm/
│   ├── custom/
│   │   ├── modules/Leads/
│   │   │   ├── metadata/editviewdefs.php  ← Lead form layout (2 custom panels)
│   │   │   └── language/en_us.lang.php    ← Custom field labels
│   │   └── Extension/
│   │       ├── modules/Leads/Ext/Vardefs/
│   │       │   └── buyornotbuy_vardefs.php ← Field type definitions
│   │       └── application/Ext/Language/
│   │           └── buyornotbuy_dropdowns.php ← 3 custom dropdown lists
│   └── sql/
│       └── add_custom_fields.sql          ← DB migration for 13 custom fields
│
├── scripts/
│   ├── health-check.sh                    ← Ping all 6 services
│   ├── start-all.sh                       ← Start everything in correct order
│   └── update-ip.sh                       ← Fix IP after network reconnect
│
├── website/
│   └── tracking-snippets.html            ← Mautic + Matomo embed codes + CSS
│
└── docs/
    ├── SETUP.md                           ← Detailed fresh install guide
    ├── TROUBLESHOOTING.md                 ← 10 common issues with fixes
    └── PRODUCTION-MIGRATION.md            ← Go-live checklist
```

---

*Built with open-source tools — Mautic · SuiteCRM · n8n · Matomo · Invoice Ninja · Brevo*
