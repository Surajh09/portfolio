import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Server, Brain } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            My journey through the evolving landscape of software development
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">My Story</h3>
              <p className="text-foreground/80 leading-relaxed">
                I'm Suraj Hemnani, a passionate DevOps Engineer and Software Developer based in Nagpur, Maharashtra, India. 
                I started my journey as a backend developer, fascinated by the architecture and logic that powers modern applications. 
                Through various internships and projects, I've gained comprehensive experience across the full development stack.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Today, I work as an Associate Software Developer at Peakeaze, a dynamic startup in Chandigarh, 
                where I've transitioned into AI development. I'm passionate about security and performance for my clients, 
                which is why I always keep updating and use the best technologies. My goal is to specialize in ML Ops engineering, 
                combining my backend expertise with cutting-edge AI technologies.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="bg-card/50 border-border/50 hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <h4 className="font-semibold text-foreground">Education</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Recent college graduate with a strong foundation in computer science</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Briefcase className="h-6 w-6 text-tech-blue" />
                    <h4 className="font-semibold text-foreground">Experience</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">1.5 Years+ Experience and Currently Working as Associate Software Developer at Peakeaze</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Server className="h-6 w-6 text-tech-green" />
                    <h4 className="font-semibold text-foreground">Cloud Warden</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Managing personal server infrastructure for project testing and Implementing eBPF using Suricatta and Network Tunneling for enhanced cloud Security</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Brain className="h-6 w-6 text-tech-purple" />
                    <h4 className="font-semibold text-foreground">AI Focus</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Working with LLMs and planning ML Ops specialization</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              When I'm not coding, I'm either experimenting with new AI models, 
              optimizing my Cloud Warden setup, or helping friends deploy their projects.
              I believe in continuous learning and the power of technology to solve real-world problems.
            </p> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;