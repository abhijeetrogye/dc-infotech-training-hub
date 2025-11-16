import { useState, useEffect } from "react";
import { testimonials } from "@/data/courses";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="border-2 border-border">
        <CardContent className="p-8">
          <div className="flex flex-col items-center text-center">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full mb-4"
            />
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg text-foreground mb-4 italic">
              "{testimonials[currentIndex].text}"
            </p>
            <h4 className="font-bold text-foreground">{testimonials[currentIndex].name}</h4>
            <p className="text-sm text-muted-foreground">{testimonials[currentIndex].course} Graduate</p>
          </div>
        </CardContent>
      </Card>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-primary" : "w-2 bg-border"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
