import { Button, User, Input, Card, CardBody } from '@nextui-org/react';
import { Search } from 'lucide-react';

export default function RightSidebar() {
  return (
    <div className='sticky top-0 right-0 flex-1 w-full p-4 text-black bg-white'>
      <div>
        <div className='bg-white'>
          <Input
            className='mb-4'
            classNames={{
              input: 'bg-white',
              inputWrapper: 'bg-white border-2 hover:border-purple-500',
            }}
            placeholder='Search'
            startContent={<Search size={18} />}
          />
        </div>

        <Card className='p-4 text-black bg-white border border-gray-300'>
          <CardBody>
            <h2 className='mb-4 text-xl font-bold'>Who to follow</h2>
            <div className='space-y-4'>
              {/* Suggested users */}
              {['John Doe', 'Jane Smith', 'Bob Wilson'].map((name) => (
                <div key={name} className='flex items-center justify-between'>
                  <User
                    avatarProps={{
                      src: '/api/placeholder/32/32',
                    }}
                    description='@username'
                    name={name}
                  />
                  <Button className='text-white bg-purple-600' size='sm'>
                    Follow
                  </Button>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
