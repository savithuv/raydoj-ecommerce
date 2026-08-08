import image1 from './assets/image1.webp';
import image2 from './assets/image2.webp';
import image3 from './assets/image3.webp';
import image4 from './assets/image4.webp';
import image5 from './assets/image5.webp';


import black1 from './assets/black-1.webp';
import black2 from './assets/black-2.webp';
import black3 from './assets/black-3.jpg'; // Note the .jpg extension here!
import black4 from './assets/black-4.webp';
import black5 from './assets/black-5.webp';


// 1. Import your new separate images here (make sure filenames have no spaces or special characters!):
// import blackWallet1 from './assets/black-wallet-1.webp';
// import brownWallet1 from './assets/brown-wallet-1.webp';

export const products = [
  {
    id: "1",
    title: "LEO Wallet – Black Buffalo Leather Edition",
    category: "Men's Wallet",
    oldPrice: "LKR 24,600",
    newPrice: "LKR 21,600",
    description: "we are the prople all aounds the wor;d lamborgini this is lorem and fake descriptionCrafted from premium leather, this stylish wallet offers a sleek design with practical storage for your cards, cash, and everyday essentials.",
    details: "This premium wallet features 6 card slots, 2 hidden compartments, and a full-length cash pocket. Hand-stitched with waxed nylon thread for superior durability. Dimensions: 11cm x 9cm. Backed by a 1-year craftsmanship warranty.",
    images: [black1, black2, black3, black4, black5,] // Swap these with your unique imports for product 1
  },
  {
    id: "2",
    title: "LEO Wallet – Classic Brown",
    category: "Men's Wallet",
    oldPrice: "LKR 26,000",
    newPrice: "LKR 23,000",
    description: "Rich brown classic finish built for everyday durability and sleek card management.",
    details: "This premium wallet features 6 card slots, 2 hidden compartments, and a full-length cash pocket. Hand-stitched with waxed nylon thread for superior durability. Dimensions: 11cm x 9cm. Backed by a 1-year craftsmanship warranty.",
    images: [image1, image2, image3, image4, image5] // Swap these with your unique imports for product 2
  },
  {
    id: "3",
    title: "LEO Wallet – Red Edition",
    category: "Men's Wallet",
    oldPrice: "LKR 25,000",
    newPrice: "LKR 22,000",
    description: "Vibrant red leather finish designed to stand out with premium craftsmanship.",
    details: "This premium wallet features 6 card slots, 2 hidden compartments, and a full-length cash pocket. Hand-stitched with waxed nylon thread for superior durability. Dimensions: 11cm x 9cm. Backed by a 1-year craftsmanship warranty.",
    images: [image3, image1, image2, image3, image1]
  },
  {
    id: "4",
    title: "LEO Wallet – Premium Edition 4",
    category: "Men's Wallet",
    oldPrice: "LKR 27,000",
    newPrice: "LKR 24,000",
    description: "Compact design tailored for minimalists who value style and security.",
    details: "This premium wallet features 6 card slots, 2 hidden compartments, and a full-length cash pocket. Hand-stitched with waxed nylon thread for superior durability. Dimensions: 11cm x 9cm. Backed by a 1-year craftsmanship warranty.",
    images: [image1, image3, image2, image1, image3]
  },
  {
    id: "5",
    title: "LEO Wallet – Edition 5",
    category: "Men's Wallet",
    oldPrice: "LKR 24,000",
    newPrice: "LKR 20,500",
    description: "Sleek stitching with multiple compartments for ultimate organization.",
    details: "This premium wallet features 6 card slots, 2 hidden compartments, and a full-length cash pocket. Hand-stitched with waxed nylon thread for superior durability. Dimensions: 11cm x 9cm. Backed by a 1-year craftsmanship warranty.",
    images: [image2, image3, image1, image2, image3]
  },
  {
    id: "6",
    title: "LEO Wallet – Edition 6",
    category: "Men's Wallet",
    oldPrice: "LKR 28,000",
    newPrice: "LKR 25,000",
    description: "The ultimate luxury edition built with heavy-duty genuine leather.",
    details: "This premium wallet features 6 card slots, 2 hidden compartments, and a full-length cash pocket. Hand-stitched with waxed nylon thread for superior durability. Dimensions: 11cm x 9cm. Backed by a 1-year craftsmanship warranty.",
    images: [image3, image2, image1, image3, image2]
  }
];