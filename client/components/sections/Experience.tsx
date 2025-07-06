import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, MapPin, ExternalLink, TrendingUp } from "lucide-react";

const experiences = [
  {
    title: "Founder & Chief Architect",
    company: "Coreweaver Labs",
    location: "Global / Remote",
    period: "2022 - Present",
    type: "Founder & Lead",
    description:
      "Founded R&D laboratory building decentralized AI systems for smarter cities and quantum computing integration. Architected 'Archie' AI navigational system and comprehensive Web3 infrastructure across three technology layers.",
    achievements: [
      "Built 9+ production applications across Infrastructure, Search+Compute, and Interface layers",
      "Developed 'Archie' AI system with quantum insights dashboard and post-quantum security",
      "Architected Lighthouse Node network with 99.8% uptime and real-time signal processing",
      "Created Mycelium Network routing system achieving 99.8% network efficiency",
      "Implemented post-quantum cryptography with secure distributed systems architecture",
      "Built CQF Visualizer and Oracle Engine for complex data visualization and analytics",
    ],
    technologies: [
      "Quantum Computing",
      "AI/ML Systems",
      "Post-Quantum Cryptography",
      "React/Three.js",
      "Decentralized Networks",
    ],
  },
  {
    title: "Technical SEO Associate",
    company: "Kraken",
    location: "San Francisco, CA",
    period: "2021 - 2022",
    type: "Full-time",
    description:
      "Led comprehensive technical SEO optimization for leading global cryptocurrency exchange handling thousands of market and educational pages. Managed complex architecture, international hreflang implementation, and cross-functional collaboration across content, UX, marketing, engineering, and security teams.",
    achievements: [
      "Executed landing page builds and QA processes using Builder.io and Contentful CMS platforms",
      "Implemented comprehensive hreflang structure covering 190+ international markets",
      "Supported go-to-market launches with product page updates and campaign URL management",
      "Maintained SEO hygiene through metadata updates, alt text optimization, and redirect management",
      "Built automated monitoring dashboards and compiled regular traffic reports for optimization",
      "Collaborated with dev, design, and product marketing teams on cross-functional web projects",
      "Enhanced localization workflows and multi-language QA processes for global content",
    ],
    technologies: [
      "Google Search Console",
      "Google Analytics 4",
      "PageSpeed Insights",
      "Looker Studio",
      "Hreflang Validators",
    ],
  },
  {
    title: "SEO Intern",
    company: "Digital Marketing Agency",
    location: "Remote",
    period: "2020 - 2021",
    type: "Internship",
    description:
      "Supported SEO initiatives and technical website optimization for multiple client websites, learning foundational SEO principles while contributing to organic growth campaigns.",
    achievements: [
      "Assisted with technical SEO audits for 15+ client websites identifying key improvements",
      "Contributed to 25% increase in organic traffic through metadata optimization and content strategy",
      "Conducted keyword research and competitive analysis supporting content marketing campaigns",
      "Built SEO performance dashboards using Google Analytics and Search Console data",
    ],
    technologies: [
      "Google Analytics",
      "Search Console",
      "SEMrush",
      "Screaming Frog",
      "Excel",
    ],
  },
];

const certifications = [
  {
    name: "SEO Fundamentals",
    issuer: "Moz",
    year: "2021",
    badge: "https://moz.com/",
  },
  {
    name: "Technical SEO Certification",
    issuer: "Ahrefs",
    year: "2021",
    badge: "https://ahrefs.com/",
  },
  {
    name: "Google Analytics Certified",
    issuer: "Google",
    year: "2022",
    badge: "https://skillshop.credential.net/",
  },
];

export default function Experience() {
  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-radial-blue opacity-20" />
      <div className="absolute inset-0 bg-grid-dark opacity-10" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="glass-bg text-primary border-0 mb-4 px-4 py-2 font-mono"
          >
            Technical Experience
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-mono">
            Blockchain Development Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Deep technical background in blockchain architecture, smart contract
            development, and Web3 ecosystem building with focus on security and
            innovation.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="glass-bg border border-glass-border hover:box-shadow-glow transition-all duration-200"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-white mb-2 font-mono">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-gray-100 mb-3 font-mono">
                      {exp.company}
                    </CardDescription>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-400 font-mono">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <Badge
                        variant="outline"
                        className="w-fit glass-bg border-glass-border text-primary font-mono"
                      >
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-white leading-relaxed font-mono">
                  {exp.description}
                </p>

                <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2 font-mono">
                    <TrendingUp className="h-4 w-4" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-3 text-gray-100 font-mono"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3 font-mono">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="glass-bg border-glass-border text-gray-300 font-mono"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="glass-bg rounded-2xl p-8 border border-glass-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              Certifications & Training
            </h3>
            <p className="text-gray-200 max-w-2xl mx-auto font-mono">
              Continuously learning and staying current with industry best
              practices and platform updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="text-center p-6 glass-bg rounded-xl border border-glass-border hover:box-shadow-glow transition-all duration-200"
              >
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4 inline-block">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    {cert.name.split(" ")[0].charAt(0)}
                  </div>
                </div>
                <h4 className="font-bold text-white mb-2 font-mono">
                  {cert.name}
                </h4>
                <p className="text-sm text-gray-200 mb-2 font-mono">
                  {cert.issuer}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-300 font-mono">
                  <Calendar className="h-4 w-4" />
                  <span>{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-12 glass-bg rounded-2xl p-8 border border-glass-border">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              Education
            </h3>
            <div className="max-w-md mx-auto">
              <h4 className="font-bold text-primary text-lg mb-2 font-mono">
                Bachelor of Science in Marketing
              </h4>
              <p className="text-gray-200 mb-2 font-mono">
                University of California
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-300 font-mono">
                <Calendar className="h-4 w-4" />
                <span>Graduated 2022</span>
              </div>
              <p className="text-sm text-gray-200 mt-3 font-mono">
                Concentration in Digital Marketing & Analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
