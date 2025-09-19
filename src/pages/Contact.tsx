import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Globe, Users } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST",
      color: "carnival-gold"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@tearsmas.com",
      description: "Response within 24 hours",
      color: "carnival-purple"
    },
    {
      icon: MapPin,
      title: "Visit Our Store",
      info: "123 Carnival Street, Miami, FL",
      description: "Open Tue-Sat 10AM-7PM",
      color: "carnival-orange"
    },
    {
      icon: Globe,
      title: "International",
      info: "Global Shipping Available",
      description: "50+ countries served",
      color: "carnival-cyan"
    }
  ];

  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days. Express shipping available for 2-3 days."
    },
    {
      question: "Do you offer custom sizing?",
      answer: "Yes! We provide custom sizing for most costumes. Contact us with your measurements."
    },
    {
      question: "What's your return policy?",
      answer: "30-day return policy for unworn items in original condition with tags."
    },
    {
      question: "Can I rent costumes?",
      answer: "Currently we only sell costumes, but we're working on a rental program for 2024."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-neon py-20">
        <div className="carnival-container text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-6">
            Get In Touch
          </Badge>
          <h1 className="text-5xl md:text-6xl font-carnival text-white mb-6">
            Contact TearsMAS
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have questions about our costumes? Need custom sizing? Want to discuss a special order? 
            We're here to help make your carnival dreams come true.
          </p>
        </div>
      </section>

      <main className="py-16">
        {/* Contact Methods */}
        <section className="carnival-container mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="group hover:shadow-carnival transition-carnival text-center">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 mx-auto mb-4 gradient-${method.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-carnival`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-festive text-lg mb-2 group-hover:text-primary transition-carnival">
                      {method.title}
                    </h3>
                    <p className="font-semibold mb-1">{method.info}</p>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <div className="carnival-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-carnival">
              <CardHeader>
                <CardTitle className="text-2xl font-carnival text-carnival-gradient flex items-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="order">Order Question</SelectItem>
                          <SelectItem value="custom">Custom Order</SelectItem>
                          <SelectItem value="sizing">Sizing Help</SelectItem>
                          <SelectItem value="shipping">Shipping</SelectItem>
                          <SelectItem value="return">Returns</SelectItem>
                          <SelectItem value="wholesale">Wholesale</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Brief description of your inquiry"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gradient-carnival hover:shadow-carnival"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ & Additional Info */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-festive text-primary flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-sm text-muted-foreground">
                      <strong>Peak Season (Jan-Mar):</strong> Extended hours Monday-Saturday
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-festive text-primary">
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                      <h4 className="font-semibold mb-2 text-carnival-purple">
                        {faq.question}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Special Services */}
              <Card className="gradient-party">
                <CardContent className="p-6 text-center text-white">
                  <Users className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-festive mb-2">
                    Group Orders & Events
                  </h3>
                  <p className="mb-4 text-white/90">
                    Planning a group event? We offer special pricing and coordination services for groups of 10+.
                  </p>
                  <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;