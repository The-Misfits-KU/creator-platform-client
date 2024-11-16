import React from 'react';
import { Button, Avatar, Card, CardBody } from '@nextui-org/react';
import {
  MessageCircle,
  Repeat2,
  Heart,
  Share,
  MessageSquare,
} from 'lucide-react';

const Cardd = ({ user, handle, job, followerscount, followingcount }: any) => (
  <Card className='bg-purple mb-2 cursor-pointer rounded-none border-b px-12 py-4 text-black shadow-none transition-all'>
    <CardBody className='flex w-full flex-row items-center justify-between gap-8'>
      <Avatar src='/api/placeholder/32/32' className='h-24 w-24' />

      <div className='flex-1'>
        <div className='mb-2 flex items-center gap-4'>
          <span className='text-3xl font-bold'>{user}</span>
          <span className='text-3xl text-default-500'>{handle}</span>
        </div>

        <div className='mb-2 flex items-center gap-4'>
          <span className='text-2xl text-default-500'>{job}</span>
        </div>

        <div className='mb-2 flex items-center gap-4'>
          <span className='text-xl text-default-500'>Followers</span>
          <span className='text-xl text-default-500'>{followerscount}</span>
          <span className='text-xl text-default-500'>Following</span>
          <span className='text-xl text-default-500'>{followingcount}</span>
        </div>

        <Button className='h-9 w-9 rounded-full bg-purple-600/80 text-white shadow-lg backdrop-blur-sm hover:bg-purple-700/80'>
          <MessageSquare className='h-6 w-6' />
        </Button>
      </div>
    </CardBody>
  </Card>
);

export default Cardd;
