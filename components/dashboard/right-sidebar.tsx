import { Button, User, Input, Card, CardBody } from '@nextui-org/react';
import { Search } from 'lucide-react';

export default function RightSidebar() {
  return (
    <div className='bg-purple-30 col-span-2 m-4 text-black'>
      <Card className='mb-4 bg-white'>
        <CardBody>
          <Input
            className='mb-4'
            classNames={{
              input: 'bg-white',
              inputWrapper: 'bg-white border-2 hover:border-purple-500',
            }}
            placeholder='Search'
            startContent={<Search size={18} />}
          />
        </CardBody>
      </Card>

      <Card className='mb-4 bg-white'>
        <CardBody>
          <h2 className='mb-4 text-xl font-bold'>Trending Now</h2>
          <div className='space-y-4'>
            {/* Trending items */}
            {['Technology', 'Sports', 'Entertainment'].map((topic) => (
              <div
                key={topic}
                className='cursor-pointer rounded-lg p-2 hover:bg-purple-50'
              >
                <p className='text-sm text-gray-500'>Trending in {topic}</p>
                <p className='font-semibold'>#TrendingTopic</p>
                <p className='text-sm text-gray-500'>10.5K posts</p>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      <Card className='bg-white'>
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
                <Button className='bg-purple-600 text-white' size='sm'>
                  Follow
                </Button>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
