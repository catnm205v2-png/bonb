import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, BedDouble, Bath, Square, Heart } from "lucide-react";
import prop1 from "@/assets/images/property_1.jpg";
import prop2 from "@/assets/images/property_2.jpg";
import prop3 from "@/assets/images/property_3.jpg";
import prop4 from "@/assets/images/property_4.jpg";

type FilterType = "all" | "active" | "coming_soon" | "sold";

const properties = [
  {
    id: 1,
    image: prop1,
    price: "$850,000",
    address: "1245 Maplewood Drive, Elmhurst",
    beds: 4,
    baths: 3,
    sqft: "2,800",
    status: "active",
    type: "Single Family",
  },
  {
    id: 2,
    image: prop2,
    price: "$625,000",
    address: "890 Oak Lane, River Forest",
    beds: 3,
    baths: 2,
    sqft: "1,950",
    status: "coming_soon",
    type: "Townhouse",
  },
  {
    id: 3,
    image: prop3,
    price: "$495,000",
    address: "332 Pine Street, Apt 4B, Downtown",
    beds: 2,
    baths: 2,
    sqft: "1,400",
    status: "active",
    type: "Condo",
  },
  {
    id: 4,
    image: prop4,
    price: "$780,000",
    address: "567 Cedar Court, Highland Park",
    beds: 4,
    baths: 2.5,
    sqft: "2,400",
    status: "sold",
    type: "Single Family",
  },
];

export function PropertyGallery() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredProperties = properties.filter(
    (p) => filter === "all" || p.status === filter,
  );

  return (
    <section id="properties" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Curated Properties
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our portfolio of premium homes. Find your perfect match or
              see what we've recently sold for our clients.
            </p>
          </div>

          <div className="flex gap-2 p-1 bg-background rounded-full border border-border shadow-sm overflow-x-auto w-full md:w-auto">
            <FilterBtn
              active={filter === "all"}
              onClick={() => setFilter("all")}
            >
              All Properties
            </FilterBtn>
            <FilterBtn
              active={filter === "active"}
              onClick={() => setFilter("active")}
            >
              Active
            </FilterBtn>
            <FilterBtn
              active={filter === "coming_soon"}
              onClick={() => setFilter("coming_soon")}
            >
              Coming Soon
            </FilterBtn>
            <FilterBtn
              active={filter === "sold"}
              onClick={() => setFilter("sold")}
            >
              Recently Sold
            </FilterBtn>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="group bg-background rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.address}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge
                    className={
                      property.status === "sold"
                        ? "bg-muted text-muted-foreground hover:bg-muted"
                        : property.status === "coming_soon"
                          ? "bg-secondary text-secondary-foreground hover:bg-secondary"
                          : "bg-primary text-primary-foreground hover:bg-primary"
                    }
                  >
                    {property.status === "sold"
                      ? "SOLD"
                      : property.status === "coming_soon"
                        ? "COMING SOON"
                        : "FOR SALE"}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-background/80 backdrop-blur-sm border-none"
                  >
                    {property.type}
                  </Badge>
                </div>
                <button className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:text-primary hover:bg-background transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-2xl font-serif font-bold text-foreground">
                      {property.price}
                    </div>
                    <div className="flex items-center text-muted-foreground mt-1 text-sm">
                      <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                      <span className="truncate">{property.address}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 py-4 border-y border-border/50 mb-4">
                  <div className="flex items-center gap-2 text-foreground">
                    <BedDouble className="h-5 w-5 text-primary" />
                    <span className="font-medium">
                      {property.beds}{" "}
                      <span className="text-muted-foreground text-sm font-normal">
                        Beds
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Bath className="h-5 w-5 text-primary" />
                    <span className="font-medium">
                      {property.baths}{" "}
                      <span className="text-muted-foreground text-sm font-normal">
                        Baths
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Square className="h-5 w-5 text-primary" />
                    <span className="font-medium">
                      {property.sqft}{" "}
                      <span className="text-muted-foreground text-sm font-normal">
                        SqFt
                      </span>
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 rounded-full bg-primary hover:bg-primary/90">
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 rounded-full border-primary/20 hover:bg-primary/5"
                  >
                    Schedule Tour
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FilterBtn({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
      }`}
    >
      {children}
    </button>
  );
}
