import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";
import carnivalHero from "@/assets/carnival-hero.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${carnivalHero})` }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-carnival-gold animate-confetti-float">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute top-32 right-20 text-carnival-purple animate-confetti-float" style={{ animationDelay: '1s' }}>
        <Star className="w-6 h-6" />
      </div>
      <div className="absolute bottom-40 left-20 text-carnival-orange animate-confetti-float" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-10 h-10" />
      </div>
      
      <div className="carnival-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              🎭 Premium Carnival Costumes
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-carnival text-white mb-6 leading-tight">
            Unleash Your
            <span className="block text-carnival-gradient">
              Carnival Magic
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your celebration with premium carnival costumes, elegant masquerade masks, and stunning accessories that make every moment unforgettable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-carnival hover:shadow-carnival transition-carnival text-lg px-8 py-3 font-semibold"
            >
              Shop Costumes Now
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-carnival text-lg px-8 py-3"
            >
              View Collection
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center items-center space-x-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold text-carnival-gold">500+</div>
              <div className="text-sm">Unique Designs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-carnival-purple">10K+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-carnival-orange">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="hsl(var(--background))" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;