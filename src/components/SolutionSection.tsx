import { Upload, Phone, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: Upload,
    step: "Step 1",
    title: "Upload or connect your leads list",
    description:
      "Import your contact list from CSV, CRM, or spreadsheets. LeadCaller AI integrates with your existing tools seamlessly.",
  },
  {
    icon: Phone,
    step: "Step 2",
    title: "LeadCaller AI calls using Bland AI",
    description:
      "Natural, human-like voice conversations powered by Bland AI. Customizable scripts tailored for property viewings and sales.",
  },
  {
    icon: CheckCircle,
    step: "Step 3",
    title: "Qualified leads and appointments synced",
    description:
      "All qualified leads with budget, location, and timeline details sent to your CRM or email automatically.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              LeadCaller AI
            </span>{" "}
            Calls, Qualifies, and Books for You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with Bland AI for robust, reliable voice conversations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="relative p-8 bg-gradient-card border-border/50 hover:shadow-elevated transition-all hover:-translate-y-2"
              >
                {/* Step number badge */}
                <div className="absolute -top-4 left-8">
                  <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {step.step}
                  </div>
                </div>

                <div className="space-y-4 mt-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="font-bold text-xl">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
