'use client';

import Cardd from '@/components/dashboard/cardd';
import Post from '@/components/dashboard/post';
import { useActiveAccount, useReadContract } from 'thirdweb/react';
import { contract } from '@/utils/contracts';
import { useUserContext } from '@/context/UserContext';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Chat from '@/components/ai/chat';

export default function ProfilePage() {
  const account = useActiveAccount();
  const { id } = useParams();
  const { walletUser, isUserLoading } = useUserContext();
  const router = useRouter();

  const { data: posts, isPending: isPostsPending } = useReadContract({
    contract,
    method:
      'function getPostByUser(address _user) view returns ((string title, string body, string files, string featuredImage, address userId, uint256 id)[])',
    params: [id as string],
  });

  const { data: user, isPending: isUserPending } = useReadContract({
    contract,
    method:
      'function getUser(address _user) view returns ((address wallet, string name, string bio, address[] followers, address[] following))',
    params: [id as string],
  });

  if (isUserLoading) return <div>Loading...</div>;
  console.log(walletUser);

  return (
    <div className=''>
      <div className='sticky top-0 p-4 text-black'>
        <h1 className='text-xl font-bold'>Profile</h1>
      </div>
      {/* Posts */}

      <Cardd
        followerscount={user?.followers.length}
        followingcount={user?.following.length}
        handle={user?.userId}
        bio={user?.bio}
        user={user?.name}
        walletUser={walletUser}
      />
      <Chat postId={id as string}/>
      <p className='flex justify-center mt-1 text-xl text-black'>Posts</p>

      <div>
        {posts?.map((post: any) => (
          <Post
            title={post.title}
            content={post.body}
            handle={walletUser?.userId}
            time='3h'
            user={walletUser?.name}
          />
        ))}
      </div>
    </div>
  );
}
