import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50/50 py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-slate-100 bg-[size:20px_20px] opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 text-sm font-medium"
              >
                Available for New Opportunities
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Marketing & SEO
                <span className="bg-hero-gradient bg-clip-text text-transparent block">
                  Operations Specialist
                </span>
              </h1>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Experienced in landing page optimization, content management
              systems, and SEO implementation with a proven track record in
              Builder.io, Contentful, and web analytics platforms.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Remote / San Francisco Bay Area</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Available Immediately</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-200"
              >
                View Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 hover:bg-gray-50"
              >
                Download Resume
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative p-8 bg-white rounded-2xl shadow-2xl border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Recent Achievements
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700"
                  >
                    2024
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">
                        85% Improvement in Page Speed
                      </p>
                      <p className="text-sm text-gray-600">
                        Optimized landing pages resulting in better Core Web
                        Vitals
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">
                        40% Increase in Organic Traffic
                      </p>
                      <p className="text-sm text-gray-600">
                        SEO optimization and metadata improvements
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">
                        15+ Successful Product Launches
                      </p>
                      <p className="text-sm text-gray-600">
                        Coordinated go-to-market campaigns and QA processes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
