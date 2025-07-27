import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Let's discuss opportunities, collaborations, or just have a chat about tech
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
                <div className="space-y-4">
                  <Card className="bg-card/50 border-border/50 hover:shadow-card transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Email</p>
                          <p className="text-sm text-muted-foreground"><a href="mailto:surajhemnani04@gmail.com">surajhemnnai04@gmail.com</a></p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50 border-border/50 hover:shadow-card transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-tech-green" />
                        <div>
                          <p className="font-medium text-foreground">Location</p>
                          <p className="text-sm text-muted-foreground">Chandigarh, India</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Connect with me</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="hover:bg-gray-300 transition-colors">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-gray-300 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <Card className="bg-card/30 border-border/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-foreground">Currently Available For</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• ML Ops Engineering positions</li>
                    <li>• AI/ML project collaborations</li>
                    <li>• Freelance development work</li>
                    <li>• Technical mentoring</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Send a Message</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                      <Input placeholder="Your name" className="bg-background/50" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                      <Input type="email" placeholder="your.email@example.com" className="bg-background/50" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                    <Input placeholder="What's this about?" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Tell me more about your project or opportunity..."
                      rows={6}
                      className="bg-background/50"
                    />
                  </div>
                  <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;