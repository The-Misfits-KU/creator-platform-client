import Post from '@/components/dashboard/post';

export default function Explore() {
  return (
    <div className='col-span-8 border-x'>
      <div className='sticky top-0 border-b bg-white/80 p-4 text-black backdrop-blur-md'>
        <h1 className='text-xl font-bold'>Explore</h1>
      </div>
      {/* Posts */}
      <Post
        content='Just launched our new product! 🚀 Check it out and let me know what you think!'
        handle='@alexj'
        time='3h'
        user='Alex Johnson'
      />
      <Post
        content='The sunrise this morning was absolutely breathtaking! Nature never ceases to amaze me. 🌅'
        handle='@sarahm'
        time='5h'
        user='Sarah Miller'
      />
    </div>
  );
}
