import { Button, User, Input, Avatar, Card, CardBody } from "@nextui-org/react";
import {
  Search,
  Image as ImageIcon,
  Smile,
  MapPin,
  BarChart2,
  Calendar,
} from "lucide-react";
import Post from "@/components/dashboard/post";

export default function Explore() {
  return (
    <div>
      {/* Posts */}
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
