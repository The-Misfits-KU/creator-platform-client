'use client'

import { Button } from "@nextui-org/react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Wallet } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nfts = [
    {
      id: 1,
      title: "SPACE GIRL",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-15%20210823-DV8Hej3NQkWMrKG8kjiAxIOnacMgMS.png",
      timeRemaining: "12h:35m:20s",
      highestBid: "5.25"
    },
    {
      id: 2,
      title: "SPACE GIRL",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-15%20210823-DV8Hej3NQkWMrKG8kjiAxIOnacMgMS.png",
      timeRemaining: "12h:35m:20s",
      highestBid: "5.25"
    },
    {
      id: 3,
      title: "SPACE GIRL",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-15%20210823-DV8Hej3NQkWMrKG8kjiAxIOnacMgMS.png",
      timeRemaining: "12h:35m:20s",
      highestBid: "5.25"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % nfts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + nfts.length) % nfts.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ opacity: 0.2 }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded transform rotate-45" />
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-purple-300 transition-colors">
              Home
            </Link>
            <Link href="/marketplace" className="text-white hover:text-purple-300 transition-colors">
              Marketplace
            </Link>
            <Link href="/about" className="text-white hover:text-purple-300 transition-colors">
              About
            </Link>
          </div>

          <Button
            className="bg-purple-600 text-white border border-purple-400 px-6"
            endContent={<Wallet className="w-4 h-4" />}
          >
            Connect Wallet
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-16 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-8">
            DISCOVER, OR
            <br />
            UPLOAD CREATIONS
          </h1>
          <Button
            size="lg"
            className="bg-purple-500 text-white px-8 py-6 text-lg"
          >
            UPLOAD CREATIONS
          </Button>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center space-x-12 md:space-x-24 mb-24 text-center"
        >
          <div>
            <p className="text-3xl md:text-4xl font-bold">9.5K</p>
            <p className="text-purple-300 text-sm">ART WORK</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold">65K</p>
            <p className="text-purple-300 text-sm">ARTIST</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold">90K+</p>
            <p className="text-purple-300 text-sm">AUCTION</p>
          </div>
        </motion.div>

        {/* NFT Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 bg-purple-800/50 rounded-lg backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex justify-center items-center gap-4 overflow-hidden">
              {[-1, 0, 1].map((offset) => {
                const index = (currentSlide + offset + nfts.length) % nfts.length
                return (
                  <motion.div
                    key={nfts[index].id}
                    className={`relative w-72 h-96 rounded-2xl overflow-hidden ${
                      offset === 0 ? 'z-10 scale-110' : 'opacity-60'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: offset === 0 ? 1.1 : 0.9 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent" />
                    <Image
                      src="/placeholder.svg"
                      alt={nfts[index].title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg font-bold mb-2">{nfts[index].title}</h3>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-purple-300">Remaining Time</p>
                          <p className="font-mono">{nfts[index].timeRemaining}</p>
                        </div>
                        <div>
                          <p className="text-sm text-purple-300">Highest Bid</p>
                          <p className="font-mono">{nfts[index].highestBid} ETH</p>
                        </div>
                      </div>
                      {offset === 0 && (
                        <Button
                          className="w-full mt-4 bg-purple-500 text-white"
                        >
                          PLACE A BID
                        </Button>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 p-2 bg-purple-800/50 rounded-lg backdrop-blur-sm"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}