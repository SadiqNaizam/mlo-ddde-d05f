import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ShoppingCart } from 'lucide-react';
import { toast } from "sonner";

interface MenuItemCardProps {
  id: string | number;
  name: string;
  price: number;
  imageUrl: string;
  characterImageUrl?: string; // Optional URL for the corner character illustration
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  id,
  name,
  price,
  imageUrl,
  characterImageUrl
}) => {
  console.log('MenuItemCard loaded for:', name);

  const handleAddToOrder = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    toast.success(`${name} has been added to your order!`, {
      description: "Check your 4D Pocket Cart.",
      // Using a simple icon from lucide-react, as a custom gadget icon would be its own component
      icon: <ShoppingCart className="h-4 w-4" />,
    });
    console.log(`Item ${id} added to order.`);
  };

  // Using a playful font stack as a placeholder for the theme's typography
  const playfulFontStyle = { fontFamily: '"Comic Sans MS", "Chalkboard SE", "Marker Felt", cursive' };

  return (
    <Card className="w-full max-w-xs overflow-hidden rounded-2xl border-2 border-blue-300 bg-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-yellow-400 group relative">
      {characterImageUrl && (
        <div className="absolute top-0 right-0 z-10 p-2">
          <img
            src={characterImageUrl}
            alt="Thematic character illustration"
            className="h-14 w-14 sm:h-16 sm:w-16 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
          />
        </div>
      )}

      <CardHeader className="p-0">
        <AspectRatio ratio={1}>
          <img
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
        </AspectRatio>
      </CardHeader>

      <CardContent className="p-4 text-center space-y-1">
        <CardTitle style={playfulFontStyle} className="text-2xl font-bold text-gray-800 line-clamp-2">
          {name}
        </CardTitle>
        <p className="text-xl font-semibold text-blue-600">¥{price.toFixed(2)}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToOrder}
          className="w-full bg-yellow-400 text-blue-800 font-bold text-lg rounded-full py-6 transition-all duration-200 hover:bg-yellow-500 hover:ring-4 hover:ring-yellow-200 active:scale-95"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Order
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuItemCard;