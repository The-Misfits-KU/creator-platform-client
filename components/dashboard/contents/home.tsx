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

export default function Home() {
  return (
    <div>
      <div className="border-b p-4 bg-white rounded-2xl m-4">
        <div className="flex gap-4">
          <Avatar src="/api/placeholder/48/48" className="w-12 h-12" />
          <div className="flex-1">
            <Input
              placeholder="What's on your mind?"
              variant="bordered"
              classNames={{
                input: "bg-transparent",
                inputWrapper: "bg-transparent",
              }}
            />
            <div className="flex justify-between mt-4">
              <div className="flex gap-2">
                <Button isIconOnly variant="light" size="sm">
                  <ImageIcon size={20} className="text-purple-500" />
                </Button>
                <Button isIconOnly variant="light" size="sm">
                  <BarChart2 size={20} className="text-purple-500" />
                </Button>
                <Button isIconOnly variant="light" size="sm">
                  <Smile size={20} className="text-purple-500" />
                </Button>
                <Button isIconOnly variant="light" size="sm">
                  <Calendar size={20} className="text-purple-500" />
                </Button>
                <Button isIconOnly variant="light" size="sm">
                  <MapPin size={20} className="text-purple-500" />
                </Button>
              </div>
              <Button
                color="primary"
                size="sm"
                className="bg-purple-600 text-white"
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Posts */}
      <div className="p-4 m-4 text-gray-500 items-center justify-center flex">Nothing to see here.</div>
    </div>
  );
}
