
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our luxury automotive experts. We're here to help you find your perfect car.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of luxury automotive specialists is ready to assist you with any questions 
                about our collection, financing options, or to schedule a private viewing.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-muted-foreground text-sm mb-2">Speak with our experts</p>
                  <p className="font-medium">+91 98765 43210</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground text-sm mb-2">Send us a message</p>
                  <p className="font-medium">info@luxurycars.com</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Visit Showroom</h3>
                  <p className="text-muted-foreground text-sm mb-2">See cars in person</p>
                  <p className="font-medium text-sm">Bandra Kurla Complex, Mumbai</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <p className="text-muted-foreground text-sm mb-2">Monday - Sunday</p>
                  <p className="font-medium text-sm">10:00 AM - 8:00 PM</p>
                </CardContent>
              </Card>
            </div>

            {/* Additional Services */}
            <Card>
              <CardHeader>
                <CardTitle>Premium Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                  <span className="text-sm">Private vehicle consultations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                  <span className="text-sm">Test drive arrangements</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                  <span className="text-sm">Financing and insurance assistance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                  <span className="text-sm">Trade-in evaluations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                  <span className="text-sm">Concierge delivery service</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Send className="h-5 w-5 mr-2" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your luxury car needs, preferred models, budget range, or any specific questions..."
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-luxury-gradient hover:bg-luxury-gold-dark text-white"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground">
                  * Required fields. We'll respond within 24 hours during business days.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Do you offer financing options?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, we partner with leading banks and financial institutions to offer competitive 
                  financing solutions tailored for luxury vehicle purchases.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Can I trade in my current vehicle?</h3>
                <p className="text-sm text-muted-foreground">
                  Absolutely! We offer professional vehicle evaluations and competitive trade-in values 
                  to help you upgrade to your dream luxury car.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Do you provide warranty coverage?</h3>
                <p className="text-sm text-muted-foreground">
                  All our vehicles come with comprehensive manufacturer warranties, and we offer 
                  extended warranty packages for additional peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Is nationwide delivery available?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, we provide secure, professional delivery services across India. Your luxury 
                  vehicle will be delivered safely to your preferred location.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
