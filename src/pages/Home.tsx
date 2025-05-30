
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cars } from '@/data/cars';
import CarCard from '@/components/CarCard';

const Home: React.FC = () => {
  const featuredCars = cars.filter(car => car.isFeatured).slice(0, 6);
  const newCars = cars.filter(car => car.isNew).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-hero-pattern overflow-hidden">
        <div className="absolute inset-0 bg-luxury-gradient opacity-80"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Luxury Cars
            <span className="block luxury-text-gradient">Redefined</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover the world's most exclusive collection of premium automobiles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/cars">
              <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold px-8 py-3">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
              Watch Video
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-luxury-gold rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 bg-luxury-gold rounded-full opacity-40"></div>
        </div>
        <div className="absolute top-1/3 right-8 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-3 h-3 bg-luxury-gold rounded-full opacity-50"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose LuxuryCars?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience unparalleled service and premium quality in every aspect of your luxury car journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-muted-foreground">
                Every vehicle in our collection meets the highest standards of luxury, performance, and craftsmanship.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Trusted Service</h3>
              <p className="text-muted-foreground">
                With years of experience in luxury automotive, we provide trusted and reliable service you can count on.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Nationwide Delivery</h3>
              <p className="text-muted-foreground">
                We deliver your dream car anywhere in India with our secure and professional delivery service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Collection</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked premium vehicles that represent the pinnacle of automotive excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCars.map((car, index) => (
              <div key={car.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CarCard car={car} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/cars">
              <Button size="lg" className="bg-luxury-gradient hover:bg-luxury-gold-dark text-white px-8 py-3">
                View All Cars
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">New Arrivals</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The latest additions to our exclusive collection of luxury automobiles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newCars.map((car, index) => (
              <div key={car.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CarCard car={car} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-luxury-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">63+</div>
              <div className="text-lg opacity-90">Luxury Cars</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Premium Brands</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">Happy Customers</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold mb-2">5⭐</div>
              <div className="text-lg opacity-90">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Own Your Dream Car?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Browse our exclusive collection and find the perfect luxury vehicle that matches your style and performance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cars">
                <Button size="lg" className="bg-luxury-gradient hover:bg-luxury-gold-dark text-white px-8 py-3">
                  Browse Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="px-8 py-3">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
