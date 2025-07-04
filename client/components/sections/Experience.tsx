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
    title: "Blockchain Ecosystem Architect",
    company: "Coreweaver Labs",
    location: "Global / Remote",
    period: "2022 - Present",
    type: "Founder & Lead",
    description:
      "Founded and led R&D hub exploring foundational Web3 strategies, building secure blockchain applications, and developing on-chain analytics platforms for DeFi ecosystem growth.",
    achievements: [
      "Built 6+ production Web3 applications including DeFi platforms and analytics tools",
      "Developed advanced on-chain analytics platform with real-time data visualization",
      "Architected secure smart contract systems with 100% security audit success rate",
      "Created comprehensive knowledge infrastructure for decentralized ecosystem growth",
    ],
    technologies: ["React", "Three.js", "Web3", "Smart Contracts", "D3.js"],
  },
  {
    title: "Security Protocol Developer",
    company: "DeFi Infrastructure",
    location: "Remote",
    period: "2021 - 2022",
    type: "Contract",
    description:
      "Specialized in smart contract auditing, network architecture design, and security protocol implementation for various DeFi projects and blockchain networks.",
    achievements: [
      "Conducted security audits for 10+ smart contract protocols with zero vulnerabilities",
      "Designed decentralized network architecture supporting high-throughput transactions",
      "Implemented on-chain security protocols reducing attack vectors by 90%",
      "Built data visualization tools for monitoring blockchain network performance",
    ],
    technologies: [
      "Python",
      "Solidity",
      "Network Security",
      "Analytics",
      "Blockchain",
    ],
  },
];

const certifications = [
  {
    name: "Smart Contract Security",
    issuer: "ConsenSys",
    year: "2024",
    badge: "https://consensys.net/",
  },
  {
    name: "Blockchain Architecture",
    issuer: "MIT",
    year: "2023",
    badge: "https://ocw.mit.edu/",
  },
  {
    name: "Web3 Development",
    issuer: "Ethereum Foundation",
    year: "2022",
    badge: "https://ethereum.org/",
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
                    <CardDescription className="text-lg font-medium text-gray-300 mb-3 font-mono">
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
                <p className="text-gray-300 leading-relaxed font-mono">
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
                        className="flex items-start gap-3 text-gray-300 font-mono"
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
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Certifications & Training
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Continuously learning and staying current with industry best
              practices and platform updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4 inline-block">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    {cert.name.split(" ")[0].charAt(0)}
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {cert.name}
                </h4>
                <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                  <Calendar className="h-3 w-3" />
                  <span>{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
            <div className="max-w-md mx-auto">
              <h4 className="font-semibold text-gray-900 text-lg mb-2">
                Bachelor of Science in Marketing
              </h4>
              <p className="text-gray-600 mb-2">University of California</p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                <span>Graduated 2022</span>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                Concentration in Digital Marketing & Analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
