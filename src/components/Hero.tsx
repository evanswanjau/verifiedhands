import { Search, Shield, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Hero = ({ searchQuery, setSearchQuery }: HeroProps) => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 inter-bold">
                Trusted skilled professionals
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Find the perfect
                <span className="text-green-600 block">professional</span>
                for any job
              </h1>
              <p className="text-gray-600 max-w-lg">
                Connect with skilled professionals in your area. From home
                repairs to personal services, we've got you covered.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-[48%] transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="What service do you need?"
                  className="pl-10 h-10 border-gray-800 rounded-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button className="h-10 bg-green-600 hover:bg-green-700 cursor-pointer">
                Search Services
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="inter-regular">Verified Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-green-500" />
                <span className="inter-regular">Quick Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-green-500" />
                <span className="inter-regular">Top Rated</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://img.freepik.com/free-photo/medium-shot-man-cleaning-table_23-2149482291.jpg"
                alt="Professional service provider"
                className="rounded-2xl w-full mx-auto"
              />
            </div>
            <div className="absolute -top-10 -right-16 w-32 h-32 bg-green-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -left-12 w-24 h-24 bg-teal-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
