import React from "react";
import { Button, Avatar, Card, CardBody } from "@nextui-org/react";
import { MessageCircle, Repeat2, Heart, Share } from "lucide-react";

const Cardd = ({ user, handle,job, followerscount, followingcount}: any) => (
  <Card className="bg-purple
   cursor-pointer transition-all border-b rounded-none text-black mb-2 px-12 py-4 shadow-none">
    <CardBody className="flex flex-row items-center justify-center gap-4 w-full">
      <div className="flex-1">
        <div className="flex items-center  gap-2">
          <span className="font-bold">{user}</span>
          <span className="text-default-500">{handle}</span><br/>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-default-500 text-center">{job}</span>
        </div>
        <div className="flex items-center gap-2">
            <span className="text-default-500 text-center">Followers</span>
          <span className="text-default-500 text-center">{followerscount}</span>
          <span className="text-default-500 text-center">Followers</span>

          <span className="text-default-500 text-center">{followingcount}</span>
        </div>
      </div>
      <Avatar src="/api/placeholder/32/32" className="w-24 h-24" />


    </CardBody>
  </Card>
);

export default Cardd;