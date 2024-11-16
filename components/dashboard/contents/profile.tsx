import { Button, User, Input, Avatar, Card, CardBody } from "@nextui-org/react";
import {
  Search,
  Image as ImageIcon,
  Smile,
  MapPin,
  BarChart2,
  Calendar,
} from "lucide-react";
import Cardd from "@/components/dashboard/cardd";
import Post from "@/components/dashboard/post";


export default function Profile() {
  return (
    <div>
      {/* Posts */}
      <Cardd
        user="Alex Johnson"
        handle="@alexj"
        job="Software Engineer"
        followerscount='100'
        followingcount='200'
      />
      <p className="flex justify-center mt-1 text-purple-400 text-xl">Posts</p>

       <Post
        user="Alex Johnson"
        handle="@alexj"
        time="3h"
        content="Just launched our new product! 🚀 Check it out and let me know what you think!"
      />
      <Post
        user="Sarah Miller"
        handle="@sarahm"
        time="5h"
        content="The sunrise this morning was absolutely breathtaking! Nature never ceases to amaze me. 🌅"
      />
    </div>
  );
}
