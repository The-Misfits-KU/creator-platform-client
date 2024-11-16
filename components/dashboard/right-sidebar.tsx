import { Button, User, Input, Avatar, Card, CardBody } from "@nextui-org/react";
import { Search } from "lucide-react";

export default function RightSidebar() {
  return (
    <div className="col-span-2 text-black m-4">
      <Card className="bg-white mb-4">
        <CardBody>
          <Input
            placeholder="Search"
            startContent={<Search size={18} />}
            className="mb-4"
            classNames={{
              input: "bg-white",
              inputWrapper: "bg-white border-2 hover:border-purple-500",
            }}
          />
        </CardBody>
      </Card>

      <Card className="bg-white mb-4">
        <CardBody>
          <h2 className="text-xl font-bold mb-4">Trending Now</h2>
          <div className="space-y-4">
            {/* Trending items */}
            {["Technology", "Sports", "Entertainment"].map((topic) => (
              <div
                key={topic}
                className="hover:bg-purple-50 p-2 rounded-lg cursor-pointer"
              >
                <p className="text-sm text-gray-500">Trending in {topic}</p>
                <p className="font-semibold">#TrendingTopic</p>
                <p className="text-sm text-gray-500">10.5K posts</p>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      <Card className="bg-white">
        <CardBody>
          <h2 className="text-xl font-bold mb-4">Who to follow</h2>
          <div className="space-y-4">
            {/* Suggested users */}
            {["John Doe", "Jane Smith", "Bob Wilson"].map((name) => (
              <div key={name} className="flex items-center justify-between">
                <User
                  name={name}
                  description="@username"
                  avatarProps={{
                    src: "/api/placeholder/32/32",
                  }}
                />
                <Button size="sm" className="bg-purple-600 text-white">
                  Follow
                </Button>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
