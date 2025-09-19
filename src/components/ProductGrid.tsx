import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";
import maskAdult from "@/assets/mask-adult.jpg";
import costumeKids from "@/assets/costume-kids.jpg";
import accessories from "@/assets/accessories.jpg";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Venetian Masquerade Mask",
      price: 89.99,
      originalPrice: 129.99,
      image: maskAdult,
      rating: 4.9,
      reviews: 124,
      badge: "Best Seller",
      badgeColor: "bg-carnival-gold",
    },
    {
      id: 2,
      name: "Rainbow Carnival Costume",
      price: 159.99,
      originalPrice: null,
      image: costumeKids,
      rating: 4.8,
      reviews: 89,
      badge: "New Arrival",
      badgeColor: "bg-primary",
    },
    {
      id: 3,
      name: "Premium Feather Set",
      price: 45.99,
      originalPrice: 65.99,
      image: accessories,
      rating: 4.7,
      reviews: 56,
      badge: "Sale",
      badgeColor: "bg-destructive",
    },
    {
      id: 4,
      name: "Royal Blue Carnival Mask",
      price: 75.99,
      originalPrice: null,
      image: maskAdult,
      rating: 4.9,
      reviews: 203,
      badge: "Popular",
      badgeColor: "bg-secondary",
    },
    {
      id: 5,
      name: "Kids Fairy Costume",
      price: 89.99,
      originalPrice: 119.99,
      image: costumeKids,
      rating: 4.8,
      reviews: 67,
      badge: "Limited",
      badgeColor: "bg-carnival-purple",
    },
    {
      id: 6,
      name: "Golden Accessories Kit",
      price: 95.99,
      originalPrice: null,
      image: accessories,
      rating: 4.6,
      reviews: 45,
      badge: "Premium",
      badgeColor: "bg-carnival-orange",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="carnival-container">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-carnival text-carnival-gradient mb-2">
              Featured Products
            </h2>
            <p className="text-muted-foreground">
              Discover our most popular carnival costumes and accessories
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All Products
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-carnival transition-carnival cursor-pointer border-2 hover:border-primary/20"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-carnival group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-carnival" />
                  
                  {/* Badge */}
                  <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white border-0`}>
                    {product.badge}
                  </Badge>
                  
                  {/* Actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-carnival">
                    <Button size="icon" variant="secondary" className="w-8 h-8">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="w-8 h-8">
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-carnival-gold fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-carnival">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button size="sm" className="gradient-carnival">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Button variant="outline" className="w-full sm:w-auto">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;