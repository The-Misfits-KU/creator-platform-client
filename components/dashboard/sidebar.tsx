import { Button } from "@nextui-org/button";
import SidebarItem from "@/components/sidebar/item";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Search,
  UserCircle,
} from "lucide-react";
import { client } from "@/services/thirdweb";
import { ConnectButton } from "thirdweb/react";

const SidebarItems = [
  { icon: Home, label: "Home" },
  { icon: Search, label: "Explore" },
  { icon: UserCircle, label: "Profile" },
];

export default function Sidebar({
  collapsed,
  setCollapsed,
  active,
  setActive,
}: {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  active: string;
  setActive: (active: string) => void;
}) {
  return (
    <div
      className={`${collapsed ? "col-span-1" : "col-span-2"} bg-white shadow-lg transition-all duration-300 relative`}
    >
      <Button
        isIconOnly
        variant="light"
        className="absolute -right-3 top-6 z-50 bg-purple-600 shadow-lg rounded-full"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </Button>
      <div className="flex flex-col  h-full justify-between gap-2 p-4">
        <div className="flex flex-col gap-2">
          <div className="h-10"></div>
          {SidebarItems.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              active={active === item.label}
              collapsed={collapsed}
              onClick={() => setActive(item.label)}
            />
          ))}
          <Button
            className="w-full mt-4 bg-purple-600 text-white hover:bg-purple-700"
            size="lg"
          >
            {collapsed ? "+" : "Post"}
          </Button>
        </div>
        <ConnectButton client={client} />
      </div>
    </div>
  );
}
