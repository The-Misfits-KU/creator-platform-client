import { Button, Input, Avatar } from '@nextui-org/react';
import {
  Image as ImageIcon,
  Smile,
  MapPin,
  BarChart2,
  Calendar,
} from 'lucide-react';

export default function Home() {
  return (
    <div>
      <div className='m-4 rounded-2xl border-b bg-white p-4'>
        <div className='flex gap-4'>
          <Avatar className='h-12 w-12' src='/api/placeholder/48/48' />
          <div className='flex-1'>
            <Input
              classNames={{
                input: 'bg-transparent',
                inputWrapper: 'bg-transparent',
              }}
              placeholder="What's on your mind?"
              variant='bordered'
            />
            <div className='mt-4 flex justify-between'>
              <div className='flex gap-2'>
                <Button isIconOnly size='sm' variant='light'>
                  <ImageIcon className='text-purple-500' size={20} />
                </Button>
                <Button isIconOnly size='sm' variant='light'>
                  <BarChart2 className='text-purple-500' size={20} />
                </Button>
                <Button isIconOnly size='sm' variant='light'>
                  <Smile className='text-purple-500' size={20} />
                </Button>
                <Button isIconOnly size='sm' variant='light'>
                  <Calendar className='text-purple-500' size={20} />
                </Button>
                <Button isIconOnly size='sm' variant='light'>
                  <MapPin className='text-purple-500' size={20} />
                </Button>
              </div>
              <Button
                className='bg-purple-600 text-white'
                color='primary'
                size='sm'
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Posts */}
      <div className='m-4 flex items-center justify-center p-4 text-gray-500'>
        Nothing to see here.
      </div>
    </div>
  );
}
