
import React from 'react';
import { Star, Users, Award, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About LuxuryCars</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are India's premier destination for luxury automobiles, bringing you the finest collection 
            of premium vehicles from the world's most prestigious brands.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded with a passion for automotive excellence, LuxuryCars has been serving discerning 
              customers across India for over a decade. Our journey began with a simple vision: to make 
              luxury cars accessible to those who appreciate the finer things in life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we proudly showcase an exclusive collection of 63+ luxury vehicles from 15+ premium 
              brands, each carefully selected for their performance, craftsmanship, and prestige. Our 
              commitment to excellence extends beyond just selling cars – we provide a complete luxury 
              automotive experience.
            </p>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop"
              alt="Luxury car showroom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold luxury-text-gradient mb-2">63+</div>
            <p className="text-muted-foreground">Luxury Vehicles</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold luxury-text-gradient mb-2">15+</div>
            <p className="text-muted-foreground">Premium Brands</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold luxury-text-gradient mb-2">1000+</div>
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold luxury-text-gradient mb-2">10+</div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  We maintain the highest standards in every aspect of our service and vehicle selection.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer First</h3>
                <p className="text-muted-foreground text-sm">
                  Your satisfaction is our priority. We go above and beyond to exceed expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Trust</h3>
                <p className="text-muted-foreground text-sm">
                  Built on transparency and integrity, we've earned the trust of luxury car enthusiasts.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  We embrace technology and innovation to enhance your luxury car buying experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize luxury automotive ownership by providing access to the world's finest 
                vehicles with unparalleled service, transparency, and expertise. We strive to make every 
                customer's dream of owning a luxury car a reality.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted and preferred luxury automotive platform, setting new 
                standards for customer experience, service quality, and automotive excellence in the 
                luxury car segment.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose LuxuryCars?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-lg font-semibold mb-2">Curated Selection</h3>
              <p className="text-sm text-muted-foreground">
                Every vehicle is handpicked and thoroughly inspected to meet our exacting standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold mb-2">Secure Transactions</h3>
              <p className="text-sm text-muted-foreground">
                Advanced security measures ensure your personal and financial information is protected.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-lg font-semibold mb-2">Nationwide Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Professional delivery service ensures your luxury car reaches you safely anywhere in India.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold mb-2">Comprehensive Warranty</h3>
              <p className="text-sm text-muted-foreground">
                Extended warranty options and service packages for complete peace of mind.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-lg font-semibold mb-2">Concierge Service</h3>
              <p className="text-sm text-muted-foreground">
                Personalized assistance from our luxury automotive experts throughout your journey.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">
                Round-the-clock customer support for any queries or assistance you may need.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our passionate team of automotive experts is dedicated to helping you find your perfect luxury vehicle.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-24 h-24 bg-luxury-gradient rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  RK
                </div>
                <h3 className="text-xl font-semibold mb-2">Raj Kumar</h3>
                <p className="text-muted-foreground mb-1">Founder & CEO</p>
                <p className="text-sm text-muted-foreground">
                  20+ years in luxury automotive industry
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-24 h-24 bg-luxury-gradient rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  PS
                </div>
                <h3 className="text-xl font-semibold mb-2">Priya Sharma</h3>
                <p className="text-muted-foreground mb-1">Head of Customer Experience</p>
                <p className="text-sm text-muted-foreground">
                  Expert in luxury customer service
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-24 h-24 bg-luxury-gradient rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  AV
                </div>
                <h3 className="text-xl font-semibold mb-2">Arjun Verma</h3>
                <p className="text-muted-foreground mb-1">Chief Technology Officer</p>
                <p className="text-sm text-muted-foreground">
                  Leading digital innovation in automotive
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
