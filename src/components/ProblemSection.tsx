import { AlertCircle, Clock, FileX, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: Clock,
    title: "Agents waste hours dialing unqualified leads",
    description: "Your sales team spends valuable time on cold calls that don't convert."
  },
  {
    icon: FileX,
    title: "Inconsistent call scripts and follow-ups",
    description: "Every agent has a different approach, leading to mixed results."
  },
  {
    icon: TrendingDown,
    title: "Difficult to track metrics across hundreds of calls",
    description: "No clear visibility into what's working and what's not."
  },
  {
    icon: AlertCircle,
    title: "Missed opportunities outside working hours",
    description: "Leads in different time zones slip through the cracks."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Cold Calling for Property Is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Time‑Consuming and Expensive
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all hover:-translate-y-1"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-destructive" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{problem.title}</h3>
                    <p className="text-muted-foreground">{problem.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
