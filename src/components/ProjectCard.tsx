import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

const ProjectCard = ({ id, title, description, tags, image }: ProjectCardProps) => {
  return (
    <Link to={`/project/${id}`}>
      <Card className="group relative overflow-hidden border-glow bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:scale-105 cursor-pointer h-full">
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Image */}
        {image && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
          </div>
        )}

        <div className="relative z-10 p-6">
          {/* Title */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-2xl font-orbitron font-bold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-4 line-clamp-3 font-rajdhani">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-primary/30 text-primary bg-primary/5 font-rajdhani"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Corner Accent */}
          <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;
