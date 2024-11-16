// app/page.tsx

"use client";

import React, { useState } from "react";
import {
  Button,
  User,
  Input,
  Avatar,
  Card,
  CardBody,
  Tooltip,
} from "@nextui-org/react";
import {
  Home,
  Search,
  Bell,
  Mail,
  Bookmark,
  Users,
  UserCircle,
  MoreHorizontal,
  Image as ImageIcon,
  Smile,
  MapPin,
  BarChart2,
  Calendar,
  Repeat2,
  Heart,
  Share,
  Menu,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const SidebarItem = ({
  icon: Icon,
  label,
  active = false,
  collapsed,
}: {
  icon: any;
  label: string;
  active?: boolean;
  collapsed: boolean;
}) => (
  <Tooltip content={label} placement="right" isDisabled={!collapsed}>
    <Button
      className={`w-full justify-start gap-4 p-4 ${
        active ? "bg-purple-100 text-purple-600" : ""
      }`}
      variant="light"
      startContent={<Icon size={24} className={active ? "text-purple-600" : ""} />}
    >
      <span className={`text-lg ${collapsed ? "hidden" : "block"}`}>{label}</span>
    </Button>
  </Tooltip>
);

const Tweet = ({ user, handle, time, content }: any) => (
  <Card className="bg-white hover:bg-purple-50 cursor-pointer transition-all border-b rounded-none shadow-sm">
    <CardBody className="flex flex-row gap-4">
      <Avatar src="/api/placeholder/32/32" className="w-12 h-12" />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-bold">{user}</span>
          <span className="text-default-500">{handle}</span>
          <span className="text-default-500">· {time}</span>
        </div>
        <p className="mt-1">{content}</p>
        <div className="flex justify-between mt-4 text-default-500 max-w-md">
          <Button isIconOnly variant="light" size="sm" className="hover:text-purple-600 hover:bg-purple-100">
            <MessageCircle size={18} />
          </Button>
          <Button isIconOnly variant="light" size="sm" className="hover:text-green-600 hover:bg-green-100">
            <Repeat2 size={18} />
          </Button>
          <Button isIconOnly variant="light" size="sm" className="hover:text-red-600 hover:bg-red-100">
            <Heart size={18} />
          </Button>
          <Button isIconOnly variant="light" size="sm" className="hover:text-blue-600 hover:bg-blue-100">
            <Share size={18} />
          </Button>
        </div>
      </div>
    </CardBody>
  </Card>
);

export default function HomePage() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-white">
      <div className="grid grid-cols-12 h-screen">
        {/* Collapsible Sidebar */}
        <div className={`${collapsed ? "col-span-1" : "col-span-2"} bg-white shadow-lg transition-all duration-300 relative`}>
          <Button
            isIconOnly
            variant="light"
            className="absolute -right-3 top-6 z-50 bg-white shadow-lg rounded-full"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </Button>

          <div className="flex flex-col gap-2 p-4">
            <div className="p-2">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">S</span>
              </div>
            </div>
            <SidebarItem icon={Home} label="Home" active collapsed={collapsed} />
            <SidebarItem icon={Search} label="Explore" collapsed={collapsed} />
            <SidebarItem icon={Bell} label="Notifications" collapsed={collapsed} />
            <SidebarItem icon={Mail} label="Messages" collapsed={collapsed} />
            <SidebarItem icon={Bookmark} label="Bookmarks" collapsed={collapsed} />
            <SidebarItem icon={Users} label="Communities" collapsed={collapsed} />
            <SidebarItem icon={UserCircle} label="Profile" collapsed={collapsed} />
            <SidebarItem icon={MoreHorizontal} label="More" collapsed={collapsed} />

            <Button className="w-full mt-4 bg-purple-600 text-white hover:bg-purple-700" size="lg">
              {collapsed ? "+" : "Post"}
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className={`${collapsed ? "col-span-7" : "col-span-6"} border-x`}>
          <div className="sticky top-0 backdrop-blur-md bg-white/80 border-b p-4">
            <h1 className="text-xl font-bold">Home</h1>
          </div>

          {/* Post Input */}
          <div className="border-b p-4 bg-white">
            <div className="flex gap-4">
              <Avatar src="/api/placeholder/48/48" className="w-12 h-12" />
              <div className="flex-1">
                <Input placeholder="What's on your mind?" variant="bordered" classNames={{ input: "bg-transparent", inputWrapper: "bg-transparent" }} />
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
                  <Button color="primary" size="sm" className="bg-purple-600 text-white">
                    Post
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Posts */}
          <Tweet user="Alex Johnson" handle="@alexj" time="3h" content="Just launched our new product! 🚀 Check it out and let me know what you think!" />
          <Tweet user="Sarah Miller" handle="@sarahm" time="5h" content="The sunrise this morning was absolutely breathtaking! Nature never ceases to amaze me. 🌅" />
        </div>

        {/* Right Sidebar */}
        <div className={`${collapsed ? "col-span-4" : "col-span-4"} p-4`}>
          <Card className="bg-white mb-4">
            <CardBody>
              <Input
                placeholder="Search"
                startContent={<Search size={18} />}
                className="mb-4"
                classNames={{ input: "bg-white", inputWrapper: "bg-white border-2 hover:border-purple-500" }}
              />
            </CardBody>
          </Card>

          <Card className="bg-white mb-4">
            <CardBody>
              <h2 className="text-xl font-bold mb-4">Trending Now</h2>
              <div className="space-y-4">
                {["Technology", "Sports", "Entertainment"].map((topic) => (
                  <div key={topic} className="hover:bg-purple-50 p-2 rounded-lg cursor-pointer">
                    <p className="font-bold">#{topic}</p>
                    <p className="text-sm text-default-500">12k Tweets</p>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
