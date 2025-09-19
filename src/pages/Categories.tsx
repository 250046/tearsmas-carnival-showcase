import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Baby, Crown, Sparkles, Eye, Palette, Shirt, Music } from "lucide-react";
import maskAdult from "@/assets/mask-adult.jpg";
import costumeKids from "@/assets/costume-kids.jpg";
import accessories from "@/assets/accessories.jpg";

const Categories = () => {
  const mainCategories = [
    {
      title: "Adult Costumes",
      description: "Elegant and sophisticated carnival costumes for adults",
      image: maskAdult,
      icon: Crown,
      color: "primary",
      count: "150+ Items",
      featured: true
    },
    {
      title: "Kids Costumes",
      description: "Fun and safe carnival outfits designed for children",
      image: costumeKids,
      icon: Baby,
      color: "secondary",
      count: "120+ Items",
      featured: true
    },
    {
      title: "Accessories",
      description: "Complete your look with premium carnival accessories",
      image: accessories,
      icon: Sparkles,
      color: "carnival-gold",
      count: "200+ Items",
      featured: true
    },
    {
      title: "Group Costumes",
      description: "Coordinated outfits perfect for group celebrations",
      image: maskAdult,
      icon: Users,
      color: "carnival-purple",
      count: "80+ Sets",
      featured: false
    }
  ];

  const subCategories = [
    { name: "Venetian Masks", icon: Eye, count: 45, color: "carnival-gold" },
    { name: "Feathered Pieces", icon: Palette, count: 78, color: "carnival-purple" },
    { name: "Period Costumes", icon: Shirt, count: 92, color: "carnival-red" },
    { name: "Dance Costumes", icon: Music, count: 65, color: "carnival-cyan" },
    { name: "Fantasy Outfits", icon: Sparkles, count: 89, color: "carnival-pink" },
    { name: "Traditional Wear", icon: Crown, count: 54, color: "carnival-green" },
    { name: "Modern Styles", icon: Palette, count: 76, color: "carnival-orange" },
    { name: "Custom Orders", icon: Users, count: 23, color: "carnival-neon" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-party py-20">
        <div className="carnival-container text-center">
          <h1 className="text-5xl md:text-6xl font-carnival text-white mb-6">
            Costume Categories
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore our diverse collection of carnival costumes organized by style, age, and occasion
          </p>
        </div>
      </section>

      <main className="py-16 bg-background">
        {/* Main Categories */}
        <section className="carnival-container mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-carnival text-carnival-gradient mb-4">
              Main Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              Our primary costume collections for every celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.title} 
                  className={`group hover:shadow-carnival transition-carnival mask-hover cursor-pointer border-2 hover:border-primary/20 ${
                    category.featured ? 'ring-2 ring-carnival-gold/20' : ''
                  }`}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-48 object-cover transition-carnival group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {category.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="gradient-neon text-white border-0">
                            Featured
                          </Badge>
                        </div>
                      )}
                      
                      <div className="absolute top-4 right-4">
                        <div className={`p-3 rounded-full gradient-${category.color} text-white shadow-lg`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                      </div>

                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-semibold">{category.count}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-festive mb-2 group-hover:text-primary transition-carnival">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {category.description}
                      </p>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-between group-hover:bg-primary/10 transition-carnival gradient-hover"
                      >
                        Explore Collection
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-carnival" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Sub Categories */}
        <section className="carnival-container mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-carnival text-carnival-gradient mb-4">
              Specialized Collections
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover our curated specialty costume collections
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {subCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.name}
                  className="group hover:shadow-party transition-carnival cursor-pointer text-center border-2 hover:border-primary/20"
                >
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full gradient-${category.color} flex items-center justify-center group-hover:scale-110 transition-carnival`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-festive text-sm mb-2 group-hover:text-primary transition-carnival">
                      {category.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {category.count} items
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="gradient-rainbow py-16">
          <div className="carnival-container text-center">
            <h2 className="text-4xl font-carnival text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We offer custom costume design services to bring your unique vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm">
                Custom Orders
              </Button>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Contact Designer
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;