import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Filter, Heart, ShoppingCart, Star } from "lucide-react";
import maskAdult from "@/assets/mask-adult.jpg";
import costumeKids from "@/assets/costume-kids.jpg";
import accessories from "@/assets/accessories.jpg";

const Costumes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");

  const costumes = [
    {
      id: 1,
      name: "Venetian Masquerade Mask",
      price: 89.99,
      category: "masks",
      size: "one-size",
      image: maskAdult,
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      colors: ["gold", "silver", "purple"]
    },
    {
      id: 2,
      name: "Royal Princess Costume",
      price: 149.99,
      category: "kids",
      size: "6-8",
      image: costumeKids,
      rating: 4.9,
      reviews: 89,
      badge: "New Arrival",
      colors: ["pink", "blue", "purple"]
    },
    {
      id: 3,
      name: "Feathered Carnival Headpiece",
      price: 65.99,
      category: "accessories",
      size: "adjustable",
      image: accessories,
      rating: 4.7,
      reviews: 156,
      badge: "Popular",
      colors: ["rainbow", "gold", "silver"]
    },
    {
      id: 4,
      name: "Medieval Knight Armor",
      price: 299.99,
      category: "adult",
      size: "L",
      image: maskAdult,
      rating: 4.6,
      reviews: 78,
      badge: "Premium",
      colors: ["silver", "bronze", "black"]
    },
    {
      id: 5,
      name: "Fairy Wings & Tutu Set",
      price: 79.99,
      category: "kids",
      size: "4-6",
      image: costumeKids,
      rating: 4.8,
      reviews: 203,
      badge: "Best Seller",
      colors: ["pink", "purple", "rainbow"]
    },
    {
      id: 6,
      name: "Carnival Jeweled Necklace",
      price: 45.99,
      category: "accessories",
      size: "one-size",
      image: accessories,
      rating: 4.5,
      reviews: 92,
      badge: "New",
      colors: ["gold", "silver", "multicolor"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-vibrant py-20">
        <div className="carnival-container text-center">
          <h1 className="text-5xl md:text-6xl font-carnival text-white mb-6">
            Premium Costumes
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover our complete collection of carnival costumes, masks, and accessories
          </p>
        </div>
      </section>

      <main className="py-12">
        <div className="carnival-container">
          {/* Filters & Search */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search costumes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="adult">Adult Costumes</SelectItem>
                  <SelectItem value="kids">Kids Costumes</SelectItem>
                  <SelectItem value="masks">Masks</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sizes</SelectItem>
                  <SelectItem value="XS">Extra Small</SelectItem>
                  <SelectItem value="S">Small</SelectItem>
                  <SelectItem value="M">Medium</SelectItem>
                  <SelectItem value="L">Large</SelectItem>
                  <SelectItem value="XL">Extra Large</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {costumes.map((costume) => (
              <Card key={costume.id} className="group hover:shadow-carnival transition-carnival cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={costume.image}
                      alt={costume.name}
                      className="w-full h-64 object-cover transition-carnival group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="gradient-neon text-white border-0">
                        {costume.badge}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <Button size="icon" variant="ghost" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 left-4 flex gap-1">
                      {costume.colors.map((color, index) => (
                        <div
                          key={index}
                          className={`w-6 h-6 rounded-full border-2 border-white shadow-lg ${
                            color === 'rainbow' ? 'gradient-rainbow' :
                            color === 'multicolor' ? 'gradient-party' :
                            `bg-carnival-${color}`
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(costume.rating)
                                ? 'text-carnival-gold fill-current'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({costume.reviews})
                      </span>
                    </div>
                    <h3 className="text-lg font-festive mb-2 group-hover:text-primary transition-carnival">
                      {costume.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Size: {costume.size} • Category: {costume.category}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        ${costume.price}
                      </span>
                      <Button className="gradient-carnival hover:shadow-carnival">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="gradient-rainbow text-white border-0 hover:shadow-party">
              Load More Costumes
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Costumes;