
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart, Share2, BadgeIndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cars, formatPrice } from '@/data/cars';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

const CarDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);

  const car = cars.find(c => c.id === id);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Car not found</h1>
          <Link to="/cars">
            <Button>Back to Cars</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: car.id,
      name: car.name,
      price: car.price,
      image: car.image,
      brand: car.brand,
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${car.brand} ${car.name}`,
        text: `Check out this amazing ${car.brand} ${car.name}!`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied",
        description: "Car link has been copied to clipboard.",
      });
    }
  };

  // Mock multiple images - in real app, this would come from the car data
  const images = [car.image, car.image, car.image, car.image];

  const relatedCars = cars
    .filter(c => c.brand === car.brand && c.id !== car.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/cars" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Cars
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-video rounded-xl overflow-hidden bg-muted">
              <img
                src={images[selectedImage]}
                alt={car.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-video rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${car.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {car.isNew && (
                <Badge className="bg-green-500 hover:bg-green-600 text-white">
                  NEW ARRIVAL
                </Badge>
              )}
              {car.isFeatured && (
                <Badge className="bg-luxury-gold hover:bg-luxury-gold-dark text-black">
                  FEATURED
                </Badge>
              )}
              {car.discount && (
                <Badge className="bg-red-500 hover:bg-red-600 text-white">
                  {car.discount}% OFF
                </Badge>
              )}
            </div>

            {/* Title */}
            <div>
              <p className="text-luxury-gold font-medium text-lg">{car.brand}</p>
              <h1 className="text-4xl font-bold mb-2">{car.name}</h1>
              <p className="text-muted-foreground">{car.category} • {car.year}</p>
            </div>

            {/* Price */}
            <div className="border-l-4 border-luxury-gold pl-4">
              <div className="flex items-center gap-2 mb-2">
                <BadgeIndianRupee className="h-6 w-6 text-luxury-gold" />
                <span className="text-3xl font-bold luxury-text-gradient">
                  {formatPrice(car.price)}
                </span>
              </div>
              {car.originalPrice && (
                <p className="text-lg text-muted-foreground line-through">
                  {formatPrice(car.originalPrice)}
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {car.description}
            </p>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
              <div className="text-center">
                <p className="text-2xl font-bold luxury-text-gradient">{car.power}</p>
                <p className="text-sm text-muted-foreground">Power</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold luxury-text-gradient">{car.acceleration}</p>
                <p className="text-sm text-muted-foreground">0-100 km/h</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold luxury-text-gradient">{car.topSpeed}</p>
                <p className="text-sm text-muted-foreground">Top Speed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold luxury-text-gradient">{car.seating}</p>
                <p className="text-sm text-muted-foreground">Seating</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button 
                onClick={handleAddToCart}
                size="lg" 
                className="flex-1 bg-luxury-gradient hover:bg-luxury-gold-dark text-white"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={handleShare}>
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <Tabs defaultValue="specifications" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="warranty">Warranty</TabsTrigger>
          </TabsList>

          <TabsContent value="specifications" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
                <CardDescription>
                  Detailed technical information about the {car.brand} {car.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Engine</span>
                      <span>{car.engine}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Power</span>
                      <span>{car.power}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Transmission</span>
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Fuel Type</span>
                      <span>{car.fuel}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Top Speed</span>
                      <span>{car.topSpeed}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">0-100 km/h</span>
                      <span>{car.acceleration}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Mileage</span>
                      <span>{car.mileage}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Seating</span>
                      <span>{car.seating} seats</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Premium Features</CardTitle>
                <CardDescription>
                  Luxury amenities and advanced technology features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="warranty" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Warranty & Support</CardTitle>
                <CardDescription>
                  Comprehensive warranty coverage and after-sales support
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2">🛡️ Manufacturer Warranty</h4>
                  <p className="text-sm text-muted-foreground">
                    3 years or 100,000 km comprehensive warranty coverage
                  </p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2">🔧 Service Support</h4>
                  <p className="text-sm text-muted-foreground">
                    24/7 roadside assistance and authorized service centers nationwide
                  </p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2">💎 Luxury Care</h4>
                  <p className="text-sm text-muted-foreground">
                    Premium maintenance packages and concierge services available
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Cars */}
        {relatedCars.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-8">More from {car.brand}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedCars.map((relatedCar, index) => (
                <Link key={relatedCar.id} to={`/car/${relatedCar.id}`}>
                  <div className="group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="aspect-video rounded-lg overflow-hidden mb-4">
                      <img
                        src={relatedCar.image}
                        alt={relatedCar.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold">{relatedCar.name}</h3>
                    <p className="text-luxury-gold font-bold">{formatPrice(relatedCar.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default CarDetail;
