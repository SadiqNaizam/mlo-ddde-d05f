import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Minus, Trash2, CreditCard, ShoppingBag } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const CartPage = () => {
  console.log('CartPage loaded');
  const navigate = useNavigate();

  // Placeholder cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Giga-Sized Dorayaki',
      price: 500,
      quantity: 2,
      imageUrl: 'https://placehold.co/100x100/A0DEFF/3D405B?text=Dorayaki',
    },
    {
      id: 2,
      name: 'Memory Bread Toast',
      price: 750,
      quantity: 1,
      imageUrl: 'https://placehold.co/100x100/F4D35E/3D405B?text=Toast',
    },
    {
      id: 3,
      name: 'Anywhere Door Parfait',
      price: 900,
      quantity: 1,
      imageUrl: 'https://placehold.co/100x100/F5A9B8/3D405B?text=Parfait',
    }
  ]);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const playfulFontStyle = { fontFamily: '"Comic Sans MS", "Chalkboard SE", "Marker Felt", cursive' };

  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <Header />
      <main className="flex-1 container mx-auto py-8 sm:py-12 px-4">
        <Card className="w-full max-w-4xl mx-auto shadow-2xl rounded-3xl border-4 border-blue-300 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center p-6">
            <CardTitle style={playfulFontStyle} className="text-4xl font-bold text-blue-600">
              Your 4D Pocket Cart
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 mt-2">
              Review your delicious gadgets before the final adventure!
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            {cartItems.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[40%] sm:w-[50%] text-base">Product</TableHead>
                      <TableHead className="text-center text-base">Quantity</TableHead>
                      <TableHead className="text-right text-base">Total</TableHead>
                      <TableHead className="text-center text-base">Remove</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="flex items-center gap-4">
                            <img src={item.imageUrl} alt={item.name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover border-2 border-yellow-300" />
                            <div>
                              <p className="font-bold text-base sm:text-lg text-gray-800">{item.name}</p>
                              <p className="text-sm text-gray-500">¥{item.price.toFixed(2)} each</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="flex items-center justify-center gap-2">
                            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={() => handleQuantityChange(item.id, -1)}>
                              <Minus className="h-4 w-4" />
                            </Button>
                            <Input readOnly value={item.quantity} className="w-12 h-8 text-center" />
                            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={() => handleQuantityChange(item.id, 1)}>
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-semibold text-lg">¥{(item.price * item.quantity).toFixed(2)}</TableCell>
                        <TableCell className="text-center">
                          <Button variant="ghost" size="icon" onClick={() => handleRemoveItem(item.id)}>
                            <Trash2 className="h-5 w-5 text-red-500" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-16">
                <ShoppingBag className="mx-auto h-24 w-24 text-gray-300" />
                <h3 style={playfulFontStyle} className="mt-4 text-2xl font-bold text-gray-700">Your Pocket is Empty!</h3>
                <p className="mt-2 text-gray-500">Looks like you need some more gadgets.</p>
                <Button asChild className="mt-6 rounded-full bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold">
                  <Link to="/menu">Explore the Menu</Link>
                </Button>
              </div>
            )}
          </CardContent>
          {cartItems.length > 0 && (
            <CardFooter className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50/50 p-6 rounded-b-2xl">
              <div className="text-2xl font-bold text-gray-800">
                <span>Subtotal: </span>
                <span className="text-blue-600">¥{subtotal.toFixed(2)}</span>
              </div>
              <Button size="lg" className="w-full sm:w-auto rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-7" onClick={() => navigate('/checkout')}>
                <CreditCard className="mr-2 h-5 w-5" />
                Proceed to Checkout
              </Button>
            </CardFooter>
          )}
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;