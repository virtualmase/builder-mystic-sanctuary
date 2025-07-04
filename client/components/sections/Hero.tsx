import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Radial gradient backgrounds */}
      <div className="absolute inset-0 bg-radial-purple" />
      <div className="absolute inset-0 bg-radial-pink" />
      <div className="absolute inset-0 bg-radial-blue" />
      <div className="absolute inset-0 bg-grid-dark opacity-30" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="glass-bg text-primary border-0 px-4 py-2 text-sm font-mono font-medium"
              >
                &gt; Open to Crypto & Web3 Opportunities
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono tracking-tight text-white">
                Marketing Operations
                <span className="gradient-text block text-shadow-glow">
                  for Crypto & Web3
                </span>
              </h1>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl font-mono">
              Growth marketing specialist with expertise in performance
              marketing, conversion optimization, and data-driven campaigns.
              Passionate about cryptocurrency and building the future of
              decentralized finance.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-gray-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>New York, NY / Remote</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Ready for Gemini</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-hero-gradient hover:opacity-90 text-white shadow-lg box-shadow-glow transition-all duration-200 font-mono"
              >
                View Crypto Marketing Experience
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-bg border-glass-border text-white hover:bg-glass/80 font-mono"
              >
                Apply to Gemini
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative p-8 glass-bg rounded-2xl box-shadow-glow">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white font-mono">
                    Performance Marketing Results
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary border-0 font-mono"
                  >
                    Web3 Ready
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 glow-blue" />
                    <div>
                      <p className="font-medium text-white font-mono">
                        $2M+ Ad Spend Managed
                      </p>
                      <p className="text-sm text-gray-300 font-mono">
                        Across Google Ads, Facebook, and Apple Search Ads
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white font-mono">
                        35% CAC Reduction
                      </p>
                      <p className="text-sm text-gray-300 font-mono">
                        Through conversion rate optimization and A/B testing
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white font-mono">
                        50+ Growth Experiments
                      </p>
                      <p className="text-sm text-gray-300 font-mono">
                        Data-driven testing across acquisition funnels
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
