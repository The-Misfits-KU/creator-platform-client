import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/react";

const SidebarItem = ({ 
    icon: Icon, 
    label, 
    active = false, 
    collapsed,
    onClick
  }: { 
    icon: any, 
    label: string, 
    active?: boolean,
    collapsed: boolean ,
    onClick?: () => void
  }) => (
    <Tooltip
      content={label}
      placement="right"
      isDisabled={!collapsed}
    >
      <Button 
        className={`w-full justify-start gap-4 p-4 ${active ? 'bg-purple-100 text-purple-600' : 'text-black'}`}
        variant="light"
        startContent={<Icon size={24} className={active ? "text-purple-600" : ""} />}
        onClick={onClick}
      >
        <span className={`text-lg ${collapsed ? 'hidden' : 'block'}`}>{label}</span>
      </Button>
    </Tooltip>
  );

export default SidebarItem;