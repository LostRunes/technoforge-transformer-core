import { Cpu, Network, BrainCircuit } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Cpu,
      title: "IoT Innovation",
      description:
        "Cutting-edge Internet of Things projects that connect the physical and digital worlds.",
    },
    {
      icon: BrainCircuit,
      title: "Machine Learning",
      description:
        "Advanced AI and ML algorithms that learn, adapt, and transform data into intelligence.",
    },
    {
      icon: Network,
      title: "Connected Systems",
      description:
        "Integrated solutions where hardware meets software in perfect harmony.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background opacity-10" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-glow">
            About TechnoForge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-rajdhani">
            TechnoForge: Rise of the Transformers is where the future of
            technology takes shape. An elite showcase of IoT and Machine
            Learning projects that push the boundaries of innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative border-glow rounded-lg p-8 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 rounded-lg bg-gradient-to-br from-primary to-secondary p-0.5">
                  <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-orbitron font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-rajdhani">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
