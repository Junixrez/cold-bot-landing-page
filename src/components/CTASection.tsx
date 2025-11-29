import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PhoneCall, Mail, Linkedin, Github } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Interested in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Cold Bot or My Work?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hi, I'm a MERN stack developer specializing in AI‑powered web applications 
            and automation for real estate and SaaS products.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Businesses */}
          <Card className="p-8 bg-gradient-card border-border/50 space-y-6">
            <div className="space-y-2">
              <h3 className="font-bold text-2xl">For Property Businesses</h3>
              <p className="text-muted-foreground">
                See how Cold Bot can transform your cold calling process
              </p>
            </div>
            
            <Button size="lg" variant="hero" className="w-full group">
              <PhoneCall className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Book a Demo Call
            </Button>
          </Card>
          
          {/* For Recruiters */}
          <Card className="p-8 bg-gradient-card border-border/50 space-y-6">
            <div className="space-y-2">
              <h3 className="font-bold text-2xl">For Recruiters & Mentors</h3>
              <p className="text-muted-foreground">
                Let's discuss opportunities or this project
              </p>
            </div>
            
            <form className="space-y-4">
              <Input placeholder="Your name" className="bg-background" />
              <Input type="email" placeholder="Your email" className="bg-background" />
              <Textarea 
                placeholder="Your message" 
                className="bg-background min-h-[100px]" 
              />
              <Button size="lg" variant="accent" className="w-full">
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
        
        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-4">
          <Button variant="outline" size="lg" className="gap-2">
            <Mail className="h-5 w-5" />
            Email
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Github className="h-5 w-5" />
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
