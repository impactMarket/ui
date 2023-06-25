import React from 'react';
export declare type SidebarMenuItemProps = {
    uid?: string;
    children?: any;
    flag?: string | number;
    icon?: string;
    isActive?: boolean;
    isVisible?: boolean;
    label?: string | React.ReactNode;
} & React.HTMLAttributes<HTMLAnchorElement>;
export declare const SidebarMenuItem: React.FC<SidebarMenuItemProps>;
