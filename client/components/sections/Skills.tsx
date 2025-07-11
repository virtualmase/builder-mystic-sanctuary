import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Globe,
  Search,
  BarChart3,
  Wrench,
  Users,
  Target,
  Code,
  Palette,
  TrendingUp,
  FileText,
  Settings,
  Zap,
} from "lucide-react";

const skillCategories = [
  {
    title: "CMS & Content Management",
    description: "Landing page builds and content operations",
    icon: <Code className="h-6 w-6" />,
    skills: [
      "Builder.io",
      "Contentful",
      "Webflow",
      "WordPress",
      "Content Publishing",
    ],
    color: "bg-primary",
  },
  {
    title: "AI & Content Generation",
    description: "Next-gen AI tools for creative content production",
    icon: <Zap className="h-6 w-6" />,
    skills: [
      "Sora",
      "Whisk",
      "Google Labs",
      "Manus",
      "Veo3",
      "Prompt Engineering",
      "Generative Search",
      "Answer Engine",
      "Digital Entity Mapping",
      "Intent Media",
    ],
    color: "bg-primary",
  },
  {
    title: "Technical Tools",
    description: "Development and documentation tools",
    icon: <Wrench className="h-6 w-6" />,
    skills: ["Docker", "PowerShell", "llms.txt", "Markdown (.md)"],
    color: "bg-primary",
  },
  {
    title: "SEO & Analytics",
    description: "Technical SEO and performance monitoring",
    icon: <BarChart3 className="h-6 w-6" />,
    skills: [
      "Technical SEO",
      "Google Analytics 4",
      "Looker",
      "Metadata Optimization",
      "Performance Reporting",
    ],
    color: "bg-primary",
  },
  {
    title: "QA & Process Management",
    description: "Quality assurance and workflow optimization",
    icon: <Settings className="h-6 w-6" />,
    skills: [
      "Landing Page QA",
      "Multi-language QA",
      "Process Documentation",
      "Localization Workflows",
      "Cross-functional Coordination",
    ],
    color: "bg-primary",
  },
  {
    title: "Go-to-Market Support",
    description: "Launch coordination and campaign management",
    icon: <Target className="h-6 w-6" />,
    skills: [
      "Product Launch Support",
      "Campaign URL Management",
      "Asset Coordination",
      "Content Updates",
      "Launch QA",
    ],
    color: "bg-primary",
  },
];

const achievements = [
  {
    metric: "190+",
    label: "Markets Optimized",
    icon: <Code className="h-5 w-5" />,
  },
  {
    metric: "2.3s",
    label: "LCP Improvement",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    metric: "25%",
    label: "Efficiency Gained",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    metric: "100%",
    label: "Schema Coverage",
    icon: <Zap className="h-5 w-5" />,
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-radial-purple opacity-30" />
      <div className="absolute inset-0 bg-grid-dark opacity-20" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="glass-bg text-primary border-0 mb-4 px-4 py-2 font-mono"
          >
            Full-Stack Marketing Technology
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-mono">
            Technical Architecture + Growth Operations
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto font-mono">
            End-to-end technology stack combining blockchain development
            expertise with proven marketing operations success. Built for crypto
            companies that need both technical credibility and measurable growth
            results.
          </p>
        </div>

        {/* Achievement Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center p-6 glass-bg rounded-xl border border-glass-border"
            >
              <div className="flex justify-center mb-3 text-primary">
                {achievement.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1 font-mono">
                {achievement.metric}
              </div>
              <div className="text-sm text-readable-muted font-mono">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass-bg border border-glass-border hover:box-shadow-glow transition-all duration-200"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`${category.color} text-white p-2 rounded-lg`}
                  >
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl text-white font-mono">
                    {category.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-200 font-mono">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="glass-bg border-glass-border text-gray-200 hover:bg-white/10 font-mono"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Qualifications */}
        <div className="mt-16 glass-bg rounded-2xl p-8 border border-glass-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              Perfect Fit for Gemini's Growth Trajectory
            </h3>
            <p className="text-white max-w-2xl mx-auto font-mono">
              Combining deep crypto market understanding with proven technical
              marketing capabilities. Ready to bridge Gemini's engineering
              excellence with data-driven growth operations that scale globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="glass-bg p-4 rounded-lg border border-glass-border mb-4">
                <Globe className="h-8 w-8 text-primary mx-auto" />
              </div>
              <h4 className="font-semibold text-white mb-2 font-mono">
                Crypto Market Knowledge
              </h4>
              <p className="text-gray-100 font-mono">
                Understanding of DeFi, trading, custody, and regulatory
                landscape across crypto markets
              </p>
            </div>

            <div className="text-center">
              <div className="glass-bg p-4 rounded-lg border border-glass-border mb-4">
                <BarChart3 className="h-8 w-8 text-primary mx-auto" />
              </div>
              <h4 className="font-semibold text-white mb-2 font-mono">
                Fintech Experience
              </h4>
              <p className="text-gray-100 font-mono">
                Growth marketing for financial services with focus on compliance
                and user acquisition
              </p>
            </div>

            <div className="text-center">
              <div className="glass-bg p-4 rounded-lg border border-glass-border mb-4">
                <Users className="h-8 w-8 text-primary mx-auto" />
              </div>
              <h4 className="font-semibold text-white mb-2 font-mono">
                Community Building
              </h4>
              <p className="text-gray-100 font-mono">
                Experience with Discord, Twitter, and crypto community
                engagement strategies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
