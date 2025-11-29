import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Boxes, Palette } from "lucide-react";

const technologies = [
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "Bland AI", category: "AI/Voice" },
  { name: "React", category: "Frontend" },
  { name: "MongoDB", category: "Database" },
  { name: "REST API", category: "Integration" }
];

const skills = [
  "Full-stack web development with MERN stack",
  "Third-party API integration (Bland AI voice platform)",
  "Asynchronous processing and webhook handling",
  "RESTful API design and implementation",
  "Real-time data visualization and analytics",
  "Scalable database design for call logs and leads"
];

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-2 text-sm border-accent/30">
            For Recruiters & Mentors
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Built as a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Full-Stack Graduation Project
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This project demonstrates expertise in modern web development, AI integration, 
            and building scalable solutions for real-world business problems.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tech Stack */}
          <Card className="p-8 bg-gradient-card border-border/50 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Boxes className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-2xl">Technologies Used</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium"
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
          </Card>
          
          {/* Skills Demonstrated */}
          <Card className="p-8 bg-gradient-card border-border/50 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-2xl">Skills Demonstrated</h3>
            </div>
            
            <ul className="space-y-3">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
