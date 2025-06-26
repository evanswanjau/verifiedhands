import {
  X,
  Search,
  Shield,
  Clock,
  Star,
  BadgeCheck,
  DollarSign,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState, type JSX } from "react";
import { useNavigate } from "react-router-dom";

interface Feature {
  iconName: string;
  title: string;
  description: string;
}

interface HeroProps {
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
  features: Feature[];
}

const iconMap: Record<string, JSX.Element> = {
  Shield: <Shield className="w-5 h-5 text-green-500" />,
  Clock: <Clock className="w-5 h-5 text-green-500" />,
  Star: <Star className="w-5 h-5 text-green-500" />,
  BadgeCheck: <BadgeCheck className="w-5 h-5 text-green-500" />,
  DollarSign: <DollarSign className="w-5 h-5 text-green-500" />,
  CreditCard: <CreditCard className="w-5 h-5 text-green-500" />,
  // Add more as needed
};

const Hero = ({
  tagline,
  headline,
  subheadline,
  description,
  buttonText,
  imageUrl,
  searchQuery,
  setSearchQuery,
  services,
  onBook,
  features,
}: HeroProps) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputError, setInputError] = useState(false);

  const filteredSuggestions = services
    .filter(
      (service) =>
        searchQuery &&
        service.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 5);

  const navigate = useNavigate();

  const handleBookService = () => {
    if (!searchQuery.trim()) {
      setInputError(true);
      return;
    }
    setInputError(false);
    navigate(`/?service=${encodeURIComponent(searchQuery)}`);
    if (onBook) onBook(searchQuery);
  };

  const handleClear = () => {
    setSearchQuery("");
    setInputError(false);
    setShowSuggestions(false);
    navigate("/", { replace: true });
  };

  return (
    <section className="relative pt-32 pb-24 lg:h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden flex items-center">
      {/* <div className="absolute inset-0 bg-grid-pattern opacity-5"></div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative order-1 lg:order-2 hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative z-10">
              <img
                src={import.meta.env.VITE_BASE_URL + imageUrl}
                alt="Professional service provider"
                className="rounded-2xl w-full mx-auto"
              />
            </div>
            <div className="absolute -top-10 -right-16 w-32 h-32 bg-green-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -left-12 w-24 h-24 bg-teal-200 rounded-full opacity-20"></div>
          </motion.div>
          <motion.div
            className="space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 inter-bold">
                  {tagline}
                </Badge>
              </motion.div>
              <motion.h1
                className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                {headline}
                <span className="text-green-600 block">{subheadline}</span>
              </motion.h1>
              <motion.p
                className="text-gray-600 max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                {description}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 max-w-md"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-[48%] transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="What service do you need?"
                  className={`pl-10 h-10 border-gray-800 rounded-lg ${
                    inputError ? "border-red-500 focus:border-red-500" : ""
                  }`}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                    setInputError(false);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() =>
                    setTimeout(() => setShowSuggestions(false), 100)
                  }
                  autoComplete="off"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="absolute right-3 top-[48%] transform -translate-y-1/2 text-gray-600 hover:text-black font-bold"
                    tabIndex={-1}
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4 font-bold" />
                  </button>
                )}
                {inputError && (
                  <span className="text-red-500 text-xs absolute left-0 top-full">
                    Please select a service before booking.
                  </span>
                )}
                {showSuggestions && filteredSuggestions.length > 0 && (
                  <ul className="absolute z-10 left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                    {filteredSuggestions.map((service) => (
                      <li
                        key={service.title}
                        className="px-4 py-2 cursor-pointer hover:bg-green-50"
                        onMouseDown={() => {
                          setSearchQuery(service.title);
                          setShowSuggestions(false);
                        }}
                      >
                        {service.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <Button
                className="cursor-pointer h-10 bg-green-600 hover:bg-green-700"
                onClick={handleBookService}
              >
                {buttonText}
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:items-center space-x-8 text-sm text-gray-600"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  {iconMap[feature.iconName] || (
                    <Shield className="w-5 h-5 text-green-500" />
                  )}
                  <span className="inter-regular">{feature.title}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
