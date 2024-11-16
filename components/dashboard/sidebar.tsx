'use client';

import { Button } from '@nextui-org/button';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Search,
  UserCircle,
} from 'lucide-react';
import { ConnectButton, lightTheme } from 'thirdweb/react';

import SidebarItem from '@/components/sidebar/item';
import { client } from '@/services/thirdweb';
import { useState } from 'react';
import { link } from 'fs';

const SidebarItems = [
  { icon: Home, label: 'Home', link: '/dashboard' },
  { icon: Search, label: 'Explore', link: '/dashboard/explore' },
  { icon: UserCircle, label: 'Profile', link: '/dashboard/profile' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div
      className={`${collapsed ? 'col-span-1' : 'col-span-2'} relative max-h-screen bg-white shadow-lg transition-all duration-300`}
    >
      <Button
        isIconOnly
        className='absolute -right-3 top-6 z-50 rounded-full bg-purple-600 shadow-lg'
        variant='light'
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </Button>
      <div className='flex h-full flex-col justify-between gap-2 p-4'>
        <div className='flex flex-col gap-2'>
          <div className='h-10' />
          {SidebarItems.map((item) => (
            <SidebarItem
              key={item.label}
              active={false}
              collapsed={collapsed}
              icon={item.icon}
              label={item.label}
              link = {item.link}
            />
          ))}
          <Button
            className='mt-4 w-full bg-purple-600 text-white hover:bg-purple-700'
            size='lg'
          >
            {collapsed ? '+' : 'Post'}
          </Button>
        </div>
        <ConnectButton client={client} theme={lightTheme()} />
      </div>
    </div>
  );
}
