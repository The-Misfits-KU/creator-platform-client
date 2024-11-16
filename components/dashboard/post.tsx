import React from 'react';
import { Button, Avatar, Card, CardBody } from '@nextui-org/react';
import { MessageCircle, Repeat2, Heart, Share } from 'lucide-react';

const Post = ({ user, handle, time, content }: any) => (
  <Card className='m-4 cursor-pointer rounded-2xl border-b bg-white text-black transition-all hover:bg-purple-50'>
    <CardBody className='flex flex-row gap-4'>
      <Avatar className='h-12 w-12' src='/api/placeholder/32/32' />
      <div className='flex-1'>
        <div className='flex items-center gap-2'>
          <span className='font-bold'>{user}</span>
          <span className='text-default-500'>{handle}</span>
          <span className='text-default-500'>· {time}</span>
        </div>
        <p className='mt-1'>{content}</p>
        <div className='mt-4 flex max-w-md justify-start gap-4 text-default-500'>
          <Button
            isIconOnly
            className='bg-purple-400 hover:bg-purple-100 hover:text-purple-600'
            size='sm'
            variant='light'
          >
            <MessageCircle size={18} />
          </Button>
          <Button
            isIconOnly
            className='bg-purple-400 hover:bg-green-100 hover:text-green-600'
            size='sm'
            variant='light'
          >
            <Repeat2 size={18} />
          </Button>
          <Button
            isIconOnly
            className='bg-purple-400 hover:bg-red-100 hover:text-red-600'
            size='sm'
            variant='light'
          >
            <Heart size={18} />
          </Button>
          <Button
            isIconOnly
            className='bg-purple-400 hover:bg-blue-100 hover:text-blue-600'
            size='sm'
            variant='light'
          >
            <Share size={18} />
          </Button>
        </div>
      </div>
    </CardBody>
  </Card>
);

export default Post;
