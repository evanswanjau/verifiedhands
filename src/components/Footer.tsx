import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  company: {
    name: string;
    logoUrl: string;
    displayName: string;
    bio: string;
  };
  contact: {
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
  social: {
    facebook?: string;
    x?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    tiktok?: string;
  };
}

const Footer = ({ company, contact, social }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <a href="/" className="flex items-center">
                <img src={company.logoUrl} alt="Logo" className="h-16 w-auto" />
                <h1 className="text-2xl font-bold text-white ml-2">
                  {company.displayName}
                </h1>
              </a>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {company.bio}
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
                <p className="text-gray-400 text-sm">{contact.address}</p>
              </div>
                <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500" />
                <a
                  href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {contact.phone}
                </a>
                </div>
                <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-500" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {contact.email}
                </a>
                </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-green-500" />
                <p className="text-gray-400 text-sm">{contact.hours}</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-white">Follow Us</h3>
            <div className="flex gap-4">
              {social.facebook && (
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                >
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </Button>
              )}
              {social.x && (
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                >
                  <a href={social.x} target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-4 h-4" />
                  </a>
                </Button>
              )}
              {social.instagram && (
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                >
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </Button>
              )}
              {social.linkedin && (
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                >
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
              )}
              {social.youtube && (
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                >
                  <a
                    href={social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </Button>
              )}
              {social.tiktok && (
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                >
                  <a
                    href={social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* TikTok SVG */}
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.52-1.62-.79v8.05c-.01 3.39-2.76 6.14-6.15 6.14-3.39 0-6.14-2.75-6.14-6.14 0-3.39 2.75-6.14 6.14-6.14 1.02 0 1.97.25 2.82.69v3.26c-.93-.45-1.96-.71-3.03-.71-2.58 0-4.67 2.09-4.67 4.67s2.09 4.67 4.67 4.67c2.58 0 4.67-2.09 4.67-4.67V9.76c1.81 1.31 3.94 2.07 6.24 2.07V7.79c-1.61 0-3.09-.59-4.23-1.57-.55-.48-1.03-1.03-1.39-1.67h4.76V.02h-3.41z" />
                    </svg>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
