/* eslint-disable sort-keys */
import { AppContainer } from '../../../components/AppContainer';
import { Box } from '../../../components/Box';
import { Card } from '../../../components/Card';
import { CircledIcon } from '../../../components/CircledIcon';
import { Col, Grid, Row } from '../../../components/Grid';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Display, Text } from '../../../components/Typography';
import { Divider } from '../../../components/Divider';
import { Sidebar, SidebarProps } from '../../../components/Sidebar';
import { ViewContainer } from '../../../components/ViewContainer';
import React from 'react';
import base from 'paths.macro';
import { Countdown } from '../../../components/Countdown';

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
            { icon: 'flash', label: 'Stories', flag: 4 }
        ]
    ],
    footerMenu: [
        { icon: 'help', label: 'Help' },
        { icon: 'settings', label: 'Settings' },
        { icon: 'flag', label: 'Report Suspicious Activity' },
        { icon: 'bell', label: 'Notifications' }
    ],
    userButton: {
        action: 'function',
        address: '0x43D2...34f7',
        currency: 'Celo',
        photo: {
            url: 'https://picsum.photos/40'
        },
        name: 'Olivia Rhye'
    }
} as SidebarProps;

export default {
    title: `Components/${base.replace('/src/stories/2-base/', '')}App Layout`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const { sidebarProps, viewContainerIsLoading } = args;

    return (
        <AppContainer>
            <Sidebar {...sidebarProps} />
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
    sidebarProps,
    viewContainerIsLoading: false
};
