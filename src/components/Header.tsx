import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Header = ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-xs" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold text-gray-900">Verified Hands</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="cursor-pointer text-gray-700 hover:text-green-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              className="bg-green-600 hover:bg-green-700"
              onClick={() => setIsOpen(true)}
            >
              Book a Service
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-green-600"
              >
                {item.name}
              </a>
            ))}
            <Button
              className="bg-green-600 hover:bg-green-700"
              onClick={() => setIsOpen(true)}
            >
              Book a Service
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
