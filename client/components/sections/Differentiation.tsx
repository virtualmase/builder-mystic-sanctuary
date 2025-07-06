import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Shield,
  Zap,
  Brain,
  TrendingUp,
  Code,
  Users,
  Target,
  CheckCircle2,
} from "lucide-react";

const differentiators = [
  {
    title: "Technical Architecture + Marketing Operations",
    description:
      "Unique combination of blockchain engineering and proven SEO expertise",
    icon: <Code className="h-8 w-8" />,
    details: [
      "Built 9+ production Web3 applications",
      "85% organic traffic growth at Kraken",
      "Post-quantum cryptography implementation",
      "190+ international regions optimized",
    ],
    competitive: "vs. Traditional marketers who lack technical depth",
    color: "text-blue-400",
  },
  {
    title: "Crypto Exchange Experience",
    description:
      "Direct experience optimizing major cryptocurrency platform infrastructure",
    icon: <Shield className="h-8 w-8" />,
    details: [
      "Technical SEO at Kraken Exchange",
      "Complex multi-language architecture",
      "Real-time trading data optimization",
      "Regulatory compliance understanding",
    ],
    competitive: "vs. General marketers without crypto industry knowledge",
    color: "text-green-400",
  },
  {
    title: "AI & Automation Expertise",
    description: "Advanced automation and AI system integration capabilities",
    icon: <Brain className="h-8 w-8" />,
    details: [
      "Archie AI navigational system",
      "Quantum insights dashboard",
      "SEO automation frameworks",
      "60% team efficiency improvements",
    ],
    competitive: "vs. Manual-only marketing operations professionals",
    color: "text-purple-400",
  },
  {
    title: "Proven Performance Results",
    description: "Measurable impact across technical and marketing metrics",
    icon: <TrendingUp className="h-8 w-8" />,
    details: [
      "99.8% network uptime (Lighthouse Node)",
      "40% page performance improvement",
      "Core Web Vitals optimization",
      "Advanced schema implementation",
    ],
    competitive: "vs. Candidates with theoretical knowledge only",
    color: "text-cyan-400",
  },
];

const competitorComparison = [
  {
    category: "Technical Depth",
    mason: "Blockchain architect + SEO expert",
    others: "Marketing generalists",
    advantage: "Deep technical understanding",
  },
  {
    category: "Crypto Experience",
    mason: "Direct exchange platform work",
    others: "Traditional industries only",
    advantage: "Industry-specific expertise",
  },
  {
    category: "Automation Skills",
    mason: "AI systems + SEO automation",
    others: "Manual processes",
    advantage: "Scalable efficiency",
  },
  {
    category: "Innovation",
    mason: "Web3 R&D + Marketing Operations",
    others: "Conventional approaches",
    advantage: "Future-ready solutions",
  },
];

export default function Differentiation() {
  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-grid-dark opacity-15" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="glass-bg text-primary border-0 mb-4 px-4 py-2 font-mono"
          >
            Competitive Advantage
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-mono">
            What Sets Me Apart
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-mono">
            The unique intersection of blockchain architecture expertise and
            proven marketing operations success that creates unmatched value for
            crypto companies.
          </p>
        </div>

        {/* Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {differentiators.map((diff, index) => (
            <Card
              key={index}
              className="glass-bg border border-glass-border hover:box-shadow-glow transition-all duration-200"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-3">
                  <div className={`${diff.color}`}>{diff.icon}</div>
                  <CardTitle className="text-lg text-white font-mono">
                    {diff.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-200 font-mono">
                  {diff.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {diff.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-start gap-3 text-gray-100 font-mono text-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 border-t border-glass-border">
                  <p className="text-xs text-gray-300 font-mono italic">
                    {diff.competitive}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Competitive Comparison Table */}
        <div className="glass-bg rounded-2xl p-8 border border-glass-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              Competitive Comparison
            </h3>
            <p className="text-gray-200 font-mono">
              How my unique background compares to traditional marketing
              operations candidates
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="text-left py-4 px-4 text-gray-200 font-mono">
                    Category
                  </th>
                  <th className="text-left py-4 px-4 text-primary font-mono">
                    Mason
                  </th>
                  <th className="text-left py-4 px-4 text-gray-300 font-mono">
                    Others
                  </th>
                  <th className="text-left py-4 px-4 text-gray-200 font-mono">
                    Advantage
                  </th>
                </tr>
              </thead>
              <tbody>
                {competitorComparison.map((comp, index) => (
                  <tr key={index} className="border-b border-glass-border/50">
                    <td className="py-4 px-4 text-white font-mono font-medium">
                      {comp.category}
                    </td>
                    <td className="py-4 px-4 text-primary font-mono">
                      {comp.mason}
                    </td>
                    <td className="py-4 px-4 text-gray-400 font-mono">
                      {comp.others}
                    </td>
                    <td className="py-4 px-4 text-green-400 font-mono">
                      {comp.advantage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto glass-bg rounded-2xl p-8 border border-glass-border">
            <Target className="h-12 w-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              The Perfect Fit for Gemini's Growth
            </h3>
            <p className="text-gray-200 font-mono leading-relaxed mb-6">
              My unique combination of blockchain architecture expertise, proven
              SEO results at a major crypto exchange, and advanced automation
              capabilities makes me the ideal candidate to drive Gemini's
              marketing operations forward. I bring both the technical
              credibility to work with engineering teams and the marketing
              operations experience to deliver measurable growth results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-mono">
                  Technical + Marketing
                </div>
                <p className="text-gray-300 font-mono">Rare combination</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-mono">
                  Crypto Native
                </div>
                <p className="text-gray-300 font-mono">Industry expertise</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-mono">
                  Proven Results
                </div>
                <p className="text-gray-300 font-mono">Measurable impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
