import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, Download, Mail, Linkedin, Github } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-hero-gradient rounded-lg flex items-center justify-center text-white font-bold">
              M
            </div>
            <span className="font-bold text-xl text-gray-900">
              Marketing Pro
            </span>
            <Badge
              variant="secondary"
              className="bg-green-100 text-green-700 text-xs"
            >
              Available
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#skills"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Skills
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#experience"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Experience
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#case-study"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Case Studies
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <a
                href="mailto:contact@marketingpro.com"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-300 hover:bg-gray-50"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              <a
                href="#skills"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#experience"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="#case-study"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </a>
              <div className="px-4 pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4 mb-4">
                  <a
                    href="mailto:contact@marketingpro.com"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-gray-300 hover:bg-gray-50"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                  <Button
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
