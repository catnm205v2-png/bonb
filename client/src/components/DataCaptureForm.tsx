import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Heart, Phone, Search } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  priceRange: z.string().min(1, { message: "Price range is required." }),
  propertyType: z.string().min(1, { message: "Property type is required." }),
});

export function DataCaptureForm() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      priceRange: "",
      propertyType: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Interest Registered",
      description: "We'll be in touch with curated listings matching your criteria.",
    });
    form.reset();
  }

  return (
    <section id="listings" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Find your <br />
              <span className="text-gradient">perfect property.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Browse our curated collection of premium homes and rental properties. 
              Tell us what you're looking for, and we'll guide you through every step 
              of the journey—from viewing to closing.
            </p>

            <div className="space-y-6 pt-4">
              {[
                { icon: Search, title: "Advanced Search", desc: "Filter by location, price, size, and amenities." },
                { icon: Heart, title: "Save Favorites", desc: "Keep track of properties you love." },
                { icon: Phone, title: "Expert Guidance", desc: "Get personalized recommendations from our agents." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl glass-panel border border-primary/20 bg-primary/5">
                  <div className="mt-1 bg-primary/20 p-2 rounded-lg h-fit">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Glowing backdrop effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[2rem] blur-2xl opacity-20" />
            
            <div className="relative glass-panel rounded-3xl p-8 md:p-12 border-t border-l border-white/10">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Start Your Search</h3>
                <p className="text-sm text-muted-foreground">Find homes matching your preferences.</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Smith" className="bg-black/40 border-white/10 focus-visible:ring-primary h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" className="bg-black/40 border-white/10 focus-visible:ring-primary h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="priceRange"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Budget Range</FormLabel>
                          <FormControl>
                            <Input placeholder="$500K - $1M" className="bg-black/40 border-white/10 focus-visible:ring-primary h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="propertyType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Property Type</FormLabel>
                          <FormControl>
                            <Input placeholder="House, Condo, etc." className="bg-black/40 border-white/10 focus-visible:ring-primary h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" className="w-full h-14 text-lg mt-4 bg-white text-black hover:bg-white/90 font-medium">
                    Get Recommendations <Search className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <p className="text-center text-xs text-muted-foreground mt-4">
                    We respect your privacy. Your information is secure.
                  </p>
                </form>
              </Form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}