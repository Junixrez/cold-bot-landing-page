import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Volume2 } from "lucide-react";

const DemoSection = () => {
  return (
    <section id="demo" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            See{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              LeadCaller AI in Action
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Listen to a real example of LeadCaller AI qualifying a property lead
          </p>
        </div>
        
        <Card className="p-12 bg-gradient-card border-border/50 shadow-elevated">
          <div className="flex flex-col items-center space-y-6">
            {/* Visual representation of audio player */}
            <div className="w-full max-w-2xl bg-muted/50 rounded-2xl p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Volume2 className="h-6 w-6 text-accent" />
                  <span className="font-semibold">Sample Cold Call Recording</span>
                </div>
                <span className="text-sm text-muted-foreground">2:34</span>
              </div>
              
              {/* Waveform visualization placeholder */}
              <div className="flex items-center gap-1 h-16">
                {[...Array(50)].map((_, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-accent rounded-full opacity-70"
                    style={{ height: `${Math.random() * 60 + 20}%` }}
                  />
                ))}
              </div>
              
              <div className="flex justify-center">
                <Button size="lg" variant="accent" className="gap-2">
                  <Play className="h-5 w-5" />
                  Play Demo Call
                </Button>
              </div>
            </div>
            
            <p className="text-center text-muted-foreground max-w-xl">
              This demo showcases LeadCaller AI naturally conversing with a potential buyer, 
              collecting their budget range, preferred locations, and desired property type 
              before scheduling a viewing appointment.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DemoSection;
