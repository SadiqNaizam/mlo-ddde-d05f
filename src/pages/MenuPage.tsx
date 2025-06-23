import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MenuItemCard from '@/components/MenuItemCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for the menu items, following the whimsical theme
const mainDishes = [
  {
    id: 'md1',
    name: "Time-Travel Tonkotsu Ramen",
    price: 1200,
    imageUrl: "https://placehold.co/400x400/A0DEFF/31343C?text=Ramen",
    characterImageUrl: "https://placehold.co/100x100/transparent/000000?text=Doraemon",
  },
  {
    id: 'md2',
    name: "Gian's Hearty Katsu Curry",
    price: 1350,
    imageUrl: "https://placehold.co/400x400/F9A8D4/31343C?text=Curry",
    characterImageUrl: "https://placehold.co/100x100/transparent/000000?text=Gian",
  },
  {
    id: 'md3',
    name: "Suneo's Deluxe Chirashi Bowl",
    price: 1500,
    imageUrl: "https://placehold.co/400x400/818CF8/31343C?text=Chirashi",
    characterImageUrl: "https://placehold.co/100x100/transparent/000000?text=Suneo",
  },
];

const desserts = [
  {
    id: 'd1',
    name: "Giga-Sized Dorayaki",
    price: 650,
    imageUrl: "https://placehold.co/400x400/FBBF24/31343C?text=Dorayaki",
    characterImageUrl: "https://placehold.co/100x100/transparent/000000?text=Doraemon",
  },
  {
    id: 'd2',
    name: "Memory Bread French Toast",
    price: 750,
    imageUrl: "https://placehold.co/400x400/FDE68A/31343C?text=Toast",
    characterImageUrl: "https://placehold.co/100x100/transparent/000000?text=Nobita",
  },
  {
    id: 'd3',
    name: "Anywhere Door Parfait",
    price: 900,
    imageUrl: "https://placehold.co/400x400/F472B6/31343C?text=Parfait",
    characterImageUrl: "https://placehold.co/100x100/transparent/000000?text=Shizuka",
  },
  {
    id: 'd4',
    name: "Woodcutter's Pond Mochi",
    price: 500,
    imageUrl: "https://placehold.co/400x400/A7F3D0/31343C?text=Mochi",
    characterImageUrl: "https://placehold.co/100x100/transparent/000000?text=Goddess",
  },
];

const drinks = [
  {
    id: 'dr1',
    name: "Small Light Potion Soda",
    price: 450,
    imageUrl: "https://placehold.co/400x400/6EE7B7/31343C?text=Soda",
    characterImageUrl: "https://placehold.co/100x100/transparent/000000?text=Dorami",
  },
  {
    id: 'dr2',
    name: "Take-copter Iced Tea",
    price: 400,
    imageUrl: "https://placehold.co/400x400/93C5FD/31343C?text=Iced+Tea",
    characterImageUrl: "https://placehold.co/100x100/transparent/000000?text=Take-copter",
  },
  {
    id: 'dr3',
    name: "Shizuka's Sweet Potato Latte",
    price: 550,
    imageUrl: "https://placehold.co/400x400/D8B4FE/31343C?text=Latte",
    characterImageUrl: "https://placehold.co/100x100/transparent/000000?text=Shizuka",
  },
];


const MenuPage = () => {
    console.log('MenuPage loaded');
    const playfulFontStyle = { fontFamily: '"Comic Sans MS", "Chalkboard SE", "Marker Felt", cursive' };

  return (
    <div className="bg-blue-50 min-h-screen">
      <Header />
      <main className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 style={playfulFontStyle} className="text-4xl sm:text-5xl font-bold text-blue-600">
              Our Wondrous Menu
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Every dish is an adventure! Pick your favorite gadget-inspired treat.
            </p>
          </div>

          <Tabs defaultValue="desserts" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:w-1/2 mx-auto h-auto p-2 bg-blue-200 rounded-full">
              <TabsTrigger value="main-dishes" className="text-base font-semibold rounded-full data-[state=active]:bg-yellow-400 data-[state=active]:text-blue-800 data-[state=active]:shadow-lg">Main Dishes</TabsTrigger>
              <TabsTrigger value="desserts" className="text-base font-semibold rounded-full data-[state=active]:bg-yellow-400 data-[state=active]:text-blue-800 data-[state=active]:shadow-lg">Desserts</TabsTrigger>
              <TabsTrigger value="drinks" className="text-base font-semibold rounded-full data-[state=active]:bg-yellow-400 data-[state=active]:text-blue-800 data-[state=active]:shadow-lg">Drinks</TabsTrigger>
            </TabsList>
            
            <TabsContent value="main-dishes" className="mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 justify-items-center">
                {mainDishes.map(item => <MenuItemCard key={item.id} {...item} />)}
              </div>
            </TabsContent>
            
            <TabsContent value="desserts" className="mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 justify-items-center">
                {desserts.map(item => <MenuItemCard key={item.id} {...item} />)}
              </div>
            </TabsContent>

            <TabsContent value="drinks" className="mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 justify-items-center">
                {drinks.map(item => <MenuItemCard key={item.id} {...item} />)}
              </div>
            </TabsContent>

          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;