import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { User, Home, Phone, CreditCard } from 'lucide-react';
import { toast } from "sonner";

// Playful font style consistent with the theme
const playfulFontStyle = { fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Marker Felt', cursive" };

// Form validation schema using Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  address: z.string().min(10, { message: "Please enter a valid address." }),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Please enter a valid phone number." }),
  cardNumber: z.string().length(16, { message: "Card number must be 16 digits." }).regex(/^\d{16}$/, { message: "Please enter a valid card number." }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: "Invalid format. Use MM/YY." }),
  cvc: z.string().min(3, { message: "CVC must be 3 or 4 digits." }).max(4),
});

const CheckoutPage = () => {
  console.log('CheckoutPage loaded');
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      phone: "",
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form Submitted:", values);
    toast.success("Your order is on its way!", {
      description: "Doraemon is using the Anywhere Door to deliver it!",
    });
    // Navigate to the order confirmation page upon successful submission
    navigate('/order-confirmation');
  };

  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className="max-w-2xl mx-auto rounded-2xl shadow-lg border-2 border-blue-200">
            <CardHeader className="text-center">
              <img src="https://placehold.co/100x100/A0D2EB/FFFFFF?text=🔔" alt="Doraemon's Bell" className="mx-auto h-20 w-20 rounded-full mb-4" />
              <CardTitle style={playfulFontStyle} className="text-3xl text-blue-700">Almost There!</CardTitle>
              <CardDescription className="text-gray-600">Doraemon is waiting for these delicious treats.</CardDescription>
            </CardHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent className="space-y-8">
                  <section className="space-y-4">
                    <h3 style={playfulFontStyle} className="text-xl font-bold text-gray-800">Delivery Details</h3>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2"><User className="h-4 w-4" /> Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Nobita Nobi" {...field} className="rounded-lg" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2"><Home className="h-4 w-4" /> Delivery Address</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Gadget Lane, Tokyo" {...field} className="rounded-lg" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2"><Phone className="h-4 w-4" /> Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+81 123 456 7890" {...field} className="rounded-lg" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </section>
                  <Separator />
                  <section className="space-y-4">
                    <h3 style={playfulFontStyle} className="text-xl font-bold text-gray-800">Payment Information</h3>
                     <FormField
                      control={form.control}
                      name="cardNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2"><CreditCard className="h-4 w-4" /> Card Number</FormLabel>
                          <FormControl>
                            <Input placeholder="•••• •••• •••• ••••" {...field} className="rounded-lg" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                       <FormField
                          control={form.control}
                          name="expiryDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Expiry (MM/YY)</FormLabel>
                              <FormControl>
                                <Input placeholder="MM/YY" {...field} className="rounded-lg" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                       <FormField
                          control={form.control}
                          name="cvc"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>CVC</FormLabel>
                              <FormControl>
                                <Input placeholder="123" {...field} className="rounded-lg" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                    </div>
                  </section>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <div className="w-full p-4 bg-blue-100 rounded-lg text-lg font-semibold text-blue-800 flex justify-between">
                    <span>Total Amount:</span>
                    <span>¥3,500.00</span>
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-yellow-400 text-blue-800 font-bold text-xl rounded-full py-7 transition-all duration-200 hover:bg-yellow-500 hover:ring-4 hover:ring-yellow-200 active:scale-95">
                    Place Your Magical Order
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;