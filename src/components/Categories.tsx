import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Baby, Crown, Sparkles } from "lucide-react";
import maskAdult from "@/assets/mask-adult.jpg";
import costumeKids from "@/assets/costume-kids.jpg";
import accessories from "@/assets/accessories.jpg";

const Categories = () => {
  const categories = [
    {
      title: "Adult Costumes",
      description: "Elegant and sophisticated carnival costumes for adults",
      image: maskAdult,
      icon: Crown,
      color: "primary",
    },
    {
      title: "Kids Costumes",
      description: "Fun and safe carnival outfits designed for children",
      image: costumeKids,
      icon: Baby,
      color: "secondary",
    },
    {
      title: "Accessories",
      description: "Complete your look with premium carnival accessories",
      image: accessories,
      icon: Sparkles,
      color: "carnival-gold",
    },
    {
      title: "Group Costumes",
      description: "Coordinated outfits perfect for group celebrations",
      image: maskAdult,
      icon: Users,
      color: "carnival-purple",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="carnival-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-carnival text-carnival-gradient mb-4">
            Costume Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our extensive collection of premium carnival costumes and accessories for every celebration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="group hover:shadow-carnival transition-carnival mask-hover cursor-pointer border-2 hover:border-primary/20"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-48 object-cover transition-carnival group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className={`p-2 rounded-full bg-${category.color} text-white`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
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
                      className="w-full justify-between group-hover:bg-primary/10 transition-carnival"
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

        <div className="text-center mt-12">
          <Button size="lg" className="gradient-festive hover:shadow-festive transition-carnival">
            View All Categories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;