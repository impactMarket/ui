import 'react-tabs/style/react-tabs.css';
import { GeneratedPropTypes } from '../types';
import React from 'react';
export declare type TabListProps = {
    children: any;
    tabsRole?: string;
};
export declare const TabList: {
    ({ children, ...forwardProps }: TabListProps): React.JSX.Element;
    tabsRole: string;
};
export declare type TabProps = {
    title: string | React.ReactNode;
    number?: number;
    tabsRole?: string;
    onClick?: any;
};
export declare const Tab: {
    ({ title, number, onClick, ...forwardProps }: TabProps): React.JSX.Element;
    tabsRole: string;
};
export declare type TabPanelProps = {
    children: any;
    tabsRole?: string;
};
export declare const TabPanel: {
    ({ children, ...forwardProps }: TabPanelProps): React.JSX.Element;
    tabsRole: string;
};
export declare type TabsProps = {
    children: any;
    defaultIndex?: number;
} & GeneratedPropTypes;
export declare const Tabs: React.FC<TabsProps>;
