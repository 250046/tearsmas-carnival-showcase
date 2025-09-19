import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Users, Clock, Heart, Star, Globe, ShieldCheck } from "lucide-react";
import carnivalHero from "@/assets/carnival-hero.jpg";

const About = () => {
  const milestones = [
    { year: "2008", event: "TearsMAS Founded", description: "Started as a small family business with a passion for carnival culture" },
    { year: "2012", event: "First International Order", description: "Expanded to serve customers across the globe" },
    { year: "2015", event: "Award Winner", description: "Received 'Best Costume Designer' at Caribbean Carnival Awards" },
    { year: "2018", event: "10,000 Happy Customers", description: "Milestone celebration with our growing community" },
    { year: "2020", event: "Digital Transformation", description: "Launched our online platform during challenging times" },
    { year: "2023", event: "15 Years Excellence", description: "Celebrating 15 years of bringing joy through costumes" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Carnival",
      description: "We live and breathe carnival culture, bringing authentic joy to every creation"
    },
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "Each costume is meticulously crafted with premium materials and attention to detail"
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building lasting relationships with our customers and supporting local artisans"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving carnival enthusiasts worldwide while maintaining personal service"
    },
    {
      icon: ShieldCheck,
      title: "Trust & Safety",
      description: "Secure shopping experience with quality guarantees and reliable delivery"
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Continuously improving our products and services to exceed expectations"
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Experience", color: "carnival-gold" },
    { number: "10K+", label: "Happy Customers", color: "carnival-purple" },
    { number: "500+", label: "Unique Designs", color: "carnival-orange" },
    { number: "50+", label: "Countries Served", color: "carnival-cyan" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative gradient-vibrant py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${carnivalHero})` }}
        />
        <div className="carnival-container relative z-10 text-center">
          <Badge className="gradient-neon text-white border-0 mb-6">
            Our Story
          </Badge>
          <h1 className="text-5xl md:text-6xl font-carnival text-white mb-6">
            About TearsMAS
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            For over 15 years, we've been bringing the magic of carnival to life through exceptional costumes, 
            masks, and accessories that celebrate the joy, culture, and artistry of carnival traditions worldwide.
          </p>
        </div>
      </section>

      <main>
        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="carnival-container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-4xl md:text-5xl font-carnival text-carnival-${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 gradient-party">
          <div className="carnival-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-carnival text-white mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                To preserve and celebrate carnival culture by creating extraordinary costumes that allow people 
                to express their creativity, embrace their heritage, and experience the transformative power of carnival.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Every stitch, every feather, every sparkle is placed with intention to honor the rich traditions 
                of carnival while embracing modern innovation and style.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="carnival-container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-carnival text-carnival-gradient mb-6">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at TearsMAS
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="group hover:shadow-carnival transition-carnival">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 gradient-carnival rounded-full flex items-center justify-center group-hover:scale-110 transition-carnival">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-festive mb-4 group-hover:text-primary transition-carnival">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 gradient-hero">
          <div className="carnival-container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-carnival text-white mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Key milestones in our 15+ year journey of bringing carnival magic to life
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 gradient-neon rounded-full flex items-center justify-center">
                        <span className="text-white font-carnival text-lg">
                          {milestone.year}
                        </span>
                      </div>
                    </div>
                    <Card className="flex-1 bg-white/10 backdrop-blur-sm border-white/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-festive text-white mb-2">
                          {milestone.event}
                        </h3>
                        <p className="text-white/80">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 gradient-rainbow">
          <div className="carnival-container text-center">
            <h2 className="text-4xl md:text-5xl font-carnival text-white mb-6">
              Join Our Carnival Community
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Be part of our story. Discover costumes that celebrate your unique style and help you create unforgettable memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Shop Our Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;