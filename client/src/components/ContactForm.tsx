import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    workingWithRealtor: "no",
    remarks: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const mauticData = new FormData();
    mauticData.append("mauticform[first_name]", formData.name);
    mauticData.append("mauticform[email]", formData.email);
    mauticData.append("mauticform[phone]", formData.phone);
    mauticData.append("mauticform[f_message]", formData.remarks);
    mauticData.append(
      "mauticform[are_you_working_with_a_re]",
      formData.workingWithRealtor === "yes" ? "Yes" : "No",
    );
    mauticData.append("mauticform[formId]", "6");
    mauticData.append("mauticform[formName]", "propertyenquiry2");
    mauticData.append("mauticform[return]", "");

    try {
      await fetch("https://mautic.test/form/submit?formId=6", {
        method: "POST",
        body: mauticData,
        mode: "no-cors",
      });

      setSubmitMessage("Thank you! Your message has been sent successfully.");
      toast({
        title: "Message Sent",
        description: "Your enquiry was delivered through Mautic.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        workingWithRealtor: "no",
        remarks: "",
      });
    } catch (error) {
      setSubmitMessage(
        "There was an error sending your message. Please try again.",
      );
      toast({
        title: "Submission Failed",
        description: "There was a problem sending your enquiry.",
      });
      console.error("Mautic contact submit error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-8 bg-background border-border">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Let's Connect</h2>
        <p className="text-foreground/70">
          Have questions about properties or need assistance? Fill out the form
          below and we'll get back to you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background border-border"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(123) 456-7890"
            value={formData.phone}
            onChange={handleChange}
            required
            className="bg-background border-border"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="workingWithRealtor">
            Are you working with a Realtor?
          </Label>
          <select
            id="workingWithRealtor"
            name="workingWithRealtor"
            value={formData.workingWithRealtor}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="remarks">Remarks/Comments</Label>
          <Textarea
            id="remarks"
            name="remarks"
            placeholder="Tell us more about your inquiry..."
            value={formData.remarks}
            onChange={handleChange}
            rows={5}
            className="bg-background border-border resize-none"
          />
        </div>

        {submitMessage && (
          <div
            className={`p-4 rounded-md text-sm font-medium ${
              submitMessage.includes("successfully")
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {submitMessage}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 rounded-md"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Card>
  );
}
