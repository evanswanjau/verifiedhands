import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

interface TestimonialContent {
  title: string;
  badgeText: string;
  description: string;
}

interface TestimonialProps {
  testimonials: Testimonial[];
  content: TestimonialContent;
}

const TestimonialCarousel: React.FC<TestimonialProps> = ({
  testimonials,
  content,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    rubberband: false,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  // Optional autoplay
  useEffect(() => {
    if (!slider.current) return;
    const interval = setInterval(() => {
      slider.current?.next();
    }, 7000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <section id="testimonials" className="py-28 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 inter-bold mb-2">
            {content.badgeText}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {content.title}
          </h2>
          <div className="w-24 h-1.5 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>

        <div className="relative">
          {loaded && slider.current && (
            <div className="hidden lg:block">
              <button
                onClick={() => slider.current?.prev()}
                className="absolute -left-6 top-[40%] cursor-pointer transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-green-100 transition"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-green-600" />
              </button>
              <button
                onClick={() => slider.current?.next()}
                className="absolute -right-6 top-[40%] cursor-pointer transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-green-100 transition"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-green-600" />
              </button>
            </div>
          )}

          <div ref={sliderRef} className="keen-slider min-h-[350px] pb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="keen-slider__slide bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
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
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic transition-all duration-500">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 transition-all duration-300 ${
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
          <div className="flex justify-center mt-3 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => slider.current?.moveToIdx(idx)}
                className={`w-3 h-3 cursor-pointer rounded-full ${
                  currentSlide === idx ? "bg-green-500" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
