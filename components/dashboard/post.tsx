import React from 'react';
import { Button, Avatar, Card, CardBody } from '@nextui-org/react';
import { MessageCircle, Repeat2, Heart, Share } from 'lucide-react';

const Post = ({ user, handle, time, content, engagement }: any) => (
  <Card className="bg-white hover:bg-purple-50 cursor-pointer transition-all border-b rounded-2xl m-4 text-black bg-gradient-to-br from-purple-100 to-blue-100">
    <CardBody className="flex flex-row gap-4">
      <Avatar src="/api/placeholder/32/32" className="w-12 h-12" />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-bold">{user}</span>
          <span className="text-default-500">{handle}</span>
          <span className="text-default-500">· {time}</span>
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
