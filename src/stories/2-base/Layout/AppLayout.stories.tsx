/* eslint-disable sort-keys */
import { AppContainer } from '../../../components/AppContainer';
import { Avatar } from '../../../components/Avatar';
import { Box } from '../../../components/Box';
import { Button } from '../../../components/Button';
import { Card } from '../../../components/Card';
import { CircledIcon } from '../../../components/CircledIcon';
import { Col, Grid, Row } from '../../../components/Grid';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Countdown } from '../../../components/Countdown';
import { Display, Text } from '../../../components/Typography';
import { Divider } from '../../../components/Divider';
import {
    Sidebar,
    SidebarMenuGroup,
    SidebarMenuItem,
    SidebarMenuItemProps,
    SidebarUserButton
} from '../../../components/Sidebar';
import { ViewContainer } from '../../../components/ViewContainer';
import React from 'react';
import base from 'paths.macro';

const commonMenu = [
    { icon: 'users', label: 'Communities' },
    { icon: 'tray', label: 'Governance' },
    { icon: 'barChart2', label: 'Global Dashboard' },
    { icon: 'impactMarket', label: 'About Us' }
] as SidebarMenuItemProps[];

const menus = [
    [
        { flag: 'Claim', icon: 'coins', isActive: true, label: 'UBI' },
        { icon: 'bookOpen', label: 'Learn & Earn' },
        { icon: 'flash', label: 'Stories', flag: 4 }
    ]
] as SidebarMenuItemProps[][];

const footerMenu = [
    { icon: 'help', label: 'Help' },
    { icon: 'settings', label: 'Settings' },
    { icon: 'flag', label: 'Report Suspicious Activity' },
    { icon: 'bell', label: 'Notifications' }
];

const SidebarFooter = (props: { withButton?: boolean }) => {
    const { withButton } = props;

    if (withButton) {
        return (
            <Button fluid icon="coins" onClick={() => console.log('Connecting wallet action')} secondary>
                Connect Wallet
            </Button>
        );
    }

    return (
        <SidebarUserButton
            address="0x43D2...34f7"
            currency="Celo"
            name="Olivia Rhye"
            onClick={() => console.log('User button action')}
            photo={{ url: 'https://picsum.photos/40' }}
        />
    );
};

const MobileActions = (props: { withButton?: boolean }) => {
    const { withButton } = props;

    if (withButton) {
        return (
            <Button icon="coins" onClick={() => console.log('Connecting wallet action')} secondary>
                Connect Wallet
            </Button>
        );
    }

    return <Avatar url="https://picsum.photos/40" />;
};

export default {
    title: `Components/${base.replace('/src/stories/2-base/', '')}App Layout`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const { notLoggedIn, sidebarIsLoading, viewContainerIsLoading } = args;

    return (
        <AppContainer>
            <Sidebar
                footer={<SidebarFooter withButton={notLoggedIn} />}
                isLoading={sidebarIsLoading}
                mobileActions={<MobileActions withButton={notLoggedIn} />}
            >
                {!notLoggedIn &&
                    menus.map((group, index) => (
                        <SidebarMenuGroup key={index}>
                            {group.map((item, groupIndex) => (
                                <SidebarMenuItem {...item} key={groupIndex} onClick={() => console.log(item)} />
                            ))}
                        </SidebarMenuGroup>
                    ))}
                <SidebarMenuGroup isCollapsible={!notLoggedIn} title={!notLoggedIn ? 'impactMarket' : undefined}>
                    {commonMenu.map((item, index) => (
                        <SidebarMenuItem {...item} key={index} onClick={() => console.log(item)} />
                    ))}
                </SidebarMenuGroup>
                {!notLoggedIn && (
                    <SidebarMenuGroup mt="auto">
                        {footerMenu.map((item, index) => (
                            <SidebarMenuItem {...item} key={index} onClick={() => console.log(item)} />
                        ))}
                    </SidebarMenuGroup>
                )}
            </Sidebar>
            <ViewContainer isLoading={viewContainerIsLoading}>
                <Display>App Layout components</Display>
                <Divider />
                <Text g500>
                    This is composed by `AppContainer`, `Sidebar` and `ViewContainer` components. Check the structure
                    using the tab 'Docs' then click in 'Show code'.
                </Text>
                <Card mt={2}>
                    <Row fLayout="center">
                        <Col colSize={7}>
                            <Box center>
                                <Grid colSpan={1.25} cols={1}>
                                    <CircledIcon icon="clock" large warning />
                                    <Box>
                                        <Text g900 large medium>
                                            Almost there...
                                        </Text>
                                        <Text g500 mt={0.5} small>
                                            When this countdown ends, you will be able to claim your Unconditional Basic
                                            Income (UBI) of ~R$10.5.
                                        </Text>
                                    </Box>
                                    <Box margin="0 auto" maxW={22}>
                                        <Countdown date="2022-06-01" />
                                    </Box>
                                </Grid>
                            </Box>
                        </Col>
                        <Col colSize={5}>
                            <Box bgImg="https://picsum.photos/600" pt="100%" radius={0.5} />
                        </Col>
                    </Row>
                </Card>
            </ViewContainer>
        </AppContainer>
    );
};

export const AppLayout = Template.bind({});
AppLayout.args = {
    notLoggedIn: false,
    sidebarIsLoading: false,
    viewContainerIsLoading: false
};
