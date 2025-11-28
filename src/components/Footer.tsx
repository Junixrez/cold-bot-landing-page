import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-muted/30 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Cold Bot" className="h-10 w-auto" />
          </div>
          
          <div className="text-center md:text-right text-muted-foreground">
            <p className="text-sm">
              © 2024 Cold Bot. A graduation project showcasing full-stack development.
            </p>
            <p className="text-xs mt-1">
              Built with Bland AI, Node.js, React, and MongoDB
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
