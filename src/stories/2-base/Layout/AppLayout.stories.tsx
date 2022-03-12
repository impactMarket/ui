/* eslint-disable sort-keys */
import { AppContainer } from '../../../components/AppContainer';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Display, Text } from '../../../components/Typography';
import { Divider } from '../../../components/Divider';
import { Sidebar, SidebarProps } from '../../../components/Sidebar';
import { ViewContent } from '../../../components/ViewContent';
import React from 'react';
import base from 'paths.macro';

const sidebarProps = {
    commonMenu: [
        { icon: 'users', label: 'Communities' },
        { icon: 'tray', label: 'Governance' },
        { icon: 'barChart2', label: 'Global Dashboard' },
        { icon: 'impactMarket', label: 'About Us' }
    ],
    menus: [
        [
            { flag: 'Claim', icon: 'coins', isActive: true, label: 'UBI' },
            { icon: 'bookOpen', label: 'Learn & Earn' },
            { icon: 'flash', label: 'Stories' }
        ]
    ],
    footerMenu: [
        { icon: 'help', label: 'Help' },
        { icon: 'settings', label: 'Settings' },
        { icon: 'flag', label: 'Report Suspicious Activity' },
        { icon: 'bell', label: 'Notifications' }
    ],
    userButton: {
        action: () => console.log('User button clicked'),
        address: '0x43D2...34f7',
        currency: 'Celo',
        photo: {
            url: 'https://picsum.photos/40'
        },
        name: 'Olivia Rhye'
    }
} as SidebarProps;

// ·

export default {
    title: `Components/${base.replace('/src/stories/2-base/', '')}App Layout`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = () => {
    return (
        <AppContainer>
            <Sidebar {...sidebarProps} />
            <ViewContent>
                <Display>App Layout components</Display>
                <Divider />
                <Text g500>
                    This is composed by `AppContainer`, `Sidebar` and `ViewContent` components. Check the structure
                    using the tab 'Docs' then click in 'Show code'.
                </Text>
            </ViewContent>
        </AppContainer>
    );
};

export const AppLayout = Template.bind({});
AppLayout.args = {};
