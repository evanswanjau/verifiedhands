import { useEffect, useState, type JSX } from "react";
import {
  BadgeCheck,
  DollarSign,
  CreditCard,
  Handshake,
  ShieldCheck,
  Trophy,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ServiceCard from "@/components/ServiceCard";
import ContactSection from "@/components/ContactSection";

interface Hero {
  tagline: string;
  headline: string;
  subheadline: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  services: { title: string }[];
  onBook?: (service: string) => void;
}

interface Content {
  title: string;
  badgeText: string;
  description: string;
}

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

interface Contact {
  badgeText: string;
  title: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapSrc: string;
}

interface CTAContent {
  title: string;
  description: string;
}

interface Stat {
  id?: number;
  iconName: string;
  value: string | number;
  label: string;
  suffix?: string;
}

interface Feature {
  title: string;
  description: string;
  iconName: string;
}

interface AboutContent {
  badgeText: string;
  title: string;
  description: string;
  imageUrl: string;
  teamCountText: string;
  teamSubtext: string;
  promiseTitle: string;
  promiseDescription: string;
  differenceTitle: string;
  differenceDescription: string;
  communityTitle: string;
  communityDescription: string;
}

interface Company {
  name: string;
  displayName: string;
  tagline: string;
  bio: string;
  logoUrl: string;
  address: string;
  phone: string;
  email: string;
}

interface Social {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  tiktok: string;
}

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(
    undefined
  );
  const [heroData, setHeroData] = useState<Hero | null>(null);
  const [testimonials, setTestimonials] = useState([]);
  const [testimonialContent, setTestimonialContent] = useState<Content | null>(
    null
  );
  const [services, setServices] = useState<Service[]>([]);
  const [servicesContent, setServicesContent] = useState<Content | null>(null);
  const [contactContent, setContactContent] = useState<Contact | null>(null);
  const [ctaContent, setCtaContent] = useState<CTAContent | null>(null);
  const [stats, setStats] = useState<Stat[]>([]);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [featuresContent, setFeaturesContent] = useState<Content | null>(null);
  const [aboutContent, setAboutContent] = useState<AboutContent | null>(null);
  const [company, setCompany] = useState<Company | null>(null);
  const [social, setSocial] = useState<Social | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}content/hero`)
      .then((res) => res.json())
      .then(setHeroData);
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}testimonials`)
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}content/testimonials`)
      .then((res) => res.json())
      .then((data) => setTestimonialContent(data));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}content/services`)
      .then((res) => res.json())
      .then((data) => setServicesContent(data));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}content/contact`)
      .then((res) => res.json())
      .then((data) => setContactContent(data));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}content/cta`)
      .then((res) => res.json())
      .then((data) => setCtaContent(data));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}stats`)
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}features`)
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}content/features`)
      .then((res) => res.json())
      .then((data) => setFeaturesContent(data));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}content/about`)
      .then((res) => res.json())
      .then((data) => setAboutContent(data));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}content/company`)
      .then((res) => res.json())
      .then(setCompany);
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}content/social`)
      .then((res) => res.json())
      .then(setSocial);
  }, []);

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

  const iconMap: Record<string, JSX.Element> = {
    BadgeCheck: <BadgeCheck className="h-10 w-10" />,
    DollarSign: <DollarSign className="h-10 w-10" />,
    CreditCard: <CreditCard className="h-10 w-10" />,
    Trophy: <Trophy className="h-6 w-6" />,
    Users: <Users className="h-6 w-6" />,
    ShieldCheck: <ShieldCheck className="h-6 w-6" />,
    Handshake: <Handshake className="h-6 w-6" />,
  };

  if (!heroData) return null;
  if (!testimonialContent) return null;
  if (!servicesContent) return null;
  if (!contactContent) return null;
  if (!ctaContent) return null;
  if (!aboutContent) return null;
  if (!company) return null;
  if (!social) return null;

  return (
    <>
      <Header
        setIsOpen={setIsOpen}
        company={company}
        contact={contactContent}
      />
      <Hero
        tagline={heroData.tagline}
        headline={heroData.headline}
        description={heroData.description}
        subheadline={heroData.subheadline}
        buttonText={heroData.buttonText}
        imageUrl={heroData.imageUrl}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        services={services}
        onBook={handleBook}
        features={features.slice(0, 3)} // Pass top 3 features
      />
      <section id="about" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left column - Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutContent?.imageUrl}
                alt="VerifiedHands team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
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
                    <p className="font-bold">{aboutContent?.teamCountText}</p>
                    <p className="text-sm opacity-90">
                      {aboutContent?.teamSubtext}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Content */}
            <div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 inter-bold mb-2">
                {aboutContent?.badgeText}
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                {aboutContent?.title}
              </h2>
              <div className="w-24 h-1.5 bg-green-500 mb-8"></div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {aboutContent?.description}
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <ShieldCheck className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {aboutContent?.promiseTitle}
                    </h4>
                    <p className="text-gray-600">
                      {aboutContent?.promiseDescription}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Sparkles className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {aboutContent?.differenceTitle}
                    </h4>
                    <p className="text-gray-600">
                      {aboutContent?.differenceDescription}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {aboutContent?.communityTitle}
                    </h4>
                    <p className="text-gray-600">
                      {aboutContent?.communityDescription}
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
                key={stat.id || index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  {iconMap[stat.iconName] || <Trophy className="h-6 w-6" />}
                </div>
                <p className="text-4xl font-bold text-gray-800 mb-2">
                  {isNaN(Number(stat.value)) ? (
                    stat.value
                  ) : (
                    <>
                      <CountUp
                        end={Number(stat.value)}
                        duration={2}
                        enableScrollSpy
                        suffix={stat.suffix}
                      />
                    </>
                  )}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="why-choose-us"
        className="py-28 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 inter-bold mb-2">
              {featuresContent?.badgeText}
            </Badge>
            <h2 className="text-4xl lg:text-5xl text-gray-800 mb-6">
              {featuresContent?.title}
            </h2>
            <div className="w-24 h-1.5 bg-green-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {featuresContent?.description}
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
                      {iconMap[feature.iconName] || (
                        <Trophy className="h-6 w-6" />
                      )}
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
      <TestimonialCarousel
        testimonials={testimonials}
        content={testimonialContent}
      />

      {/* Services Section */}
      <section id="services" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 inter-bold mb-2">
              {servicesContent.badgeText}
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              {servicesContent.title}
            </h2>
            <div className="w-24 h-1.5 bg-green-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {servicesContent.description}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard service={service} key={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection contact={contactContent} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              {ctaContent?.title}
            </h2>
            <p className="opacity-90">{ctaContent?.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* WhatsApp Button */}
              <Button
                onClick={() =>
                  window.open("https://wa.me/+254795415340", "_blank")
                }
                className="cursor-pointer w-48 sm:w-auto !p-6 !md:p-5 bg-[#25D366] hover:bg-white text-white hover:text-[#25D366] gap-2 transition-colors duration-300"
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
                className="cursor-pointer w-48 sm:w-auto !p-6 !md:p-5 text-green-600 bg-white hover:text-green-600 gap-2 transition-colors duration-300"
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
      <Footer company={company} contact={contactContent} social={social} />

      <BookingModal
        isOpen={isOpen}
        onOpenChange={handleModalOpenChange}
        selectedService={selectedService}
        services={services}
      />

      <a
        href={`https://wa.me/${contactContent.phone.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg flex items-center justify-center w-14 h-14 md:w-16 md:h-16 transition-colors"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          className="w-6 h-6 md:h-8 md:w-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.28.173-1.413-.074-.133-.297-.2-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
};

export default HomePage;
