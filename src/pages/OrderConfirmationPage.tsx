import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Shadcn UI Components
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

// Icons
import { PackageCheck, ArrowRight } from 'lucide-react';

// Placeholder data for the order summary
const orderDetails = {
  orderId: 'DORA-12345',
  items: [
    { name: 'Giga-Sized Dorayaki', quantity: 2, price: 1200 },
    { name: 'Memory Bread Toast', quantity: 1, price: 500 },
  ],
  total: 2900, // Includes tax or other fees
};

const OrderConfirmationPage = () => {
  console.log('OrderConfirmationPage loaded');

  // A playful font stack consistent with other components
  const playfulFontStyle = { fontFamily: '"Comic Sans MS", "Chalkboard SE", "Marker Felt", cursive' };

  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6">
        <Card className="w-full max-w-2xl rounded-2xl shadow-xl border-2 border-blue-200 text-center overflow-hidden">
          <CardHeader className="bg-yellow-100 p-6">
            <motion.img
              src="https://i.imgur.com/2J9z2g8.png" // Using a public placeholder of a happy Doraemon
              alt="Happy Doraemon"
              className="mx-auto h-32 w-32 sm:h-40 sm:w-40"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
            />
            <Alert className="mt-4 bg-green-100 border-green-300 text-green-800">
              <PackageCheck className="h-5 w-5" />
              <AlertTitle className="font-bold text-lg" style={playfulFontStyle}>Order Confirmed!</AlertTitle>
              <AlertDescription>
                Thank you! Your delicious adventure is being prepared.
              </AlertDescription>
            </Alert>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <CardTitle className="text-2xl text-blue-800" style={playfulFontStyle}>
              Your Order Summary
            </CardTitle>
            <CardDescription>Order ID: {orderDetails.orderId}</CardDescription>
            <Separator />
            <div className="text-left space-y-2 py-2">
              {orderDetails.items.map((item) => (
                <div key={item.name} className="flex justify-between items-center">
                  <p className="text-gray-700">{item.name} <span className="text-sm text-gray-500">x{item.quantity}</span></p>
                  <p className="font-semibold text-gray-800">¥{(item.price).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <Separator />
            <div className="flex justify-between items-center font-bold text-xl pt-2">
              <p className="text-blue-700">Total:</p>
              <p className="text-blue-900">¥{orderDetails.total.toFixed(2)}</p>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50 p-6 flex-col sm:flex-row gap-4 justify-center">
            <p className="text-gray-600">Want to add more?</p>
            <Button asChild size="lg" className="rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold">
              <Link to="/menu"> {/* Path from App.tsx */}
                Back to Menu <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmationPage;