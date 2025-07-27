import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10 animate-fadeInUp">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Suraj Hemnani
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground mb-8 space-y-2">
            <p className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <span className="text-tech-blue">Backend Developer</span> → 
              <span className="text-primary mx-2">AI Developer</span> → 
              <span className="text-tech-green">ML Ops Engineer</span>
            </p>
            <p className="text-lg opacity-80 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              Associate Software Developer at Peakeaze | Recent Graduate | AI Enthusiast
            </p>
          </div>

          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            Passionate about building intelligent systems and scalable infrastructure. 
            From crafting robust backends to implementing cutting-edge AI solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="hover:bg-gray-300 transition-colors">
                <a href="https://github.com/surajh09" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-gray-300 transition-colors">
                <a href="https://www.linkedin.com/in/suraj-hemnani-b4623a251/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;