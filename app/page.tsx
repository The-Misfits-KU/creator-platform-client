'use client';

import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Wallet } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nfts = [
    {
      id: 1,
      title: 'SPACE GIRL',
      image:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-15%20210823-DV8Hej3NQkWMrKG8kjiAxIOnacMgMS.png',
      timeRemaining: '12h:35m:20s',
      highestBid: '5.25',
    },
    {
      id: 2,
      title: 'SPACE GIRL',
      image:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-15%20210823-DV8Hej3NQkWMrKG8kjiAxIOnacMgMS.png',
      timeRemaining: '12h:35m:20s',
      highestBid: '5.25',
    },
    {
      id: 3,
      title: 'SPACE GIRL',
      image:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-15%20210823-DV8Hej3NQkWMrKG8kjiAxIOnacMgMS.png',
      timeRemaining: '12h:35m:20s',
      highestBid: '5.25',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % nfts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + nfts.length) % nfts.length);
  };

  return (
    <div className='relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white'>
      {/* Decorative stars */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            className='absolute h-1 w-1 rounded-full bg-white'
            initial={{ opacity: 0.2 }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className='container mx-auto px-4 py-6'>
        <div className='flex items-center justify-between'>
          <Link className='flex items-center space-x-2' href='/'>
            <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500'>
              <div className='h-6 w-6 rotate-45 transform rounded bg-white' />
            </div>
          </Link>

          <div className='hidden space-x-8 md:flex'>
            <Link
              className='text-white transition-colors hover:text-purple-300'
              href='/'
            >
              Home
            </Link>
            <Link
              className='text-white transition-colors hover:text-purple-300'
              href='/marketplace'
            >
              Marketplace
            </Link>
            <Link
              className='text-white transition-colors hover:text-purple-300'
              href='/about'
            >
              About
            </Link>
          </div>

          <Button
            className='border border-purple-400 bg-purple-600 px-6 text-white'
            endContent={<Wallet className='h-4 w-4' />}
          >
            Connect Wallet
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className='container mx-auto px-4 pb-32 pt-16'>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className='mb-16 text-center'
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='mb-8 text-4xl font-bold tracking-wider md:text-6xl lg:text-7xl'>
            DISCOVER, OR
            <br />
            UPLOAD CREATIONS
          </h1>
          <Button
            className='bg-purple-500 px-8 py-6 text-lg text-white'
            size='lg'
          >
            UPLOAD CREATIONS
          </Button>
        </motion.div>

        {/* Statistics */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className='mb-24 flex justify-center space-x-12 text-center md:space-x-24'
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <p className='text-3xl font-bold md:text-4xl'>9.5K</p>
            <p className='text-sm text-purple-300'>ART WORK</p>
          </div>
          <div>
            <p className='text-3xl font-bold md:text-4xl'>65K</p>
            <p className='text-sm text-purple-300'>ARTIST</p>
          </div>
          <div>
            <p className='text-3xl font-bold md:text-4xl'>90K+</p>
            <p className='text-sm text-purple-300'>AUCTION</p>
          </div>
        </motion.div>

        {/* NFT Carousel */}
        <div className='relative mx-auto max-w-5xl'>
          <div className='flex items-center justify-center gap-4'>
            <button
              aria-label='Previous slide'
              className='absolute left-0 z-10 rounded-lg bg-purple-800/50 p-2 backdrop-blur-sm'
              onClick={prevSlide}
            >
              <ChevronLeft className='h-6 w-6' />
            </button>

            <div className='flex items-center justify-center gap-4 overflow-hidden'>
              {[-1, 0, 1].map((offset) => {
                const index =
                  (currentSlide + offset + nfts.length) % nfts.length;

                return (
                  <motion.div
                    key={nfts[index].id}
                    animate={{ opacity: 1, scale: offset === 0 ? 1.1 : 0.9 }}
                    className={`relative h-96 w-72 overflow-hidden rounded-2xl ${
                      offset === 0 ? 'z-10 scale-110' : 'opacity-60'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className='absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent' />
                    <Image
                      alt={nfts[index].title}
                      className='rounded-2xl'
                      layout='fill'
                      objectFit='cover'
                      src='/placeholder.svg'
                    />
                    <div className='absolute bottom-0 left-0 right-0 p-4 text-white'>
                      <h3 className='mb-2 text-lg font-bold'>
                        {nfts[index].title}
                      </h3>
                      <div className='flex items-center justify-between'>
                        <div>
                          <p className='text-sm text-purple-300'>
                            Remaining Time
                          </p>
                          <p className='font-mono'>
                            {nfts[index].timeRemaining}
                          </p>
                        </div>
                        <div>
                          <p className='text-sm text-purple-300'>Highest Bid</p>
                          <p className='font-mono'>
                            {nfts[index].highestBid} ETH
                          </p>
                        </div>
                      </div>
                      {offset === 0 && (
                        <Button className='mt-4 w-full bg-purple-500 text-white'>
                          PLACE A BID
                        </Button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button
              aria-label='Next slide'
              className='absolute right-0 z-10 rounded-lg bg-purple-800/50 p-2 backdrop-blur-sm'
              onClick={nextSlide}
            >
              <ChevronRight className='h-6 w-6' />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
