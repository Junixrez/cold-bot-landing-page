import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PhoneCall, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <img src={logo} alt="Cold Bot Logo" className="h-16 w-auto" />
            </div>
            
            {/* Badge */}
            <Badge variant="outline" className="px-4 py-2 text-sm border-accent/30 text-foreground/80">
              Graduation Project • Built with Bland AI, Node.js, and React
            </Badge>
            
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                Automate Your Property{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary">
                  Cold Calls
                </span>{" "}
                with Cold Bot
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Cold Bot is an AI-powered call bot that uses Bland AI to make smart, human‑like cold calls for your property business – qualifying leads and booking meetings while you focus on closing deals.
              </p>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="hero" className="group">
                <PhoneCall className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Book a Demo
              </Button>
              
              <Button size="lg" variant="outline" className="group">
                <Play className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Watch Demo Call
              </Button>
            </div>
          </div>
          
          {/* Right content - Dashboard mockup */}
          <div className="flex-1 relative animate-slide-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-3xl animate-pulse-slow" />
              <img 
                src={heroDashboard} 
                alt="Cold Bot Dashboard" 
                className="relative rounded-2xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
