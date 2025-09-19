import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Santos",
      location: "Rio de Janeiro, Brazil",
      rating: 5,
      text: "The quality of TearsMAS costumes is absolutely incredible! I felt like carnival royalty. The attention to detail and comfort made my celebration unforgettable.",
      avatar: "M",
    },
    {
      id: 2,
      name: "James Rodriguez",
      location: "Miami, Florida",
      rating: 5,
      text: "Ordered a group costume set for our carnival party. Everyone was amazed by the beautiful designs and perfect fit. Customer service was excellent too!",
      avatar: "J",
    },
    {
      id: 3,
      name: "Isabella Chen",
      location: "New York, NY",
      rating: 5,
      text: "My daughter's fairy costume was a dream come true! The materials are safe, comfortable, and the colors are so vibrant. She didn't want to take it off!",
      avatar: "I",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="carnival-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-carnival text-carnival-gradient mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy customers who trust TearsMAS for their carnival celebrations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="hover:shadow-festive transition-carnival border-2 hover:border-secondary/20"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-carnival-gold fill-current"
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-muted-foreground/30" />
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gradient-carnival rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <div className="flex -space-x-2">
              {['M', 'J', 'I', 'S', 'A'].map((letter, i) => (
                <div
                  key={i}
                  className="w-8 h-8 gradient-party rounded-full flex items-center justify-center border-2 border-background text-xs font-bold text-white"
                >
                  {letter}
                </div>
              ))}
            </div>
            <span className="text-primary font-semibold">
              Join 10,000+ Happy Customers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;