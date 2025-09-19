import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Sparkles,
  Heart
} from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: [
        "Adult Costumes",
        "Kids Costumes", 
        "Accessories",
        "Group Costumes",
        "New Arrivals",
        "Best Sellers",
      ],
    },
    {
      title: "Support",
      links: [
        "Size Guide",
        "Shipping Info",
        "Returns & Exchanges",
        "FAQ",
        "Contact Support",
        "Track Order",
      ],
    },
    {
      title: "Company",
      links: [
        "About TearsMAS",
        "Our Story",
        "Careers",
        "Press",
        "Partnerships",
        "Wholesale",
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Youtube, href: "#", color: "hover:text-red-600" },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="carnival-container">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-primary w-6 h-6" />
              <h3 className="text-2xl font-carnival text-carnival-gradient">
                Join the Carnival Community
              </h3>
              <Sparkles className="text-primary w-6 h-6" />
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get exclusive access to new costume collections, carnival tips, and special discounts delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button className="gradient-carnival">
                Subscribe
                <Mail className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-12 h-12 gradient-carnival rounded-full flex items-center justify-center">
                  <span className="text-white font-carnival text-xl">T</span>
                </div>
                <h2 className="text-3xl font-carnival text-carnival-gradient">
                  TearsMAS
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Creating magical carnival experiences for over 15 years. Premium costumes and accessories that transform celebrations into unforgettable memories.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+1 (555) 123-MASK</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>hello@tearsmas.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>123 Carnival Street, Festival City, FC 12345</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-festive text-foreground mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-carnival"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1 text-muted-foreground">
            <span>© 2024 TearsMAS. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for carnival lovers.</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm mr-2">Follow us:</span>
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`transition-carnival ${social.color}`}
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <IconComponent className="w-4 h-4" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;