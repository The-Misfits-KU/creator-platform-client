'use client';

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string }) => Promise<string[]>;
      isMetaMask?: boolean;
    };
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
  Card,
} from '@nextui-org/react';

import { motion } from 'framer-motion';
import { Wallet2 } from 'lucide-react';

// You would need to add these SVG files to your project
const Character1 = () => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      rotate: [-2, 2, -2],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className='h-64 w-64'
  >
    <svg viewBox='0 0 200 200' className='h-full w-full'>
      {/* Simple character shape for example */}
      <circle cx='100' cy='70' r='50' fill='#9C27B0' />
      <rect x='85' y='120' width='30' height='60' fill='#9C27B0' />
    </svg>
  </motion.div>
);

const Character2 = () => (
  <motion.div
    animate={{
      y: [0, 20, 0],
      rotate: [2, -2, 2],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className='h-64 w-64'
  >
    <svg viewBox='0 0 200 200' className='h-full w-full'>
      {/* Simple character shape for example */}
      <circle cx='100' cy='70' r='50' fill='#2196F3' />
      <rect x='85' y='120' width='30' height='60' fill='#2196F3' />
    </svg>
  </motion.div>
);

export default function DigitalMuseum() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleWalletConnect = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setIsWalletConnected(true);
        console.log('Wallet connected:', accounts[0]);
      } else {
        alert('Please install MetaMask!');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100'>
      {/* Navbar */}
      <Navbar
        className='border-b border-white/20 bg-white/30 backdrop-blur-md'
        maxWidth='full'
      >
        <NavbarBrand>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className='text-2xl font-bold text-purple-800'
          >
            CryptoMuseum
          </motion.div>
        </NavbarBrand>
        <NavbarContent className='hidden gap-4 sm:flex' justify='center'>
          <NavbarItem>
            <Link href='#' className='text-purple-800'>
              Gallery
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='#' className='text-purple-800'>
              Artists
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='#' className='text-purple-800'>
              Collections
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end'>
          <NavbarItem>
            <Button
              className='bg-purple-600/80 text-white backdrop-blur-sm hover:bg-purple-700/80'
              variant='flat'
              startContent={<Wallet2 size={20} />}
              onClick={handleWalletConnect}
            >
              {isWalletConnected ? 'Connected' : 'Connect Wallet'}
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Hero Section */}
      <main className='container mx-auto px-6 py-12'>
        <div className='flex flex-col items-center justify-between gap-12 lg:flex-row'>
          {/* Left side content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='flex-1 space-y-6'
          >
            <h1 className='text-5xl font-bold text-purple-800'>
              Digital Art Meets Blockchain
            </h1>
            <p className='text-xl text-gray-700'>
              Experience the future of art curation in our decentralized digital
              museum. Own, showcase, and trade unique digital masterpieces.
            </p>
            <div className='flex gap-4'>
              <Button
                size='lg'
                className='bg-purple-600/80 text-white backdrop-blur-sm hover:bg-purple-700/80'
              >
                Explore Gallery
              </Button>
              <Button
                size='lg'
                variant='bordered'
                className='border-purple-600/50 text-purple-800'
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
            className='relative h-[500px] flex-1'
          >
            <div className='absolute left-0 top-0'>
              <Character1 />
            </div>
            <div className='absolute bottom-0 right-0'>
              <Character2 />
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='absolute right-1/3 top-1/3'
            >
              <Card className='h-64 w-48 border border-white/30 bg-white/20 backdrop-blur-lg'>
                <div className='p-4'>
                  <div className='mb-4 h-32 w-full rounded-lg bg-purple-400/20' />
                  <div className='space-y-2'>
                    <div className='h-4 w-3/4 rounded bg-purple-400/20' />
                    <div className='h-4 w-1/2 rounded bg-purple-400/20' />
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className='mt-24 grid gap-8 md:grid-cols-3'>
          {[
            {
              title: 'Decentralized Curation',
              description:
                'Community-driven art curation powered by blockchain technology.',
            },
            {
              title: 'Secure Ownership',
              description:
                'NFT-backed authenticity and proof of ownership for all artworks.',
            },
            {
              title: 'Virtual Exhibitions',
              description:
                'Immersive digital exhibitions featuring global artists.',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className='border border-white/30 bg-white/20 p-6 backdrop-blur-lg'>
                <h3 className='mb-2 text-xl font-semibold text-purple-800'>
                  {feature.title}
                </h3>
                <p className='text-gray-700'>{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
