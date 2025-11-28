import { Target, DollarSign, MessageSquare, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Target,
    title: "More Qualified Meetings",
    description: "Focus your agents only on serious buyers and tenants who meet your criteria."
  },
  {
    icon: DollarSign,
    title: "Lower Outreach Costs",
    description: "Automate repetitive cold calls instead of hiring large outbound teams."
  },
  {
    icon: MessageSquare,
    title: "Consistent Pitch",
    description: "Every call follows best-practice scripts and captures the right data every time."
  },
  {
    icon: BarChart,
    title: "Better Data",
    description: "Every conversation is logged, tracked, and measurable for continuous improvement."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Property Teams{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Love Cold Bot
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card hover:shadow-elevated transition-all hover:-translate-y-2 group"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg group-hover:shadow-glow-accent transition-all">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="font-bold text-xl">{benefit.title}</h3>
                  <p className="text-muted-foreground text-lg">{benefit.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
