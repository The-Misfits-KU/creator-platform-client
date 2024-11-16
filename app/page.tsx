'use client';

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string }) => Promise<string[]>;
      isMetaMask?: boolean;
    }
  }
}
import React, { useState } from 'react';
import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Button, 
  Link,
  Card
} from "@nextui-org/react";


import { motion } from "framer-motion";
import { Wallet2 } from 'lucide-react';

// You would need to add these SVG files to your project
const Character1 = () => (
  <motion.div
    animate={{ 
      y: [0, -20, 0],
      rotate: [-2, 2, -2]
    }}
    transition={{ 
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="w-64 h-64"
  >
    <svg 
      viewBox="0 0 200 200" 
      className="w-full h-full"
    >
      {/* Simple character shape for example */}
      <circle cx="100" cy="70" r="50" fill="#9C27B0" />
      <rect x="85" y="120" width="30" height="60" fill="#9C27B0" />
    </svg>
  </motion.div>
);

const Character2 = () => (
  <motion.div
    animate={{ 
      y: [0, 20, 0],
      rotate: [2, -2, 2]
    }}
    transition={{ 
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="w-64 h-64"
  >
    <svg 
      viewBox="0 0 200 200" 
      className="w-full h-full"
    >
      {/* Simple character shape for example */}
      <circle cx="100" cy="70" r="50" fill="#2196F3" />
      <rect x="85" y="120" width="30" height="60" fill="#2196F3" />
    </svg>
  </motion.div>
);

export default function DigitalMuseum() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleWalletConnect = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        });
        setIsWalletConnected(true);
        console.log("Wallet connected:", accounts[0]);
      } else {
        alert("Please install MetaMask!");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      {/* Navbar */}
      <Navbar 
        className="backdrop-blur-md bg-white/30 border-b border-white/20"
        maxWidth="full"
      >
        <NavbarBrand>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-2xl text-purple-800"
          >
            CryptoMuseum
          </motion.div>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link href="#" className="text-purple-800">
              Gallery
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="text-purple-800">
              Artists
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="text-purple-800">
              Collections
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              className="bg-purple-600/80 backdrop-blur-sm text-white hover:bg-purple-700/80"
              variant="flat"
              startContent={<Wallet2 size={20} />}
              onClick={handleWalletConnect}
            >
              {isWalletConnected ? "Connected" : "Connect Wallet"}
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <h1 className="text-5xl font-bold text-purple-800">
              Digital Art Meets Blockchain
            </h1>
            <p className="text-xl text-gray-700">
              Experience the future of art curation in our decentralized digital museum. 
              Own, showcase, and trade unique digital masterpieces.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-purple-600/80 backdrop-blur-sm text-white hover:bg-purple-700/80"
              >
                Explore Gallery
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="border-purple-600/50 text-purple-800"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Right side animated characters */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative h-[500px]"
          >
            <div className="absolute top-0 left-0">
              <Character1 />
            </div>
            <div className="absolute bottom-0 right-0">
              <Character2 />
            </div>
            
            {/* Floating cards */}
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotate: [-5, 5, -5]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/3 right-1/3"
            >
              <Card className="w-48 h-64 backdrop-blur-lg bg-white/20 border border-white/30">
                <div className="p-4">
                  <div className="w-full h-32 bg-purple-400/20 rounded-lg mb-4" />
                  <div className="space-y-2">
                    <div className="h-4 w-3/4 bg-purple-400/20 rounded" />
                    <div className="h-4 w-1/2 bg-purple-400/20 rounded" />
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {[
            {
              title: "Decentralized Curation",
              description: "Community-driven art curation powered by blockchain technology."
            },
            {
              title: "Secure Ownership",
              description: "NFT-backed authenticity and proof of ownership for all artworks."
            },
            {
              title: "Virtual Exhibitions",
              description: "Immersive digital exhibitions featuring global artists."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 backdrop-blur-lg bg-white/20 border border-white/30">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}















// import { Button } from "@nextui-org/react"
// import { motion } from "framer-motion"
// import { ChevronLeft, ChevronRight, Wallet } from 'lucide-react'
// import Image from "next/image"
// import Link from "next/link"
// import { useState } from "react"

// export default function Home() {
//   const [currentSlide, setCurrentSlide] = useState(0)

//   const nfts = [
//     {
//       id: 1,
//       title: "SPACE GIRL",
//       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-15%20210823-DV8Hej3NQkWMrKG8kjiAxIOnacMgMS.png",
//       timeRemaining: "12h:35m:20s",
//       highestBid: "5.25"
//     },
//     {
//       id: 2,
//       title: "SPACE GIRL",
//       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-15%20210823-DV8Hej3NQkWMrKG8kjiAxIOnacMgMS.png",
//       timeRemaining: "12h:35m:20s",
//       highestBid: "5.25"
//     },
//     {
//       id: 3,
//       title: "SPACE GIRL",
//       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-15%20210823-DV8Hej3NQkWMrKG8kjiAxIOnacMgMS.png",
//       timeRemaining: "12h:35m:20s",
//       highestBid: "5.25"
//     }
//   ]

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % nfts.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + nfts.length) % nfts.length)
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
//       {/* Decorative stars */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-white rounded-full"
//             initial={{ opacity: 0.2 }}
//             animate={{
//               opacity: [0.2, 0.8, 0.2],
//               scale: [1, 1.2, 1],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               delay: i * 0.2,
//             }}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Navigation */}
//       <nav className="container mx-auto px-4 py-6">
//         <div className="flex justify-between items-center">
//           <Link href="/" className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
//               <div className="w-6 h-6 bg-white rounded transform rotate-45" />
//             </div>
//           </Link>
          
//           <div className="hidden md:flex space-x-8">
//             <Link href="/" className="text-white hover:text-purple-300 transition-colors">
//               Home
//             </Link>
//             <Link href="/marketplace" className="text-white hover:text-purple-300 transition-colors">
//               Marketplace
//             </Link>
//             <Link href="/about" className="text-white hover:text-purple-300 transition-colors">
//               About
//             </Link>
//           </div>

//           <Button
//             className="bg-purple-600 text-white border border-purple-400 px-6"
//             endContent={<Wallet className="w-4 h-4" />}
//           >
//             Connect Wallet
//           </Button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <main className="container mx-auto px-4 pt-16 pb-32">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-8">
//             DISCOVER, OR
//             <br />
//             UPLOAD CREATIONS
//           </h1>
//           <Button
//             size="lg"
//             className="bg-purple-500 text-white px-8 py-6 text-lg"
//           >
//             UPLOAD CREATIONS
//           </Button>
//         </motion.div>

//         {/* Statistics */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="flex justify-center space-x-12 md:space-x-24 mb-24 text-center"
//         >
//           <div>
//             <p className="text-3xl md:text-4xl font-bold">9.5K</p>
//             <p className="text-purple-300 text-sm">ART WORK</p>
//           </div>
//           <div>
//             <p className="text-3xl md:text-4xl font-bold">65K</p>
//             <p className="text-purple-300 text-sm">ARTIST</p>
//           </div>
//           <div>
//             <p className="text-3xl md:text-4xl font-bold">90K+</p>
//             <p className="text-purple-300 text-sm">AUCTION</p>
//           </div>
//         </motion.div>

//         {/* NFT Carousel */}
//         <div className="relative max-w-5xl mx-auto">
//           <div className="flex justify-center items-center gap-4">
//             <button
//               onClick={prevSlide}
//               className="absolute left-0 z-10 p-2 bg-purple-800/50 rounded-lg backdrop-blur-sm"
//               aria-label="Previous slide"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>
            
//             <div className="flex justify-center items-center gap-4 overflow-hidden">
//               {[-1, 0, 1].map((offset) => {
//                 const index = (currentSlide + offset + nfts.length) % nfts.length
//                 return (
//                   <motion.div
//                     key={nfts[index].id}
//                     className={`relative w-72 h-96 rounded-2xl overflow-hidden ${
//                       offset === 0 ? 'z-10 scale-110' : 'opacity-60'
//                     }`}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: offset === 0 ? 1.1 : 0.9 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent" />
//                     <Image
//                       src="/placeholder.svg"
//                       alt={nfts[index].title}
//                       layout="fill"
//                       objectFit="cover"
//                       className="rounded-2xl"
//                     />
//                     <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
//                       <h3 className="text-lg font-bold mb-2">{nfts[index].title}</h3>
//                       <div className="flex justify-between items-center">
//                         <div>
//                           <p className="text-sm text-purple-300">Remaining Time</p>
//                           <p className="font-mono">{nfts[index].timeRemaining}</p>
//                         </div>
//                         <div>
//                           <p className="text-sm text-purple-300">Highest Bid</p>
//                           <p className="font-mono">{nfts[index].highestBid} ETH</p>
//                         </div>
//                       </div>
//                       {offset === 0 && (
//                         <Button
//                           className="w-full mt-4 bg-purple-500 text-white"
//                         >
//                           PLACE A BID
//                         </Button>
//                       )}
//                     </div>
//                   </motion.div>
//                 )
//               })}
//             </div>

//             <button
//               onClick={nextSlide}
//               className="absolute right-0 z-10 p-2 bg-purple-800/50 rounded-lg backdrop-blur-sm"
//               aria-label="Next slide"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }