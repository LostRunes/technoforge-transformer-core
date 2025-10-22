import { Github, Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Quantum",
      role: "IoT Engineer",
      bio: "Hardware wizard specializing in sensor networks",
    },
    {
      name: "Maya Neural",
      role: "ML Specialist",
      bio: "Deep learning expert with passion for AI",
    },
    {
      name: "Kai Robotics",
      role: "Systems Architect",
      bio: "Integration master building connected solutions",
    },
    {
      name: "Zara Vision",
      role: "Computer Vision Lead",
      bio: "Turning cameras into intelligent sensors",
    },
  ];

  return (
    <section id="team" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background opacity-10" />
      <div className="absolute top-40 left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-glow-secondary">
            The Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-rajdhani">
            Meet the brilliant minds transforming ideas into reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative border-glow rounded-lg p-6 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5">
                  <div className="w-full h-full bg-card rounded-full flex items-center justify-center text-3xl font-orbitron font-bold">
                    {member.name.charAt(0)}
                  </div>
                </div>

                <h3 className="text-xl font-orbitron font-bold mb-2 text-foreground">
                  {member.name}
                </h3>
                <p className="text-primary font-rajdhani font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm mb-4 font-rajdhani">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <button className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 transition-colors">
                    <Github className="w-4 h-4 text-primary" />
                  </button>
                  <button className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 transition-colors">
                    <Linkedin className="w-4 h-4 text-primary" />
                  </button>
                  <button className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
