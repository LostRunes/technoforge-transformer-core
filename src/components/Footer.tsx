import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-primary/20 bg-card/30 backdrop-blur-sm">
      {/* Glow Effect at Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-orbitron font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TechnoForge
            </h3>
            <p className="text-muted-foreground font-rajdhani">
              Where innovation transforms reality through IoT and Machine
              Learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-orbitron font-semibold mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2 font-rajdhani">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-orbitron font-semibold mb-4 text-foreground">
              Connect
            </h4>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all box-glow">
                <Github className="w-5 h-5 text-primary" />
              </button>
              <button className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all box-glow">
                <Twitter className="w-5 h-5 text-primary" />
              </button>
              <button className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all box-glow">
                <Linkedin className="w-5 h-5 text-primary" />
              </button>
              <button className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all box-glow">
                <Mail className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10 text-center">
          <p className="text-muted-foreground font-rajdhani">
            © 2025 TechnoForge. All rights reserved. Built with passion for
            innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
