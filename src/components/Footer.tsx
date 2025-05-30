
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-luxury-gradient flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold luxury-text-gradient">LuxuryCars</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Discover the world's most exclusive luxury cars with unmatched performance and elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/cars" className="text-sm text-muted-foreground hover:text-primary transition-colors">All Cars</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/cars?category=Luxury" className="text-sm text-muted-foreground hover:text-primary transition-colors">Luxury Cars</Link></li>
              <li><Link to="/cars?category=Sports" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sports Cars</Link></li>
              <li><Link to="/cars?category=SUV" className="text-sm text-muted-foreground hover:text-primary transition-colors">SUVs</Link></li>
              <li><Link to="/cars?category=Electric" className="text-sm text-muted-foreground hover:text-primary transition-colors">Electric</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 info@luxurycars.com</p>
              <p>📞 +91 98765 43210</p>
              <p>📍 Mumbai, Maharashtra, India</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 LuxuryCars. All rights reserved. | Prices in Indian Rupees (₹)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
