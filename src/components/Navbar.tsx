import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <span className="text-2xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-primary">Lead</span>
              <span className="text-foreground">Caller</span>
              <span className="text-accent"> AI</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection("tech-stack")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Tech Stack
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
            <Button size="sm" variant="accent" onClick={() => scrollToSection("contact")}>
              Book Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection("tech-stack")}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Tech Stack
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Contact
            </button>
            <Button size="sm" variant="accent" className="w-full" onClick={() => scrollToSection("contact")}>
              Book Demo
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
