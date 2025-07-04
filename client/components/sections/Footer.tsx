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
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <Badge
              variant="secondary"
              className="bg-blue-600 text-white mb-6 px-4 py-2"
            >
              Ready to Collaborate
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Looking for a marketing operations specialist who can drive
              results? I'd love to discuss how I can help optimize your landing
              pages, improve SEO performance, and streamline your web
              operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800"
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
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                M
              </div>
              <span className="font-bold text-xl text-white">
                Marketing Pro
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Experienced marketing operations specialist with expertise in
              Builder.io, Contentful, SEO optimization, and web analytics.
              Passionate about driving measurable results through data-driven
              strategies.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:contact@marketingpro.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:contact@marketingpro.com"
                  className="hover:text-white transition-colors"
                >
                  contact@marketingpro.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>San Francisco Bay Area, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-3 text-gray-300">
              <a
                href="#skills"
                className="block hover:text-white transition-colors"
              >
                Skills & Expertise
              </a>
              <a
                href="#experience"
                className="block hover:text-white transition-colors"
              >
                Experience
              </a>
              <a
                href="#case-study"
                className="block hover:text-white transition-colors"
              >
                Case Studies
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Marketing Pro. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
