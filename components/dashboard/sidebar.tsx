import { Button } from '@nextui-org/button';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Search,
  UserCircle,
} from 'lucide-react';
import { ConnectButton } from 'thirdweb/react';

import SidebarItem from '@/components/sidebar/item';
import { client } from '@/services/thirdweb';

const SidebarItems = [
  { icon: Home, label: 'Home' },
  { icon: Search, label: 'Explore' },
  { icon: UserCircle, label: 'Profile' },
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
      className={`${collapsed ? 'col-span-1' : 'col-span-2'} relative max-h-screen bg-white shadow-lg transition-all duration-300`}
    >
      <Button
        isIconOnly
        className='absolute z-50 bg-purple-600 rounded-full shadow-lg -right-3 top-6'
        variant='light'
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </Button>
      <div className='flex flex-col justify-between h-full gap-2 p-4'>
        <div className='flex flex-col gap-2'>
          <div className='h-10' />
          {SidebarItems.map((item) => (
            <SidebarItem
              key={item.label}
              active={active === item.label}
              collapsed={collapsed}
              icon={item.icon}
              label={item.label}
              onClick={() => setActive(item.label)}
            />
          ))}
          <Button
            className='w-full mt-4 text-white bg-purple-600 hover:bg-purple-700'
            size='lg'
          >
            {collapsed ? '+' : 'Post'}
          </Button>
        </div>
        <ConnectButton client={client} />
      </div>
    </div>
  );
}
