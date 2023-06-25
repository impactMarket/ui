import React from 'react';
export declare type SidebarProps = {
    children: React.ReactNode;
    footer?: React.ReactNode;
    handleLogoClick?: any;
    isLoading?: boolean;
    mobileActions?: React.ReactNode;
};
export declare const useSidebarMobile: () => {
    isActive: boolean;
    setIsActive: Function;
};
export declare const Sidebar: React.FC<SidebarProps>;
