import { useState } from "react";
import {
  Star,
  Quote,
  Phone,
  Mail,
  BadgeCheck,
  DollarSign,
  CreditCard,
  Clock,
  Diamond,
  Headphones,
  Handshake,
  ShieldCheck,
  Trophy,
  Users,
  ArrowRight,
  Sparkles,
  MapPin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookingModal from "@/components/BookingModal";
import services from "@/data/services.json";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(
    undefined
  );

  const handleBook = (service: string) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  const navigate = useNavigate();

  const handleModalOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setSelectedService(undefined);
      navigate("/", { replace: true });
    }
  };

  const features = [
    {
      icon: <BadgeCheck className="h-10 w-10" />,
      title: "Vetted Professionals",
      description:
        "Every service provider undergoes rigorous background checks and skill verification to ensure top-quality work.",
    },
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Price Transparency",
      description:
        "No hidden fees or surprises. Get upfront pricing with detailed breakdowns before work begins.",
    },
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: "Hassle-Free Payments",
      description:
        "Secure in-app payments with satisfaction guarantee. Pay only when the work meets your standards.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Same-Day Availability",
      description:
        "Emergency services available 24/7 with most requests fulfilled within hours, not days.",
    },
    {
      icon: <Diamond className="h-10 w-10" />,
      title: "Premium Materials",
      description:
        "Access to high-quality parts and materials with warranties that outlast the competition.",
    },
    {
      icon: <Headphones className="h-10 w-10" />,
      title: "360° Support",
      description:
        "Dedicated customer success team available before, during, and after every service.",
    },
  ];

  const stats = [
    {
      icon: <Trophy className="h-6 w-6" />,
      value: "5,000+",
      label: "Completed Projects",
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: "98%",
      label: "Customer Satisfaction",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      value: "200+",
      label: "Verified Professionals",
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      value: "24/7",
      label: "Support Available",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Nyawira",
      location: "Kilimani, Nairobi",
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=face",
      quote:
        "VerifiedHands saved me when my AC broke in the middle of summer. Their technician arrived within 2 hours and fixed everything perfectly. The pricing was transparent and fair.",
      rating: 5,
      service: "AC Repair",
    },
    {
      name: "John Kamau",
      location: "Kasarani, Nairobi",
      avatar:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&fit=crop&crop=face",
      quote:
        "I've used multiple services through VerifiedHands and each experience has been exceptional. The quality of work is consistently high and their customer support is responsive.",
      rating: 5,
      service: "Multiple Services",
    },
    {
      name: "Wanjiku Mwangi",
      location: "Karen, Nairobi",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
      quote:
        "As a busy professional, I appreciate how reliable and professional every VerifiedHands provider has been. They show up on time, do great work, and leave my home clean.",
      rating: 4,
      service: "Home Maintenance",
    },
  ];

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        services={services}
        onBook={handleBook}
      />
      <section id="about" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left column - Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://img.freepik.com/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208270.jpg"
                alt="VerifiedHands team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((item) => (
                      <img
                        key={item}
                        src={`/images/team-${item}.jpg`}
                        alt="Team member"
                        className="w-12 h-12 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <div className="text-white">
                    <p className="font-bold">50+ Professionals</p>
                    <p className="text-sm opacity-90">Trusted community</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Content */}
            <div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 inter-bold mb-2">
                Our Story
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Building Trust in Every Service
              </h2>
              <div className="w-24 h-1.5 bg-green-500 mb-8"></div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                VerifiedHands began with a simple mission: to create a platform
                where quality meets reliability in home services. What started
                as a local operation has grown into a nationwide network of
                skilled professionals dedicated to excellence.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <ShieldCheck className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Our Promise
                    </h4>
                    <p className="text-gray-600">
                      Every professional on our platform is background-checked,
                      skill-verified, and committed to our quality standards.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Sparkles className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      The Difference
                    </h4>
                    <p className="text-gray-600">
                      We don't just connect you with service providers - we
                      stand behind every job with our satisfaction guarantee.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Community Focus
                    </h4>
                    <p className="text-gray-600">
                      We reinvest 5% of all profits into training programs for
                      underserved communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 inter-bold mb-2">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl lg:text-5xl text-gray-800 mb-6">
              The VerifiedHands Difference
            </h2>
            <div className="w-24 h-1.5 bg-green-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We go beyond basic services to deliver exceptional experiences
              through innovation, quality, and customer-centric solutions for
              every need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-100 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-600"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <div className="text-emerald-600 text-3xl">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 inter-bold mb-2">
              Customer Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Trusted by Thousands of Happy Customers
            </h2>
            <div className="w-24 h-1.5 bg-green-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers say
              about their VerifiedHands experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full">
                      <div className="bg-green-500 rounded-full p-1">
                        <Quote className="h-3 w-3 text-white" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 inter-bold mb-2">
              Our Services
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Services We Offer
            </h2>
            <div className="w-24 h-1.5 bg-green-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Reliable help for all your home and property needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-100 overflow-hidden"
              >
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 inter-bold mb-2">
              Get In Touch
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>
            <div className="w-24 h-1.5 bg-green-500 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form Card */}
            <Card className="p-8 rounded-2xl bg-white shadow-lg border-none">
              <h3 className="text-2xl font-bold text-gray-800">
                Send us a message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+254 712 345 678"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Your message here..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Map & Contact Info */}
            <div className="relative h-full">
              {/* Map Container */}
              <div className="h-full min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.814516237187!2d36.82115931575381!3d-1.286385835980925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664f6d4a1%3A0x9f4d1b41c1b1b1b1!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 rounded-2xl"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              {/* Contact Info Card */}
              <Card className="absolute bottom-6 left-6 right-6 max-w-md p-6 bg-white/95 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">
                      123 Service Street, Nairobi, Kenya
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <p className="text-gray-600">+254 712 345 678</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-green-600" />
                    <p className="text-gray-600">contact@verifiedhands.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-green-600" />
                    <p className="text-gray-600">Mon-Fri: 8AM - 6PM</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="opacity-90">
              Join thousands of satisfied customers who trust VerifiedHands for
              their service needs. Get matched with verified professionals in
              minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* WhatsApp Button */}
              <Button
                onClick={() =>
                  window.open("https://wa.me/254712345678", "_blank")
                }
                className="cursor-pointer !p-5 bg-[#25D366] hover:bg-white text-white hover:text-[#25D366] gap-2 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.28.173-1.413-.074-.133-.297-.2-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </Button>

              <Button
                variant="outline"
                className="cursor-pointer !p-5 text-green-600 bg-white hover:text-green-600 gap-2 transition-colors duration-300"
                onClick={() => setIsOpen(true)}
              >
                Book a Service
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="text-xl font-bold">VerifiedHands</span>
              </div>
              <p className="text-gray-400">
                Connecting you with trusted professionals for all your service
                needs.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white p-2"
                >
                  <Phone className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white p-2"
                >
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Company</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Press
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Services</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Home Services
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Professional Services
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Business Solutions
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Emergency Services
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Support</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 VerifiedHands. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <BookingModal
        isOpen={isOpen}
        onOpenChange={handleModalOpenChange}
        selectedService={selectedService}
        services={services}
      />

      <a
        href="https://wa.me/254712345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg flex items-center justify-center w-16 h-16 transition-colors"
        aria-label="Chat with us on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.28.173-1.413-.074-.133-.297-.2-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
};

export default HomePage;
