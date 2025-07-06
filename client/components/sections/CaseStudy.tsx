import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  Target,
  CheckCircle2,
  BarChart3,
  Globe,
  Search,
  Zap,
} from "lucide-react";

const caseStudyData = {
  title: "Kraken Exchange Technical SEO Transformation",
  subtitle: "85% Organic Traffic Growth + 190+ International Regions Optimized",
  overview:
    "Led comprehensive technical SEO optimization for one of the world's largest cryptocurrency exchanges during 2021-2022, managing complex multi-language architecture with thousands of market and educational pages.",
  challenge:
    "Kraken's platform required optimization across vast dynamic architecture serving real-time trading data globally, with complex technical debt from rapid crypto market updates, mobile-first requirements for high-frequency trading, and compliance across 190+ international regions with varying regulatory requirements.",
  solution:
    "Executed systematic technical SEO transformation using advanced automation tools, comprehensive hreflang implementation, Core Web Vitals optimization, and cross-functional collaboration with engineering, security, and compliance teams to achieve measurable performance improvements.",
  metrics: [
    {
      value: "85%",
      label: "Organic Traffic Growth",
      icon: <TrendingUp className="h-5 w-5" />,
      color: "text-green-400",
    },
    {
      value: "40%",
      label: "Page Load Performance",
      icon: <Zap className="h-5 w-5" />,
      color: "text-blue-400",
    },
    {
      value: "60%",
      label: "Team Efficiency Gain",
      icon: <Target className="h-5 w-5" />,
      color: "text-purple-400",
    },
    {
      value: "190+",
      label: "Regions Optimized",
      icon: <Globe className="h-5 w-5" />,
      color: "text-cyan-400",
    },
  ],
};

const processSteps = [
  {
    phase: "Technical Architecture Audit",
    duration: "3 weeks",
    activities: [
      "Comprehensive site crawl analysis using Screaming Frog and custom tools",
      "Core Web Vitals assessment across thousands of trading pair pages",
      "International hreflang audit covering 190+ regions",
      "JavaScript rendering analysis for real-time market data",
    ],
    tools: [
      "Google Search Console",
      "PageSpeed Insights",
      "Screaming Frog",
      "Custom Scripts",
    ],
  },
  {
    phase: "Strategy & Framework Development",
    duration: "2 weeks",
    activities: [
      "Developed automated SEO monitoring and reporting framework",
      "Created comprehensive schema markup strategy for financial products",
      "Established Core Web Vitals optimization roadmap",
      "Built cross-functional collaboration protocols with engineering teams",
    ],
    tools: ["Looker Studio", "Python Scripts", "Schema.org", "Internal Tools"],
  },
  {
    phase: "Technical Implementation",
    duration: "8 weeks",
    activities: [
      "Implemented advanced image optimization and WebP conversion at scale",
      "Deployed comprehensive hreflang structure for 190+ international regions",
      "Optimized JavaScript rendering for search engine crawlability",
      "Established automated technical debt monitoring systems",
    ],
    tools: [
      "CDN Optimization",
      "Hreflang Validators",
      "JavaScript Tools",
      "Automation Scripts",
    ],
  },
  {
    phase: "Performance Optimization",
    duration: "4 weeks",
    activities: [
      "Enhanced mobile-first design for high-frequency trading interfaces",
      "Implemented advanced internal linking strategies for page authority distribution",
      "Optimized crawl budget allocation across dynamic content sections",
      "Created automated Core Web Vitals monitoring and alerting",
    ],
    tools: [
      "Mobile Testing Tools",
      "Link Analysis",
      "Crawl Management",
      "Performance Monitoring",
    ],
  },
  {
    phase: "Automation & Scaling",
    duration: "3 weeks",
    activities: [
      "Built automated SEO health monitoring dashboards",
      "Implemented team efficiency workflows reducing manual tasks by 60%",
      "Created comprehensive documentation and training materials",
      "Established ongoing performance monitoring and optimization protocols",
    ],
    tools: [
      "Dashboard Automation",
      "Workflow Tools",
      "Documentation",
      "Training Systems",
    ],
  },
];

export default function CaseStudy() {
  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-radial-blue opacity-10" />
      <div className="absolute inset-0 bg-grid-dark opacity-10" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="glass-bg text-primary border-0 mb-4 px-4 py-2 font-mono"
          >
            Featured Case Study
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-mono">
            {caseStudyData.title}
          </h2>
          <p className="text-xl text-primary mb-8 font-mono">
            {caseStudyData.subtitle}
          </p>
          <p className="text-gray-200 max-w-4xl mx-auto leading-relaxed font-mono">
            {caseStudyData.overview}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {caseStudyData.metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-6 glass-bg rounded-xl border border-glass-border"
            >
              <div className={`flex justify-center mb-3 ${metric.color}`}>
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1 font-mono">
                {metric.value}
              </div>
              <div className="text-sm text-gray-200 font-mono">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="glass-bg border border-glass-border">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-3 font-mono">
                <Target className="h-6 w-6 text-red-400" />
                The Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 leading-relaxed font-mono">
                {caseStudyData.challenge}
              </p>
            </CardContent>
          </Card>

          <Card className="glass-bg border border-glass-border">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-3 font-mono">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
                The Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 leading-relaxed font-mono">
                {caseStudyData.solution}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              Project Process & Timeline
            </h3>
            <p className="text-gray-200 max-w-2xl mx-auto font-mono">
              A systematic approach ensuring quality delivery and measurable
              results at each phase.
            </p>
          </div>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="glass-bg border border-glass-border hover:box-shadow-glow transition-all duration-200"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full font-bold font-mono">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-lg text-white font-mono">
                          {step.phase}
                        </CardTitle>
                        <CardDescription className="text-gray-200 font-mono">
                          Duration: {step.duration}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h4 className="font-bold text-white mb-3 font-mono">
                        Key Activities
                      </h4>
                      <ul className="space-y-2">
                        {step.activities.map((activity, actIndex) => (
                          <li
                            key={actIndex}
                            className="flex items-start gap-3 text-gray-200 font-mono"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-3 font-mono">
                        Tools Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {step.tools.map((tool, toolIndex) => (
                          <Badge
                            key={toolIndex}
                            variant="outline"
                            className="glass-bg border-glass-border text-gray-200 font-mono"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Results & Impact */}
        <div className="glass-bg rounded-2xl p-8 border border-glass-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              Results & Future Impact
            </h3>
            <p className="text-gray-200 max-w-2xl mx-auto font-mono">
              This foundation sets the stage for next-generation marketing
              operations that combine AI automation with blockchain-native
              understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-slate-900/80 rounded-lg border border-primary/20">
              <Search className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2 font-mono">
                SEO Innovation
              </h4>
              <p className="text-sm text-gray-200 font-mono">
                Advanced hreflang & schema implementation across 190+ regions,
                setting foundation for AI-powered SEO automation
              </p>
            </div>

            <div className="text-center p-6 bg-slate-900/80 rounded-lg border border-primary/20">
              <BarChart3 className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2 font-mono">
                Performance Engineering
              </h4>
              <p className="text-sm text-gray-200 font-mono">
                40% performance improvement through technical architecture that
                enables real-time data optimization
              </p>
            </div>

            <div className="text-center p-6 bg-slate-900/80 rounded-lg border border-primary/20">
              <Users className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2 font-mono">
                Scalable Systems
              </h4>
              <p className="text-sm text-gray-200 font-mono">
                60% efficiency gain through automation frameworks that scale
                marketing operations for global crypto platforms
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              View Full Case Study Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
