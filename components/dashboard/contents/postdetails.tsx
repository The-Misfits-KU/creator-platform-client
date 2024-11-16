'use client';

import { Avatar, Button, Card, Badge } from '@nextui-org/react';
import { Clock, MessageSquare, Heart, Share2, Plus } from 'lucide-react';
import Image from 'next/image';

export default function Component() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4 md:p-6'>
      <Card className='mx-auto max-w-full border border-white/20 bg-white/30 shadow-lg backdrop-blur-md'>
        <div className='space-y-6 p-4 md:p-6'>
          <div className='space-y-2'>
            <h1 className='text-2xl font-bold tracking-tight text-black md:text-3xl lg:text-4xl'>
              AI Series Part IV: Creating a RAG chatbot with LangChain (NextJS)
            </h1>
            <div className='flex flex-col text-sm sm:flex-row sm:items-center sm:gap-4'>
              <div className='flex items-center gap-2'>
                <Avatar src='/placeholder.svg' name='TS' size='sm' />
                <span className='font-medium text-gray-500'>Tiago Souto</span>
              </div>
              <Button
                variant='flat'
                size='sm'
                className='bg-purple/60 mt-2 text-gray-600 backdrop-blur-sm hover:bg-white/30 sm:ml-4 sm:mt-0'
              >
                Follow
              </Button>
            </div>

            <div className='mt-2 flex flex-wrap text-gray-600 sm:flex-nowrap sm:gap-2'>
              <div className='flex items-center gap-1'>
                <Clock className='h-4 w-4' />
                <span>8 min read</span>
              </div>
              <span>·</span>
              <span>Apr 7, 2024</span>
            </div>
          </div>

          <div className='relative aspect-[2/1] w-full overflow-hidden rounded-lg'>
            <Image
              fill
              priority
              alt='Article cover'
              className='object-cover'
              src='/placeholder.svg?height=400&width=800'
            />
          </div>
        </div>

        <div className='px-4 pb-4 md:px-6 md:pb-6'>
          <div className='mb-6 flex flex-wrap items-center gap-2 text-purple-600'>
            {[
              'LangChain',
              'NextJS',
              'Artificial Intelligence',
              'Software Development',
              'OpenAI',
            ].map((tag) => (
              <Badge
                key={tag}
                className='bg-purple/20 text-black backdrop-blur-sm'
                variant='flat'
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              {[
                {
                  icon: <Heart className='h-4 w-4 text-black' />,
                  label: 'Like',
                },
                {
                  icon: <MessageSquare className='h-4 w-4 text-black' />,
                  label: 'Comment',
                },
                {
                  icon: <Share2 className='h-4 w-4 text-black' />,
                  label: 'Share',
                },
              ].map(({ icon, label }) => (
                <Button
                  key={label}
                  variant='light'
                  size='sm'
                  className='gap-2 hover:bg-white/20'
                >
                  {icon}
                  <span className='hidden text-black sm:inline'>{label}</span>
                </Button>
              ))}
            </div>
            <Button
              isIconOnly
              className='fixed bottom-6 right-6 h-12 w-12 rounded-full bg-purple-600/80 text-white shadow-lg backdrop-blur-sm hover:bg-purple-700/80'
            >
              <MessageSquare className='h-6 w-6' />
              <span className='sr-only'>New post</span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
