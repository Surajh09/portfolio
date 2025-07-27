import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Brain, 
  Server, 
  Globe, 
  GitBranch, 
  Cloud
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "text-tech-blue",
      skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Backend Development", 
      icon: Code2,
      color: "text-primary",
      skills: ["Python", "Django", "Flask", "Java", "Spring Boot", "Express.js", "GoLang", "Rust"]
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-tech-green", 
      skills: ["MongoDB", "PostgreSQL", "S3 Bucket"]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "text-tech-purple",
      skills: ["OpenAI", "Gemini", "Azure Doc Intelligence", "Llama", "TensorFlow", "Pandas", "Matplotlib"]
    },
    {
      title: "DevOps & Infrastructure",
      icon: Server,
      color: "text-tech-blue",
      skills: ["Docker", "Linux", "RHEL", "Homelab Management", "Git", "GitHub"]
    },
    {
      title: "Cloud Technology",
      icon: Cloud,
      color: "text-tech-blue",
      skills: ["Amazon Web Service", "Render", "Vercel", "Google Cloud Platform"]
    },
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Technologies and tools I work with across the full development stack
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.title}
                  className="bg-card/50 border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fadeInUp hover:shadow-md hover:shadow-primary"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                      <span className="text-foreground">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge 
                          key={skill}
                          variant="secondary" 
                          className="bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-card/30 border-border/50 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Currently Learning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deepening my expertise in <span className="text-primary font-medium">ML Ops practices</span>, 
                  exploring <span className="text-tech-purple font-medium">advanced AI architectures</span>, 
                  and enhancing my <span className="text-tech-green font-medium">infrastructure automation</span> skills 
                  to bridge the gap between development and production AI systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;