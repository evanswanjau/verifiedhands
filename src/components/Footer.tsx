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

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <a href="/" className="flex items-center">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="h-16 w-auto"
                />
                <h1 className="text-2xl font-bold text-white ml-2">
                  Verified Hands{" "}
                </h1>
              </a>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting you with trusted professionals for all your service
              needs across Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a
                  href="/"
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </a>
                <a
                  href="#services"
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </a>
              </div>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Join Us
                </a>
                <a
                  href="#testimonials"
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Testimonials
                </a>
                <a
                  href="#why-choose-us"
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Why Choose Us
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
                  Raphta Road, Next to Njema Court
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500" />
                <p className="text-gray-400 text-sm">+254 795 415 340</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-500" />
                <p className="text-gray-400 text-sm">
                  verifiedhandskenya@gmail.com
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
          {/* <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
