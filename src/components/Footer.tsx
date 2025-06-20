import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">VH</span>
              </div>
              <span className="text-2xl font-bold">VerifiedHands</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting you with trusted professionals for all your service
              needs across Kenya.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-medium text-white">
                Subscribe to our newsletter
              </h4>
              <div className="flex gap-2">
                <Input
                  placeholder="Your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button className="bg-green-600 hover:bg-green-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Pricing
                </a>
              </div>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  123 Service Street, Nairobi, Kenya
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500" />
                <p className="text-gray-400 text-sm">+254 712 345 678</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-500" />
                <p className="text-gray-400 text-sm">
                  contact@verifiedhands.co.ke
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-green-500" />
                <p className="text-gray-400 text-sm">Mon-Fri: 8AM - 6PM EAT</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-white">Follow Us</h3>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} VerifiedHands Kenya. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;