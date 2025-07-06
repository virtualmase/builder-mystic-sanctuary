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
  subtitle: "85% Organic Traffic Growth + 40% Performance Improvement",
  overview:
    "Led comprehensive technical SEO optimization for one of the world's largest cryptocurrency exchanges, handling thousands of market and educational pages across 190+ international regions.",
  challenge:
    "Kraken faced complex technical SEO challenges including vast dynamic architecture, global performance demands, structured data implementation for rich snippets, technical debt from frequent updates, and mobile-first requirements for real-time trading data.",
  solution:
    "Implemented advanced image optimization, WebP conversions, comprehensive hreflang coverage, Core Web Vitals improvements, and SEO automation dashboards while collaborating across content, UX, marketing, engineering, and security teams.",
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
    phase: "Discovery & Analysis",
    duration: "2 weeks",
    activities: [
      "Conducted comprehensive site audit using GA4 and Search Console",
      "Analyzed competitor SEO strategies and best practices",
      "Evaluated current Builder.io and Contentful setup",
      "Identified key performance bottlenecks and opportunities",
    ],
    tools: ["Google Analytics 4", "Search Console", "Looker", "Builder.io"],
  },
  {
    phase: "Strategy & Planning",
    duration: "1 week",
    activities: [
      "Developed comprehensive SEO strategy with metadata framework",
      "Created content migration plan from legacy CMS to Builder.io",
      "Established KPI tracking and reporting procedures",
      "Coordinated with design and development teams",
    ],
    tools: ["Notion", "Builder.io", "Contentful", "Project Management"],
  },
  {
    phase: "Implementation",
    duration: "6 weeks",
    activities: [
      "Migrated 25+ landing pages to Builder.io with optimized templates",
      "Implemented comprehensive metadata and alt text optimization",
      "Set up redirect management and internal linking structure",
      "Established localization workflows for 8 languages",
    ],
    tools: ["Builder.io", "Contentful", "Google Tag Manager", "Webflow"],
  },
  {
    phase: "Testing & QA",
    duration: "2 weeks",
    activities: [
      "Conducted multi-language QA across all landing pages",
      "Performed A/B testing on key conversion elements",
      "Validated Core Web Vitals improvements",
      "Tested campaign URLs and tracking implementation",
    ],
    tools: ["Builder.io", "Google Analytics", "Testing Tools", "QA Checklists"],
  },
  {
    phase: "Launch & Monitoring",
    duration: "1 week",
    activities: [
      "Coordinated go-to-market launch with marketing team",
      "Implemented performance monitoring and reporting",
      "Created documentation for ongoing maintenance",
      "Trained team members on new workflows",
    ],
    tools: ["GA4", "Looker", "Builder.io", "Documentation"],
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
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 flex items-center gap-3">
                <Target className="h-6 w-6 text-red-500" />
                The Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                {caseStudyData.challenge}
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500" />
                The Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
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
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Results & Business Impact
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The optimization project delivered significant improvements across
              all key performance indicators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <Search className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">SEO Impact</h4>
              <p className="text-sm text-gray-600">
                Improved search rankings for 50+ target keywords, with 40%
                increase in organic traffic within 3 months
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <BarChart3 className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">
                Performance Gains
              </h4>
              <p className="text-sm text-gray-600">
                85% improvement in page load times and Core Web Vitals scores
                across all landing pages
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <Users className="h-8 w-8 text-purple-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">
                User Experience
              </h4>
              <p className="text-sm text-gray-600">
                28% increase in conversion rates and 35% reduction in bounce
                rate across optimized pages
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
