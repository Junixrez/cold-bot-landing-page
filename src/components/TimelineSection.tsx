import { Card } from "@/components/ui/card";
import { Lightbulb, Wrench, TestTube, Rocket } from "lucide-react";

const timeline = [
  {
    icon: Lightbulb,
    phase: "Problem Identification",
    description: "Researched the property market and identified pain points in cold calling processes. Interviewed agents about their daily challenges."
  },
  {
    icon: Wrench,
    phase: "Design & Development",
    description: "Built the full-stack application using MERN stack. Integrated Bland AI's voice API for natural conversations and real-time call handling."
  },
  {
    icon: TestTube,
    phase: "Testing & Refinement",
    description: "Tested AI prompts and call flows with sample property scenarios. Optimized for lead qualification accuracy and natural conversation flow."
  },
  {
    icon: Rocket,
    phase: "Future Plans",
    description: "Planning to add multi-language support, advanced CRM integrations, and machine learning for predictive lead scoring."
  }
];

const TimelineSection = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            From Idea to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Graduation Project
            </span>
          </h2>
        </div>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block" />
          
          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="relative p-6 md:ml-20 bg-gradient-card border-border/50 hover:shadow-card transition-all"
                >
                  {/* Icon badge */}
                  <div className="absolute -left-4 md:-left-[5.5rem] top-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="md:ml-4">
                    <h3 className="font-bold text-xl mb-2">{item.phase}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
