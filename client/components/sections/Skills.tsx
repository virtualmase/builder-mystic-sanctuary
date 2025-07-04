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
    title: "CMS & No-Code Platforms",
    description:
      "Experience with modern content management and website building tools",
    icon: <Code className="h-6 w-6" />,
    skills: ["Builder.io", "Contentful", "Webflow", "WordPress", "Notion"],
    color: "bg-blue-500",
  },
  {
    title: "SEO & Web Analytics",
    description:
      "Search engine optimization and performance monitoring expertise",
    icon: <Search className="h-6 w-6" />,
    skills: [
      "Google Analytics 4",
      "Search Console",
      "Looker",
      "Metadata Optimization",
      "Core Web Vitals",
    ],
    color: "bg-green-500",
  },
  {
    title: "Marketing Operations",
    description: "End-to-end campaign management and optimization",
    icon: <Target className="h-6 w-6" />,
    skills: [
      "Go-to-Market Strategy",
      "A/B Testing",
      "CRO",
      "Campaign URLs",
      "Landing Page QA",
    ],
    color: "bg-purple-500",
  },
  {
    title: "Web Operations",
    description: "Technical processes and workflow optimization",
    icon: <Settings className="h-6 w-6" />,
    skills: [
      "Localization Workflows",
      "Multi-language QA",
      "Redirects Management",
      "Internal Linking",
    ],
    color: "bg-orange-500",
  },
];

const achievements = [
  {
    metric: "85%",
    label: "Page Speed Improvement",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    metric: "40%",
    label: "Organic Traffic Growth",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    metric: "15+",
    label: "Product Launches",
    icon: <Target className="h-5 w-5" />,
  },
  {
    metric: "99.9%",
    label: "QA Accuracy Rate",
    icon: <FileText className="h-5 w-5" />,
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="bg-blue-100 text-blue-700 mb-4 px-4 py-2"
          >
            Core Competencies
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive experience across marketing technology, SEO
            optimization, and web operations with a focus on measurable results.
          </p>
        </div>

        {/* Achievement Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100"
            >
              <div className="flex justify-center mb-3 text-blue-500">
                {achievement.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {achievement.metric}
              </div>
              <div className="text-sm text-gray-600">{achievement.label}</div>
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
