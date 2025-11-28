import { Bot, FileText, Target, BarChart3, Clock, Link2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Cold Calls",
    description: "Uses Bland AI for realistic, natural voice conversations that sound human."
  },
  {
    icon: FileText,
    title: "Property-Focused Scripts",
    description: "Customizable scripts for property listings, viewing bookings, and follow-ups."
  },
  {
    icon: Target,
    title: "Lead Qualification",
    description: "Collects budget, location, timeline, and intent automatically."
  },
  {
    icon: BarChart3,
    title: "Call Analytics Dashboard",
    description: "View call outcomes, conversion rates, and key metrics in real-time."
  },
  {
    icon: Clock,
    title: "24/7 Calling",
    description: "Reach leads in different time zones, even outside office hours."
  },
  {
    icon: Link2,
    title: "Easy Integration",
    description: "Connects with CRM or sends data via email/CSV export."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything You Need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Scale Cold Calling
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card hover:shadow-card transition-all hover:-translate-y-1 group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-primary transition-all">
                    <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
