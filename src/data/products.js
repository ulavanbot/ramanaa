import dhotiImage from '../assets/dhoti.png';
import shirtImage from '../assets/shirt.png';

// HOW TO ADD YOUR OWN IMAGES:
// 1. Drag and drop your image files into the 'src/assets' folder.
// 2. Import them at the top of this file, just like the examples above.
//    Example: import myNewShirt from '../assets/my-new-shirt.jpg';

export const products = [
  { 
    id: 1, 
    title: 'Premium Gold Border Dhoti', 
    price: 1299, // CHANGE YOUR PRICE HERE
    category: 'Dhotis', 
    image: dhotiImage // CHANGE YOUR IMAGE HERE (e.g., image: myNewShirt)
  },
  { 
    id: 2, 
    title: 'Classic White Formal Shirt', 
    price: 999, 
    category: 'Shirts', 
    image: shirtImage 
  },
  { 
    id: 3, 
    title: 'Royal Silk Dhoti Set', 
    price: 3499, 
    category: 'Dhotis', 
    image: dhotiImage 
  },
  { 
    id: 4, 
    title: 'Traditional Half Sleeve Shirt', 
    price: 899, 
    category: 'Shirts', 
    image: shirtImage 
  },
  { 
    id: 5, 
    title: 'Cotton Blend Dhoti', 
    price: 799, 
    category: 'Dhotis', 
    image: dhotiImage 
  },
  { 
    id: 6, 
    title: 'Linen Traditional Shirt', 
    price: 1499, 
    category: 'Shirts', 
    image: shirtImage 
  },
  { 
    id: 7, 
    title: 'Wedding Special Dhoti', 
    price: 2199, 
    category: 'Dhotis', 
    image: dhotiImage 
  },
  { 
    id: 8, 
    title: 'Premium Silk Blend Shirt', 
    price: 1899, 
    category: 'Shirts', 
    image: shirtImage 
  },
];
