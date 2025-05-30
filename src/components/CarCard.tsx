
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, BadgeIndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Car, formatPrice } from '@/data/cars';
import { useCart } from '@/contexts/CartContext';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: car.id,
      name: car.name,
      price: car.price,
      image: car.image,
      brand: car.brand,
    });
  };

  return (
    <div className="group relative bg-card rounded-xl overflow-hidden border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {car.isNew && (
            <Badge className="bg-green-500 hover:bg-green-600 text-white">
              NEW
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

        {/* Heart Icon */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-4 right-4 bg-white/80 hover:bg-white text-black"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link to={`/car/${car.id}`}>
            <Button className="bg-white text-black hover:bg-gray-100">
              View Details
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Brand & Name */}
        <div className="mb-3">
          <p className="text-sm text-muted-foreground font-medium">{car.brand}</p>
          <h3 className="text-xl font-bold line-clamp-1">{car.name}</h3>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <span>🗓️</span>
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>⚡</span>
            <span>{car.power}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>⛽</span>
            <span>{car.fuel}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>🚗</span>
            <span>{car.transmission}</span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <BadgeIndianRupee className="h-4 w-4 text-luxury-gold" />
            <span className="text-2xl font-bold luxury-text-gradient">
              {formatPrice(car.price)}
            </span>
          </div>
          {car.originalPrice && (
            <p className="text-sm text-muted-foreground line-through">
              {formatPrice(car.originalPrice)}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button 
            onClick={handleAddToCart}
            className="flex-1 bg-luxury-gradient hover:bg-luxury-gold-dark text-white"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          <Link to={`/car/${car.id}`} className="flex-1">
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
