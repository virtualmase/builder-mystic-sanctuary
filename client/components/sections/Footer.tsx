import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Phone,
  Download,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white relative">
      {/* CTA Section */}
      <div className="border-b border-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <Badge
              variant="secondary"
              className="bg-primary/20 text-primary border border-primary/30 mb-6 px-4 py-2 font-mono"
            >
              &gt; Ready to Collaborate
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-mono text-readable">
              Ready to Bridge Technical Innovation
              <span className="block text-primary">with Growth Marketing?</span>
            </h2>
            <p className="text-xl text-readable-secondary mb-8 font-mono leading-relaxed">
              Combining deep blockchain architecture expertise with proven SEO
              and marketing operations experience. Let's discuss how technical
              precision can drive measurable growth results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-mono border border-primary/20"
              >
                <Mail className="mr-2 h-5 w-5" />
                mason@coreweaver.dev
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary/40 text-primary hover:bg-primary/10 font-mono"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold font-mono text-lg">
                M
              </div>
              <div>
                <span className="font-bold text-xl text-readable font-mono block">
                  Mason
                </span>
                <span className="text-sm text-primary font-mono">
                  Blockchain → Marketing Operations
                </span>
              </div>
            </div>
            <p className="text-readable-secondary mb-6 max-w-md font-mono leading-relaxed">
              Blockchain Security Architect with proven SEO and marketing
              operations experience. Bridging technical innovation with growth
              marketing for crypto and fintech companies.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="mailto:mason@coreweaver.dev"
                className="text-readable-muted hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-readable-muted hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com"
                className="text-readable-muted hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Core Expertise */}
          <div>
            <h3 className="font-semibold text-readable mb-4 font-mono">
              Core Expertise
            </h3>
            <div className="space-y-3 text-readable-secondary font-mono text-sm">
              <div className="hover:text-primary transition-colors cursor-pointer">
                → Blockchain Architecture
              </div>
              <div className="hover:text-primary transition-colors cursor-pointer">
                → Technical SEO
              </div>
              <div className="hover:text-primary transition-colors cursor-pointer">
                → On-Chain Analytics
              </div>
              <div className="hover:text-primary transition-colors cursor-pointer">
                → Marketing Operations
              </div>
              <div className="hover:text-primary transition-colors cursor-pointer">
                → Web3 Infrastructure
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-readable mb-4 font-mono">
              Navigate
            </h3>
            <div className="space-y-3 text-readable-secondary font-mono text-sm">
              <a
                href="#skills"
                className="block hover:text-primary transition-colors"
              >
                → Skills & Capabilities
              </a>
              <a
                href="#experience"
                className="block hover:text-primary transition-colors"
              >
                → Experience Journey
              </a>
              <a
                href="#case-study"
                className="block hover:text-primary transition-colors"
              >
                → Case Studies
              </a>
              <a
                href="https://mason-blockchain.vercel.app/"
                className="block hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                → Portfolio Site
              </a>
              <a
                href="https://v0-coreweaver-portal.vercel.app/"
                className="block hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                → Coreweaver Labs
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-4 text-readable-muted text-sm font-mono">
            <span>© 2025 Mason. All rights reserved.</span>
            <span className="hidden sm:block">•</span>
            <span className="text-primary">Built with precision & passion</span>
          </div>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center gap-2 text-readable-muted hover:text-primary transition-colors text-sm font-mono"
          >
            <ArrowUp className="h-4 w-4" />[ Return to Top ]
          </button>
        </div>
      </div>
    </footer>
  );
}
