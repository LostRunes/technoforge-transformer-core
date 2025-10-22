import ProjectCard from "./ProjectCard";

const ProjectGallery = () => {
  // Sample projects data
  const projects = [
    {
      id: "1",
      title: "Smart Home Automation",
      description:
        "IoT-based home automation system with ML-powered predictive analytics for energy optimization and comfort.",
      tags: ["IoT", "Machine Learning", "Home Automation"],
    },
    {
      id: "2",
      title: "Autonomous Drone Swarm",
      description:
        "Coordinated drone fleet using ML for path planning and obstacle avoidance in real-time environments.",
      tags: ["Robotics", "ML", "Computer Vision"],
    },
    {
      id: "3",
      title: "Industrial Predictive Maintenance",
      description:
        "ML-based system for predicting equipment failures using IoT sensor data from manufacturing plants.",
      tags: ["IoT", "Predictive Analytics", "Industry 4.0"],
    },
    {
      id: "4",
      title: "Smart Agriculture Monitor",
      description:
        "IoT sensors combined with ML algorithms to optimize crop yield and resource management.",
      tags: ["IoT", "Agriculture", "ML"],
    },
    {
      id: "5",
      title: "Traffic Flow Optimizer",
      description:
        "Real-time traffic management system using ML to predict congestion and optimize signal timing.",
      tags: ["IoT", "ML", "Smart City"],
    },
    {
      id: "6",
      title: "Health Monitoring Wearable",
      description:
        "Advanced wearable device with ML algorithms for early disease detection and health tracking.",
      tags: ["IoT", "Healthcare", "ML"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-glow">
            Project Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-rajdhani">
            Explore the innovative projects that define the future of IoT and
            Machine Learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
