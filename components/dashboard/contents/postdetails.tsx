'use client';

import { Avatar, Button, Card, Badge } from '@nextui-org/react';
import { Clock, MessageSquare, Heart, Share2, Plus } from 'lucide-react';
import Image from 'next/image';

export default function Component() {
  return (
    <div className='mx-auto max-w-full p-4 md:p-6'>
      <Card className='border-none shadow-none'>
        <div className='space-y-6 px-0'>
          <div className='space-y-2'>
            <h1 className='text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl'>
              AI Series Part IV: Creating a RAG chatbot with LangChain (NextJS)
            </h1>
            <div className='flex flex-col text-sm text-gray-500 sm:flex-row sm:items-center sm:gap-4'>
              <div className='flex items-center gap-2'>
                <Avatar name='TS' size='sm' src='/placeholder.svg' />
                <span className='font-medium text-foreground'>Tiago Souto</span>
              </div>

              {/* Follow Button */}
              <Button
                className='mt-2 sm:ml-4 sm:mt-0'
                size='sm'
                variant='light'
              >
                Follow
              </Button>
            </div>

            {/* Time read and Date in separate line */}
            <div className='mt-2 flex flex-wrap sm:flex-nowrap sm:gap-2'>
              <div className='flex items-center gap-1'>
                <Clock className='h-4 w-4' />
                <span>8 min read</span>
              </div>
              <span>Â·</span>
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
        <div className='mt-6 px-0'>
          <div className='mb-6 flex flex-wrap items-center gap-2'>
            <Badge color='secondary' variant='flat'>
              LangChain
            </Badge>
            <Badge color='secondary' variant='flat'>
              NextJS
            </Badge>
            <Badge color='secondary' variant='flat'>
              Artificial Intelligence
            </Badge>
            <Badge color='secondary' variant='flat'>
              Software Development
            </Badge>
            <Badge color='secondary' variant='flat'>
              OpenAI
            </Badge>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <Button className='gap-2' size='sm' variant='light'>
                <Heart className='h-4 w-4' />
                <span className='hidden sm:inline'>Like</span>
              </Button>
              <Button className='gap-2' size='sm' variant='light'>
                <MessageSquare className='h-4 w-4' />
                <span className='hidden sm:inline'>Comment</span>
              </Button>
              <Button className='gap-2' size='sm' variant='light'>
                <Share2 className='h-4 w-4' />
                <span className='hidden sm:inline'>Share</span>
              </Button>
            </div>
          </div>
        </div>
      </Card>
      <Button
        isIconOnly
        className='fixed bottom-6 right-6 h-12 w-12 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700'
      >
        <Plus className='h-6 w-6' />
        <span className='sr-only'>New post</span>
      </Button>
    </div>
  );
}
