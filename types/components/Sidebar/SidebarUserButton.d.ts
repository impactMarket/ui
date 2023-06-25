import React from 'react';
export declare type SidebarUserButtonProps = {
    address: string;
    isActive?: boolean;
    currency?: string;
    photo?: {
        url?: string;
    };
    name?: string;
} & React.HTMLAttributes<HTMLAnchorElement>;
export declare const SidebarUserButton: React.FC<SidebarUserButtonProps>;
