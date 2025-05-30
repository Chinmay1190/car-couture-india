
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Car, Mail, Phone, Download, Printer, FileText, Sparkles, Trophy, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const OrderSuccess: React.FC = () => {
  const invoiceRef = useRef<HTMLDivElement>(null);
  
  // Mock order data - in real app this would come from route state or API
  const orderData = {
    orderNumber: `LC${Date.now().toString().slice(-6)}`,
    orderDate: new Date().toLocaleDateString('en-IN'),
    invoiceDate: new Date().toLocaleDateString('en-IN'),
    customerInfo: {
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+91 98765 43210',
      address: '123 Luxury Lane, Mumbai, Maharashtra 400001',
      gstin: 'GSTIN1234567890'
    },
    companyInfo: {
      name: 'LuxuryCars India Pvt. Ltd.',
      address: '456 Premium Plaza, New Delhi, Delhi 110001',
      gstin: 'GSTIN0987654321',
      phone: '+91 11-2345-6789',
      email: 'sales@luxurycars.com'
    },
    items: [
      {
        id: '1',
        name: 'Mercedes-Benz S-Class',
        model: 'S 350d 2024',
        hsn: '8703',
        quantity: 1,
        price: 4500000,
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=300&fit=crop'
      }
    ],
    subtotal: 4500000,
    sgst: 225000, // 5% SGST
    cgst: 225000, // 5% CGST
    total: 4950000,
    paymentMethod: 'Credit Card',
    paymentStatus: 'Paid'
  };

  const handleDownloadInvoice = () => {
    if (!invoiceRef.current) return;
    
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    
    const invoiceHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Invoice - ${orderData.orderNumber}</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              margin: 0; 
              padding: 20px; 
              background: white;
              color: black;
            }
            .invoice-header { 
              display: flex; 
              justify-content: space-between; 
              align-items: center; 
              margin-bottom: 30px;
              border-bottom: 2px solid #D4AF37;
              padding-bottom: 20px;
            }
            .company-info { text-align: left; }
            .invoice-info { text-align: right; }
            .invoice-title { 
              font-size: 24px; 
              font-weight: bold; 
              color: #D4AF37; 
              margin-bottom: 10px;
            }
            .customer-section, .items-section { margin: 30px 0; }
            .section-title { 
              font-size: 18px; 
              font-weight: bold; 
              margin-bottom: 15px;
              color: #2C2C2C;
            }
            table { 
              width: 100%; 
              border-collapse: collapse; 
              margin: 20px 0;
            }
            th, td { 
              border: 1px solid #ddd; 
              padding: 12px; 
              text-align: left;
            }
            th { 
              background-color: #f8f9fa; 
              font-weight: bold;
            }
            .total-section { 
              margin-top: 30px; 
              display: flex; 
              justify-content: flex-end;
            }
            .total-table { width: 300px; }
            .grand-total { 
              font-weight: bold; 
              background-color: #D4AF37; 
              color: white;
            }
            @media print {
              body { print-color-adjust: exact; }
            }
          </style>
        </head>
        <body>
          ${invoiceRef.current.innerHTML}
        </body>
      </html>
    `;
    
    printWindow.document.write(invoiceHTML);
    printWindow.document.close();
    printWindow.print();
  };

  const handlePrintInvoice = () => {
    window.print();
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Animated Success Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-green-500/20 rounded-full animate-pulse"></div>
              </div>
              <div className="relative">
                <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-4 animate-bounce" />
                <Sparkles className="h-6 w-6 text-luxury-gold absolute -top-2 -right-2 animate-spin" />
                <Trophy className="h-6 w-6 text-luxury-gold absolute -bottom-2 -left-2 animate-pulse" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4 luxury-text-gradient animate-fade-in">
              Order Confirmed!
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-5 w-5 text-luxury-gold fill-current animate-pulse" />
              <p className="text-xl text-muted-foreground">
                Thank you for your luxury car purchase
              </p>
              <Star className="h-5 w-5 text-luxury-gold fill-current animate-pulse" />
            </div>
          </div>

          {/* Order Summary Card */}
          <Card className="mb-8 luxury-shadow animate-fade-in hover:scale-[1.02] transition-transform duration-300">
            <CardHeader className="bg-luxury-gradient text-white">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Order Number</p>
                  <p className="font-mono font-bold text-lg">{orderData.orderNumber}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Order Date</p>
                  <p className="font-semibold">{orderData.orderDate}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Payment Status</p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    {orderData.paymentStatus}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Invoice Section */}
          <Card className="mb-8 luxury-shadow animate-fade-in">
            <CardHeader className="bg-luxury-gradient text-white">
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Invoice Details
                </CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePrintInvoice}
                    className="bg-white text-black hover:bg-gray-100"
                  >
                    <Printer className="h-4 w-4 mr-2" />
                    Print
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDownloadInvoice}
                    className="bg-white text-black hover:bg-gray-100"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div ref={invoiceRef} className="p-6">
                {/* Invoice Header */}
                <div className="flex justify-between items-start mb-8 pb-4 border-b-2 border-luxury-gold">
                  <div>
                    <h2 className="text-2xl font-bold luxury-text-gradient">LuxuryCars</h2>
                    <p className="text-sm text-muted-foreground mt-1">Premium Automotive Excellence</p>
                    <div className="mt-3 space-y-1 text-sm">
                      <p>{orderData.companyInfo.address}</p>
                      <p>Phone: {orderData.companyInfo.phone}</p>
                      <p>Email: {orderData.companyInfo.email}</p>
                      <p>GSTIN: {orderData.companyInfo.gstin}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <h3 className="text-xl font-bold text-luxury-gold mb-2">INVOICE</h3>
                    <div className="space-y-1 text-sm">
                      <p><strong>Invoice No:</strong> {orderData.orderNumber}</p>
                      <p><strong>Date:</strong> {orderData.invoiceDate}</p>
                      <p><strong>Payment:</strong> {orderData.paymentMethod}</p>
                    </div>
                  </div>
                </div>

                {/* Customer Information */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3 text-luxury-gold">Bill To:</h4>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="font-semibold">{orderData.customerInfo.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">{orderData.customerInfo.address}</p>
                    <div className="mt-2 space-y-1 text-sm">
                      <p>Email: {orderData.customerInfo.email}</p>
                      <p>Phone: {orderData.customerInfo.phone}</p>
                      <p>GSTIN: {orderData.customerInfo.gstin}</p>
                    </div>
                  </div>
                </div>

                {/* Items Table */}
                <Table className="mb-8">
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead>Item Description</TableHead>
                      <TableHead>HSN Code</TableHead>
                      <TableHead className="text-center">Qty</TableHead>
                      <TableHead className="text-right">Unit Price</TableHead>
                      <TableHead className="text-right">Total Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orderData.items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-12 object-cover rounded"
                            />
                            <div>
                              <p className="font-semibold">{item.name}</p>
                              <p className="text-sm text-muted-foreground">{item.model}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{item.hsn}</TableCell>
                        <TableCell className="text-center">{item.quantity}</TableCell>
                        <TableCell className="text-right">{formatCurrency(item.price)}</TableCell>
                        <TableCell className="text-right font-semibold">
                          {formatCurrency(item.price * item.quantity)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {/* Totals Section */}
                <div className="flex justify-end">
                  <div className="w-80">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-semibold">Subtotal</TableCell>
                          <TableCell className="text-right">{formatCurrency(orderData.subtotal)}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>SGST (5%)</TableCell>
                          <TableCell className="text-right">{formatCurrency(orderData.sgst)}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>CGST (5%)</TableCell>
                          <TableCell className="text-right">{formatCurrency(orderData.cgst)}</TableCell>
                        </TableRow>
                        <TableRow className="bg-luxury-gold text-white">
                          <TableCell className="font-bold text-lg">Grand Total</TableCell>
                          <TableCell className="text-right font-bold text-lg">
                            {formatCurrency(orderData.total)}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="mt-8 pt-4 border-t">
                  <h5 className="font-semibold mb-2">Terms & Conditions:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Vehicle delivery within 15-30 business days</li>
                    <li>• Comprehensive warranty as per manufacturer terms</li>
                    <li>• All taxes and registration charges included</li>
                    <li>• Insurance to be arranged separately</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What's Next - Enhanced with animations */}
          <Card className="mb-8 luxury-shadow animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Car className="h-5 w-5 mr-2 animate-float" />
                What happens next?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Order Confirmation",
                  description: "You'll receive an email confirmation with your order details within 24 hours.",
                  delay: "animate-fade-in"
                },
                {
                  step: 2,
                  title: "Vehicle Preparation",
                  description: "Our team will prepare your luxury vehicle and handle all documentation.",
                  delay: "animate-fade-in"
                },
                {
                  step: 3,
                  title: "Delivery Coordination",
                  description: "Our delivery team will contact you to schedule a convenient delivery time.",
                  delay: "animate-fade-in"
                },
                {
                  step: 4,
                  title: "Vehicle Handover",
                  description: "Enjoy your new luxury car with our comprehensive warranty and support.",
                  delay: "animate-fade-in"
                }
              ].map((item, index) => (
                <div key={item.step} className={`flex items-start gap-4 ${item.delay}`} style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center text-black text-sm font-bold flex-shrink-0 animate-pulse">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-luxury-gold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Contact Information - Enhanced */}
          <Card className="mb-8 luxury-shadow animate-fade-in glass-effect">
            <CardHeader>
              <CardTitle className="text-center">Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <Mail className="h-5 w-5 text-luxury-gold" />
                  <span>support@luxurycars.com</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <Phone className="h-5 w-5 text-luxury-gold" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Our customer service team is available 24/7 to assist you.
              </p>
            </CardContent>
          </Card>

          {/* Action Buttons - Enhanced with animations */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/cars">
              <Button size="lg" className="bg-luxury-gradient hover:bg-luxury-gold-dark text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Sparkles className="h-4 w-4 mr-2" />
                Browse More Cars
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" className="hover:scale-105 transition-all duration-300">
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
