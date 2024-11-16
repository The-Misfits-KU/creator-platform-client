import Post from '@/components/dashboard/post';

export default function Explore() {
  return (
    <div>
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
