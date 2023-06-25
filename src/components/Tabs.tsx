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
import styled, { css } from 'styled-components';

type TabTitleContainerWrapperProps = {
    buttonStyle?: boolean;
};

// #region ====== style ===
const TabTitleContainerWrapper = styled.div<TabTitleContainerWrapperProps>`
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

    ${({ buttonStyle }) =>
        buttonStyle &&
        css`
            & .react-tabs__tab-list {
                border-bottom: 0;
                box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
                width: fit-content;

                & .react-tabs__tab {
                    border: 1px solid ${colors.g300};
                    border-radius: 0;
                    padding: 0.625rem 1rem;
                    margin: 0;
                    background-color: #fff;

                    &:first-child {
                        border-radius: 8px 0 0 8px;
                    }

                    &:last-child {
                        border-radius: 0 8px 8px 0;
                    }

                    &:only-child {
                        border-radius: 8px;
                    }

                    &.react-tabs__tab--selected {
                        background-color: ${colors.g50};
                        border: 1px solid ${colors.g300};

                        &:after {
                            display: none;
                        }

                        p {
                            color: ${colors.g800};
                        }
                    }

                    p {
                        color: ${colors.g700};
                    }

                    + li {
                        margin-left: -1px;
                    }
                }
            }
        `}
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
    buttonStyle?: boolean;
};

export const TabList = ({ buttonStyle, children, ...forwardProps }: TabListProps) => {
    return (
        <TabTitleContainerWrapper buttonStyle={buttonStyle} {...forwardProps}>
            <TabTitleContainer>{children}</TabTitleContainer>
        </TabTitleContainerWrapper>
    );
};

TabList.tabsRole = 'TabList';
TabList.defaultProps = {
    buttonStyle: false
};

// #endregion === TabList ===

// #region ====== Tab ===
export type TabProps = {
    title: string | React.ReactNode;
    number?: number;
    tabsRole?: string;
    onClick?: any;
};

export const Tab = ({ title, number, onClick, ...forwardProps }: TabProps) => {
    return (
        <TabTitle onClick={onClick} {...forwardProps}>
            <TabTitleWrapper>
                <Text g500 medium small>
                    {title}
                </Text>
                {typeof number === 'number' && number >= 0 && (
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
    defaultIndex?: number;
} & GeneratedPropTypes;

export const Tabs: React.FC<TabsProps> = props => {
    const { children, ...forwardProps } = props;

    return <TabsContainer {...forwardProps}>{children}</TabsContainer>;
};
