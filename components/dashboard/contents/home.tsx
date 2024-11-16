import { Button, Input, Avatar } from '@nextui-org/react';
import {
  Image as ImageIcon,
  Smile,
  MapPin,
  BarChart2,
  Calendar,
} from 'lucide-react';
import { useReadContract, useActiveAccount } from 'thirdweb/react';
import { Spinner } from '@nextui-org/react';
import { contract } from '@/utils/contracts';
import Post from '@/components/dashboard/post';

export default function Home() {
  const account = useActiveAccount();
  const { data: feed, isPending: isFeedPending } = useReadContract({
    contract,
    method:
      'function getUserFeed(address _user) view returns ((string title, string body, string files, string featuredImage, address userId, uint256 id)[])',
    params: [account?.address as string],
  });
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
      {isFeedPending && (
        <div className='m-4 flex items-center justify-center p-4 text-black'>
          <Spinner />
        </div>
      )}
      {feed &&
        feed.map((post) => (
          // <div key={post.id}>
          //   <h2>{post.title}</h2>
          //   <p>{post.body}</p>
          //   <img src={post.featuredImage} alt={post.title} />
          // </div>
          <Post key={post.id} user={post.title} content={post.body}/>
        ))}
      {!isFeedPending && feed?.length == 0 && (
        <div className='m-4 flex items-center justify-center p-4 text-black'>
          No Posts Found.
        </div>
      )}
    </div>
  );
}
