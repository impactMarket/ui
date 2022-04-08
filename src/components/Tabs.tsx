import 'react-tabs/style/react-tabs.css';
import { GeneratedPropTypes } from '../types';
import {
    TabPanel as TabContent,
    Tab as TabTitle,
    TabList as TabTitleContainer,
    Tabs as TabsContainer
} from 'react-tabs';
import { Text } from './Typography';
import { colors } from '../theme';
import React from 'react';
import styled from 'styled-components';

// #region ====== style ===
const TabTitleContainerWrapper = styled.div`
    & .react-tabs__tab-list {
        border-bottom: 1px solid ${colors.g200};

        & .react-tabs__tab {
            border: 0;
            margin: 0 1rem;
            padding: 1rem 0.25rem;

            &:first-child {
                margin-left: 0;
            }

            &:last-child {
                margin-right: 0;
            }

            &.react-tabs__tab--selected {
                background: transparent;
                border: 0;

                & p {
                    color: ${colors.p700};
                }

                & .numberBg {
                    background-color: ${colors.p50};
                }

                &:after {
                    background-color: ${colors.p700};
                    bottom: -2px;
                    content: '';
                    height: 2px;
                    left: 0;
                    position: absolute;
                    width: 100%;
                }
            }
        }
    }
`;

const TabTitleWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 22px;
    justify-content: center;
`;

const TabNumber = styled.div`
    background-color: ${colors.g100};
    border-radius: 16px;
    margin-left: 0.5rem;
    padding: 0.125rem 0.5rem;
`;

const TabContentWrapper = styled.div`
    margin-top: 2rem;
`;
// #endregion === style ===

// #region ====== TabList ===
export type TabListProps = {
    children: any;
    tabsRole?: string;
};

export const TabList = ({ children, ...forwardProps }: TabListProps) => {
    return (
        <TabTitleContainerWrapper {...forwardProps}>
            <TabTitleContainer>{children}</TabTitleContainer>
        </TabTitleContainerWrapper>
    );
};

TabList.tabsRole = 'TabList';
// #endregion === TabList ===

// #region ====== Tab ===
export type TabProps = {
    title: string;
    number?: number;
    tabsRole?: string;
};

export const Tab = ({ title, number, ...forwardProps }: TabProps) => {
    return (
        <TabTitle {...forwardProps}>
            <TabTitleWrapper>
                <Text g500 medium small>
                    {title}
                </Text>
                {number && (
                    <TabNumber className="numberBg">
                        <Text extrasmall g700 medium>
                            {number}
                        </Text>
                    </TabNumber>
                )}
            </TabTitleWrapper>
        </TabTitle>
    );
};

Tab.tabsRole = 'Tab';
// #endregion === Tab ===

// #region ====== TabPanel ===
export type TabPanelProps = {
    children: any;
    tabsRole?: string;
};

export const TabPanel = ({ children, ...forwardProps }: TabPanelProps) => {
    return (
        <TabContent {...forwardProps}>
            <TabContentWrapper>{children}</TabContentWrapper>
        </TabContent>
    );
};

TabPanel.tabsRole = 'TabPanel';
// #endregion === TabPanel ===

export type TabsProps = {
    children: any;
} & GeneratedPropTypes;

export const Tabs: React.FC<TabsProps> = props => {
    const { children, ...forwardProps } = props;

    return <TabsContainer {...forwardProps}>{children}</TabsContainer>;
};
