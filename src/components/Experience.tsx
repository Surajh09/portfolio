import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Associate Software Developer",
      company: "Peakeaze",
      type: "Startup",
      location: "Chandigarh, India", 
      period: "May 2025 - Present",
      description: "Working as an AI developer in a dynamic startup environment, implementing machine learning solutions and contributing to cutting-edge AI projects.",
      link: "https://www.linkedin.com/posts/suraj-hemnani-b4623a251_newbeginnings-gratitude-softwaredeveloper-activity-7322638065468866560-bo14",
      highlights: [
        "AI Development",
        "LLM Integration", 
        "Startup Environment",
        "Team Collaboration"
      ],
      current: true
    },
    {
      title: "Full-Stack Software Developer Intern",
      company: "TaxWellness LLC",
      type: "Startup",
      location: "California, US (Remote)",
      period: "May 2024 - March 2025",
      description: "Working as an AI developer in a dynamic startup environment, implementing machine learning solutions and contributing to cutting-edge AI projects.",
      link: "https://www.linkedin.com/posts/suraj-hemnani-b4623a251_grateful-for-the-opportunity-to-embark-on-activity-7196199655796314112-KjaJ",
      highlights: [
        "AI Development",
        "LLM Integration",
        "Startup Environment",
        "Team Collaboration"
      ],
      current: false
    },
    {
      title: "Technical Co-incharge",
      company: "Encypherist",
      type: "Technical Forum",
      location: "Jhulelal Institute of Technology, Nagpur",
      period: "August 2023 - May 2025",
      description: "Technical forum for CSE department. Handling technical aspects of events, networking with speakers, and managing relationships. Resulted in better quality events.",
      highlights: [
        "Networking",
        "Team Management",
        "Event Organization",
        "Speaker Relations"
      ],
      current: false
    },
    {
      title: "Data Scientist Intern",
      company: "Lisica Tech",
      type: "Internship",
      location: "Kolkata, India",
      period: "August 2023 - October 2023",
      description: "Worked at Kolkata-based startup as a data science intern. Improved model efficiency by 10% using basic Machine Learning algorithms and data cleaning techniques.",
      link: "https://www.linkedin.com/posts/suraj-hemnani-b4623a251_internship-offer-letter-activity-7092188177918025729-c1eU",
      highlights: [
        "Python",
        "Pandas",
        "Matplotlib",
        "Machine Learning"
      ],
      current: false
    },
    {
      title: "Full Stack Web Developer",
      company: "Elegant Design",
      type: "Freelance",
      location: "Nagpur, Maharashtra",
      period: "September 2023 - December 2023",
      description: "Freelance web developer for a jewelry resale startup. Also worked as social media handler. Resulted in 45% increase in sales during 4 months of work.",
      highlights: [
        "Tailwind CSS",
        "PostgreSQL",
        "Django",
        "Social Media"
      ],
      current: false
    },
    {
      title: "Full Stack & Team Lead",
      company: "DSA Virtual Lab",
      type: "Project",
      location: "Jhulelal Institute of Technology",
      period: "March 2023 - July 2023",
      description: "Won 2nd place in project-based learning competition. Created a virtual lab for students to learn Data Structures in a fun, interactive, and graphical way.",
      link: "https://www.linkedin.com/posts/suraj-hemnani-b4623a251_connections-leadership-learningandgrowing-activity-7100470962801799169-aL9G",
      highlights: [
        "Team Leadership",
        "Django",
        "PostgreSQL",
        "DSA"
      ],
      current: false
    },
    {
      title: "Backend Developer & Team Coordinator",
      company: "PortfolioNest",
      type: "Project",
      location: "Project",
      period: "May 2022 - May 2023",
      description: "Web-based platform for personalized learning using ML and web scraping. Won 1st runner up prize at JSW Science Conclave.",
      link: "https://www.linkedin.com/posts/suraj-hemnani-b4623a251_project-activity-7021144344095043584-VNP4",
      highlights: [
        "Django",
        "PostgreSQL",
        "Machine Learning",
        "Web Scraping"
      ],
      current: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            My professional journey and key contributions
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.company}
                className={`bg-card/50 border-border/50 hover:shadow-card transition-all duration-300 ${
                  exp.current ? 'ring-2 ring-primary/20' : ''
                } animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              ><a href={exp.link}>
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                        <Badge variant="outline" className="text-xs">
                          {exp.type}
                        </Badge>
                        {exp.current && (
                          <Badge className="bg-primary/10 text-primary border-primary/20">
                            Current
                          </Badge>
                        )}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <Badge 
                        key={highlight}
                        variant="secondary"
                        className="bg-secondary/50 text-secondary-foreground"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                </a>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <Card className="bg-gradient-tech/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-foreground">Looking Forward</h3>
                <p className="text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                  I'm actively seeking opportunities in <span className="text-primary font-medium">ML Ops Engineering</span> 
                  where I can combine my backend development experience with my passion for AI and infrastructure. 
                  Ready to take on new challenges and contribute to innovative teams building the future of intelligent systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;