import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink, Users } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();

  // Sample project data (in a real app, this would come from a database)
  const projects: Record<string, any> = {
    "1": {
      title: "Smart Home Automation",
      description:
        "A comprehensive IoT-based home automation system that leverages Machine Learning to create intelligent, predictive environments. The system learns from user behavior patterns and automatically adjusts lighting, temperature, and security settings for optimal comfort and energy efficiency.",
      longDescription:
        "This project represents the cutting edge of smart home technology, integrating multiple IoT sensors and actuators with advanced ML algorithms. The system processes data from motion sensors, temperature monitors, light sensors, and user interaction patterns to build a comprehensive model of household behavior. Using this model, it can predict when rooms will be occupied, pre-adjust climate settings, and optimize energy consumption throughout the day.",
      tags: ["IoT", "Machine Learning", "Home Automation", "Python", "MQTT"],
      technologies: [
        "Raspberry Pi 4",
        "ESP32 Microcontrollers",
        "TensorFlow",
        "MQTT Protocol",
        "Node-RED",
        "InfluxDB",
      ],
      teamMembers: ["Alex Quantum", "Maya Neural"],
      githubUrl: "https://github.com",
    },
    "2": {
      title: "Autonomous Drone Swarm",
      description:
        "A coordinated fleet of drones using advanced ML algorithms for real-time path planning and obstacle avoidance in complex environments.",
      longDescription:
        "This autonomous drone swarm project demonstrates the power of distributed AI and swarm intelligence. Each drone operates semi-independently while maintaining communication with the swarm, using computer vision and ML models to navigate environments, avoid obstacles, and coordinate movements. The system employs reinforcement learning for path optimization and neural networks for object detection.",
      tags: ["Robotics", "ML", "Computer Vision", "ROS", "Python"],
      technologies: [
        "DJI Tello EDU Drones",
        "ROS (Robot Operating System)",
        "OpenCV",
        "YOLO Object Detection",
        "PyTorch",
      ],
      teamMembers: ["Kai Robotics", "Zara Vision"],
      githubUrl: "https://github.com",
    },
    "3": {
      title: "Industrial Predictive Maintenance",
      description:
        "ML-based system for predicting equipment failures using IoT sensor data from manufacturing plants.",
      longDescription:
        "This industrial solution transforms maintenance operations from reactive to predictive. By analyzing vibration patterns, temperature fluctuations, and operational metrics from IoT sensors, the system can predict equipment failures days or weeks in advance. This allows for scheduled maintenance during planned downtime, reducing costly emergency repairs and production interruptions.",
      tags: ["IoT", "Predictive Analytics", "Industry 4.0", "Big Data"],
      technologies: [
        "Industrial IoT Sensors",
        "Apache Kafka",
        "Scikit-learn",
        "PostgreSQL",
        "Grafana",
      ],
      teamMembers: ["Alex Quantum", "Maya Neural", "Kai Robotics"],
      githubUrl: "https://github.com",
    },
  };

  const project = projects[id || "1"] || projects["1"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-primary/20 bg-card/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" className="gap-2 hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-rajdhani">Back to Projects</span>
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 text-glow">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6 font-rajdhani">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string, index: number) => (
              <Badge
                key={index}
                variant="outline"
                className="border-primary/30 text-primary bg-primary/5 font-rajdhani px-4 py-1 text-sm"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex gap-4">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 font-orbitron font-semibold">
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Button>
            <Button
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 font-rajdhani"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="border-glow rounded-lg p-8 bg-card/50 backdrop-blur-sm">
              <h2 className="text-2xl font-orbitron font-bold mb-4 text-foreground">
                About This Project
              </h2>
              <p className="text-muted-foreground font-rajdhani leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Technologies */}
            <div className="border-glow rounded-lg p-8 bg-card/50 backdrop-blur-sm">
              <h2 className="text-2xl font-orbitron font-bold mb-4 text-foreground">
                Technologies Used
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {project.technologies.map((tech: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 border border-primary/20 rounded-lg bg-background/50"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="font-rajdhani text-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features (Placeholder) */}
            <div className="border-glow rounded-lg p-8 bg-card/50 backdrop-blur-sm">
              <h2 className="text-2xl font-orbitron font-bold mb-4 text-foreground">
                Key Features
              </h2>
              <ul className="space-y-3 font-rajdhani text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Real-time data processing and analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Advanced machine learning algorithms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Scalable IoT infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>User-friendly dashboard interface</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Team Members */}
            <div className="border-glow rounded-lg p-6 bg-card/50 backdrop-blur-sm sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-orbitron font-bold text-foreground">
                  Team Members
                </h3>
              </div>
              <div className="space-y-3">
                {project.teamMembers.map((member: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 border border-primary/20 rounded-lg bg-background/50 hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-orbitron font-bold text-sm">
                      {member.charAt(0)}
                    </div>
                    <span className="font-rajdhani text-foreground">
                      {member}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
