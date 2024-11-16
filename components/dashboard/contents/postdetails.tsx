'use client';

import { Avatar, Button, Card, Badge } from '@nextui-org/react';
import { Clock, MessageSquare, Heart, Share2, Plus } from 'lucide-react';
import Image from 'next/image';

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4 md:p-6">
      <Card className="max-w-full mx-auto backdrop-blur-md bg-white/30 shadow-lg border border-white/20">
        <div className="space-y-6 p-4 md:p-6">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-black">
              AI Series Part IV: Creating a RAG chatbot with LangChain (NextJS)
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Avatar src="/placeholder.svg" name="TS" size="sm" />
                <span className="font-medium text-gray-500">Tiago Souto</span>
              </div>
              <Button 
                variant="flat" 
                size="sm" 
                className="mt-2 sm:mt-0 sm:ml-4 bg-purple/60 backdrop-blur-sm hover:bg-white/30 text-gray-600"
              >
                Follow
              </Button>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap sm:gap-2 mt-2 text-gray-600">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
              <span>·</span>
              <span>Apr 7, 2024</span>
            </div>
          </div>
          
          <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg">
            <Image
              fill
              priority
              alt='Article cover'
              className='object-cover'
              src='/placeholder.svg?height=400&width=800'
            />
          </div>
        </div>
        
        <div className="px-4 md:px-6 pb-4 md:pb-6">
          <div className="flex flex-wrap items-center gap-2 mb-6 text-purple-600">
            {['LangChain', 'NextJS', 'Artificial Intelligence', 'Software Development', 'OpenAI'].map((tag) => (
              <Badge 
                key={tag} 
                className="bg-purple/20 backdrop-blur-sm text-black"
                variant="flat"
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {[
                { icon: <Heart className="w-4 h-4 text-black" />, label: 'Like' },
                { icon: <MessageSquare className="w-4 h-4 text-black" />, label: 'Comment' },
                { icon: <Share2 className="w-4 h-4 text-black" />, label: 'Share' }
              ].map(({ icon, label }) => (
                <Button 
                  key={label}
                  variant="light" 
                  size="sm" 
                  className="gap-2 hover:bg-white/20"
                >
                  {icon}
                  <span className="hidden sm:inline text-black" >{label}</span>
                </Button>
              ))}
            </div>
            <Button
        isIconOnly
        className="fixed bottom-6 right-6 rounded-full w-12 h-12 bg-purple-600/80 backdrop-blur-sm hover:bg-purple-700/80 text-white shadow-lg"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="sr-only">New post</span>
      </Button>
          </div>
        </div>
      </Card>
      
    
    </div>
  )
}

