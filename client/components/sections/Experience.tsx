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
    title: "Marketing Operations Specialist",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2023 - Present",
    type: "Full-time",
    description:
      "Led landing page optimization and SEO initiatives, managing content across Builder.io and Contentful platforms while coordinating go-to-market launches.",
    achievements: [
      "Increased organic traffic by 40% through comprehensive SEO strategy",
      "Optimized 25+ landing pages resulting in 28% conversion rate improvement",
      "Managed content for 15+ product launches with 99.9% QA accuracy",
      "Implemented localization workflows supporting 8 languages",
    ],
    technologies: [
      "Builder.io",
      "Contentful",
      "Google Analytics 4",
      "Search Console",
      "Looker",
    ],
  },
  {
    title: "Digital Marketing Intern",
    company: "StartupXYZ",
    location: "Remote",
    period: "2022 - 2023",
    type: "Internship",
    description:
      "Supported website operations and content management while learning SEO best practices and analytics reporting.",
    achievements: [
      "Assisted with metadata optimization for 100+ pages",
      "Created weekly performance reports using GA4 and Looker",
      "Contributed to A/B testing initiatives improving CTR by 15%",
      "Maintained WordPress site with 50+ pages of content",
    ],
    technologies: ["WordPress", "Google Analytics", "Webflow", "Notion"],
  },
];

const certifications = [
  {
    name: "Google Analytics 4 Certification",
    issuer: "Google",
    year: "2024",
    badge: "https://skillshop.credential.net/",
  },
  {
    name: "SEO Fundamentals",
    issuer: "SEMrush Academy",
    year: "2023",
    badge: "https://www.semrush.com/academy/",
  },
  {
    name: "Builder.io Certified Developer",
    issuer: "Builder.io",
    year: "2024",
    badge: "https://www.builder.io/",
  },
];

export default function Experience() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-700 mb-4 px-4 py-2"
          >
            Professional Background
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A track record of driving measurable results in marketing
            operations, SEO, and web development with industry-leading tools and
            platforms.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-gray-700 mb-3">
                      {exp.company}
                    </CardDescription>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
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
                        className="w-fit bg-white border-gray-200"
                      >
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-white border-gray-200 text-gray-700"
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
