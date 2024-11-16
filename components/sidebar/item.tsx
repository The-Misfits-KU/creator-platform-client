import { Button } from '@nextui-org/button';
import { Tooltip } from '@nextui-org/react';

const SidebarItem = ({
  icon: Icon,
  label,
  active = false,
  collapsed,
  onClick,
}: {
  icon: any;
  label: string;
  active?: boolean;
  collapsed: boolean;
  onClick?: () => void;
}) => (
  <Tooltip content={label} isDisabled={!collapsed} placement='right'>
    <Button
      className={`w-full justify-start gap-4 p-4 ${active ? 'bg-purple-100 text-purple-600' : 'text-black'}`}
      startContent={
        <Icon className={active ? 'text-purple-600' : ''} size={24} />
      }
      variant='light'
      onClick={onClick}
    >
      <span className={`text-lg ${collapsed ? 'hidden' : 'block'}`}>
        {label}
      </span>
    </Button>
  </Tooltip>
);

export default SidebarItem;
