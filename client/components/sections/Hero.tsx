import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-background">
      {/* More visible gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent" />
      <div className="absolute inset-0 bg-grid-dark opacity-20" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="glass-bg text-primary border-0 px-4 py-2 text-sm font-mono font-medium"
              >
                &gt; Full-Stack Marketing Founder
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono tracking-tight">
                <span className="text-white drop-shadow-lg">
                  Technical Marketing Leader
                </span>
                <span className="block text-primary drop-shadow-lg text-shadow-glow">
                  Blockchain → Growth Operations
                </span>
              </h1>
            </div>

            <p className="text-xl text-white leading-relaxed max-w-2xl font-mono">
              Full-stack founder and blockchain architect who scaled Kraken's
              technical SEO across 190+ markets. Expert in Builder.io,
              Contentful, AI automation, and building marketing operations that
              bridge engineering and growth teams.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-gray-200 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Available Globally / Remote</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>mason@coreweaver.dev</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-200 font-mono border border-primary/20"
              >
                See Gemini-Specific Value
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60 font-mono backdrop-blur-sm"
              >
                View Live Portfolio
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative p-8 bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-primary/20 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white font-mono">
                    Full-Stack Value Stack
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-primary/30 text-primary border border-primary/40 font-mono"
                  >
                    Tech + Growth
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 glow-blue" />
                    <div>
                      <p className="font-medium text-white font-mono">
                        Blockchain Architecture + Marketing
                      </p>
                      <p className="text-sm text-gray-200 font-mono">
                        9+ production Web3 apps, 190+ market SEO optimization at
                        Kraken
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white font-mono">
                        Modern CMS & AI Automation
                      </p>
                      <p className="text-sm text-gray-200 font-mono">
                        Builder.io, Contentful, GPT-4, and custom automation
                        workflows
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white font-mono">
                        Crypto Market Understanding
                      </p>
                      <p className="text-sm text-gray-200 font-mono">
                        Real exchange experience, DeFi knowledge, regulatory
                        awareness
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
