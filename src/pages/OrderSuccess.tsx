
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Car, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OrderSuccess: React.FC = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-xl text-muted-foreground">
              Thank you for your luxury car purchase
            </p>
          </div>

          {/* Order Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Order Number:</span>
                <span className="font-mono font-bold">#LC{Date.now().toString().slice(-6)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Order Date:</span>
                <span>{new Date().toLocaleDateString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Payment Status:</span>
                <span className="text-green-600 font-semibold">Paid</span>
              </div>
            </CardContent>
          </Card>

          {/* What's Next */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Car className="h-5 w-5 mr-2" />
                What happens next?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-left space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-luxury-gold rounded-full flex items-center justify-center text-black text-sm font-bold mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">Order Confirmation</h3>
                  <p className="text-sm text-muted-foreground">You'll receive an email confirmation with your order details within 24 hours.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-luxury-gold rounded-full flex items-center justify-center text-black text-sm font-bold mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Vehicle Preparation</h3>
                  <p className="text-sm text-muted-foreground">Our team will prepare your luxury vehicle and handle all documentation.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-luxury-gold rounded-full flex items-center justify-center text-black text-sm font-bold mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">Delivery Coordination</h3>
                  <p className="text-sm text-muted-foreground">Our delivery team will contact you to schedule a convenient delivery time.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-luxury-gold rounded-full flex items-center justify-center text-black text-sm font-bold mt-0.5">
                  4
                </div>
                <div>
                  <h3 className="font-semibold">Vehicle Handover</h3>
                  <p className="text-sm text-muted-foreground">Enjoy your new luxury car with our comprehensive warranty and support.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@luxurycars.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Our customer service team is available 24/7 to assist you.
              </p>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cars">
              <Button size="lg" className="bg-luxury-gradient hover:bg-luxury-gold-dark text-white">
                Browse More Cars
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
