import React from 'react';
import { Avatar, Card, CardBody } from '@nextui-org/react';

const Cardd = ({ user, handle, job, followerscount, followingcount }: any) => (
  <Card className='bg-purple mb-2 cursor-pointer rounded-none border-b px-12 py-4 text-black shadow-none transition-all'>
    <CardBody className='flex w-full flex-row items-center justify-center gap-4'>
      <div className='flex-1'>
        <div className='flex items-center gap-2'>
          <span className='font-bold'>{user}</span>
          <span className='text-default-500'>{handle}</span>
          <br />
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-center text-default-500'>{job}</span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-center text-default-500'>Followers</span>
          <span className='text-center text-default-500'>{followerscount}</span>
          <span className='text-center text-default-500'>Followers</span>

          <span className='text-center text-default-500'>{followingcount}</span>
        </div>
      </div>
      <Avatar className='h-24 w-24' src='/api/placeholder/32/32' />
    </CardBody>
  </Card>
);

export default Cardd;
