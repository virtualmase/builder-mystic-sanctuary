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
    title: "Performance Marketing",
    description:
      "Paid advertising and user acquisition across digital channels",
    icon: <Target className="h-6 w-6" />,
    skills: [
      "Google Ads",
      "Facebook Ads",
      "Apple Search Ads",
      "TikTok Ads",
      "Twitter Ads",
    ],
    color: "bg-primary",
  },
  {
    title: "Marketing Analytics",
    description: "Data analysis and reporting for growth optimization",
    icon: <BarChart3 className="h-6 w-6" />,
    skills: [
      "Mixpanel",
      "Looker",
      "Google Analytics",
      "Branch Attribution",
      "Conversion Tracking",
    ],
    color: "bg-primary",
  },
  {
    title: "Growth & Experimentation",
    description: "A/B testing and conversion rate optimization",
    icon: <TrendingUp className="h-6 w-6" />,
    skills: [
      "A/B Testing",
      "Conversion Rate Optimization",
      "Funnel Analysis",
      "User Segmentation",
      "Growth Hacking",
    ],
    color: "bg-primary",
  },
  {
    title: "Marketing Automation",
    description: "Email, push, and lifecycle marketing campaigns",
    icon: <Zap className="h-6 w-6" />,
    skills: [
      "Braze",
      "Email Marketing",
      "Push Notifications",
      "In-App Messaging",
      "Customer Journeys",
    ],
    color: "bg-primary",
  },
];

const achievements = [
  {
    metric: "$2M+",
    label: "Ad Spend Managed",
    icon: <Target className="h-5 w-5" />,
  },
  {
    metric: "35%",
    label: "CAC Reduction",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    metric: "150%",
    label: "ROAS Improvement",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    metric: "50+",
    label: "A/B Tests Run",
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
            Growth Marketing Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-mono">
            Performance Marketing Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Data-driven growth marketing expertise with focus on user
            acquisition, conversion optimization, and performance analytics for
            crypto & fintech.
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
              <div className="text-sm text-gray-300 font-mono">
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
              className="border border-gray-200 hover:shadow-lg transition-shadow duration-200"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`${category.color} text-white p-2 rounded-lg`}
                  >
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {category.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
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
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Additional Qualifications
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond technical skills, I bring strong organizational abilities
              and collaborative experience working with cross-functional teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-4">
                <Users className="h-8 w-8 text-blue-500 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Cross-Functional Collaboration
              </h4>
              <p className="text-sm text-gray-600">
                Experience working with marketing, design, product, and
                communications teams
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-4">
                <BarChart3 className="h-8 w-8 text-green-500 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Performance Monitoring
              </h4>
              <p className="text-sm text-gray-600">
                Regular reporting and analysis to drive data-informed
                optimizations
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-4">
                <Wrench className="h-8 w-8 text-purple-500 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Process Improvement
              </h4>
              <p className="text-sm text-gray-600">
                Passion for optimizing workflows and implementing best practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
