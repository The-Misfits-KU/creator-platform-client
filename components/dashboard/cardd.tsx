import React from "react";
import { Button, Avatar, Card, CardBody } from "@nextui-org/react";
import { MessageCircle, Repeat2, Heart, Share,MessageSquare } from "lucide-react";

const Cardd = ({ user, handle, job, followerscount, followingcount }: any) => (
  <Card className="bg-purple cursor-pointer transition-all border-b rounded-none text-black mb-2 px-12 py-4 shadow-none">
  <CardBody className="flex flex-row items-center justify-between gap-8 w-full">
  <Avatar src="/api/placeholder/32/32" className="w-24 h-24" />

  <div className="flex-1">
    <div className="flex items-center gap-4 mb-2">
      <span className="font-bold text-3xl">{user}</span>
      <span className="text-default-500 text-3xl">{handle}</span>
    </div>

    <div className="flex items-center gap-4 mb-2">
      <span className="text-default-500 text-2xl">{job}</span>
    </div>

    <div className="flex items-center gap-4 mb-2">
      <span className="text-default-500 text-xl">Followers</span>
      <span className="text-default-500 text-xl">{followerscount}</span>
      <span className="text-default-500 text-xl">Following</span>
      <span className="text-default-500 text-xl">{followingcount}</span>
    </div>

    <Button className="rounded-full w-9 h-9 bg-purple-600/80 backdrop-blur-sm hover:bg-purple-700/80 text-white shadow-lg">
      <MessageSquare className="w-6 h-6" />
    </Button>
  </div>
  
</CardBody>

   
  </Card>
  
);

export default Cardd;
