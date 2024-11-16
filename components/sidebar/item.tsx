import { Button } from '@nextui-org/button';
import { Tooltip } from '@nextui-org/react';
import Link from 'next/link';

const SidebarItem = ({
  icon: Icon,
  label,
  active = false,
  collapsed,
  link,
}: {
  icon: any;
  label: string;
  active?: boolean;
  collapsed: boolean;
  link: string;
}) => (
  <Link href={link}>
    <Tooltip content={label} isDisabled={!collapsed} placement='right'>
      <Button
        className={`w-full justify-start gap-4 p-4 ${active ? 'bg-purple-100 text-purple-600' : 'text-black'}`}
        startContent={
          <Icon className={active ? 'text-purple-600' : ''} size={24} />
        }
        variant='light'
      >
        <span className={`text-lg ${collapsed ? 'hidden' : 'block'}`}>
          {label}
        </span>
      </Button>
    </Tooltip>
  </Link>
);

export default SidebarItem;
