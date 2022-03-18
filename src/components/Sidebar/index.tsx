import { Avatar } from '../Avatar';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { Logo } from './Logo';
import { MenuItem, MenuItemProps } from './MenuItem';
import { Text } from '../Typography';
import { colors } from '../../theme/colors';
import { ease, mq, transitions } from 'styled-gen';
import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

// #region ====== style ===
const SidebarWrapper = styled.div`
    background-color: ${colors.n01};
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    position: relative;
    width: 100%;

    ${mq.upTo(
        'tabletLandscape',
        css`
            border-bottom: 0.0625rem solid ${colors.g200};
        `
    )}

    ${mq.tabletLandscape(css`
        border-right: 0.0625rem solid ${colors.g200};
        height: 100%;
        overflow-y: auto;
        width: 20rem;
    `)}
`;

const SidebarHeading = styled.div`
    padding: 1rem;
    width: 100%;

    ${mq.tabletLandscape(css`
        padding: 2rem 1.5rem 1.5rem;
    `)};
`;

const SidebarContent = styled.div`
    ${mq.tabletLandscape(css`
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow-y: auto;
        padding: 0.5rem 1rem 1rem;
    `)};
`;

const SidebarContentMenu = styled.div<{ elHeight?: number; isActive?: boolean; isCollapsible?: boolean }>`
    border-bottom: 0.0625rem solid ${colors.g200};
    flex-shrink: 0;
    padding-bottom: 1rem;
    position: relative;

    &:last-of-type:not(:first-of-type) {
        margin-top: auto;
    }

    ${({ isCollapsible }) =>
        !isCollapsible &&
        css`
            &:not(:first-child) {
                padding-top: 1rem;
            }
        `}

    ${({ elHeight, isActive, isCollapsible }) =>
        isCollapsible &&
        css`
            ${transitions('height', 500, ease.inOutCirc)};

            height: ${isActive ? (elHeight || 0) / 16 : 0}rem;
            overflow: hidden;
        `}
`;

const SidebarContentMenuCollapsibleContent = styled.div`
    padding: 1rem 0;
    position: absolute;
    width: 100%;
`;

const SidebarContentMenuHeading = styled.a`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem 0 0.75rem;
`;

const SidebarContentMenuItem = styled.div`
    & + & {
        margin-top: 0.25rem;
    }
`;

const SidebarFooter = styled.div`
    padding: 0 1rem 1rem;
`;

const SidebarFooterButton = styled.a<{ isActive?: boolean }>`
    align-items: center;
    border-radius: 0.375rem;
    display: flex;
    padding: 0.625rem 0.5rem 0.625rem 0.5rem;

    ${({ isActive }) =>
        isActive
            ? css`
                  background-color: ${colors.p100};
                  cursor: default !important;
              `
            : css`
                  ${mq.tabletLandscape(css`
                      &:hover {
                          background-color: ${colors.p25};
                      }
                  `)}
              `}
`;
// #endregion === style ===

export type SidebarProps = {
    ConnectButton?: any;
    commonMenu?: MenuItemProps[];
    menus?: MenuItemProps[][];
    footerMenu?: MenuItemProps[];
    userButton?: {
        address: string;
        isActive?: boolean;
        action: any;
        currency?: string;
        photo?: {
            url?: string;
        };
        name?: string;
    };
};

export const Sidebar: React.FC<SidebarProps> = props => {
    const { ConnectButton, commonMenu, footerMenu, menus, userButton } = props;

    const [commonMenuIsExpanded, setCommonMenuIsExpanded] = useState(false);

    const commonMenuContentRef = useRef<any>();

    return (
        <SidebarWrapper>
            <SidebarHeading>
                <Logo />
            </SidebarHeading>
            <SidebarContent>
                {/* Menus */}
                {!!menus?.length &&
                    menus.map((menu, menuIndex) => (
                        <SidebarContentMenu key={menuIndex}>
                            {menu.map((item, index) => (
                                <SidebarContentMenuItem key={index}>
                                    <MenuItem {...item} />
                                </SidebarContentMenuItem>
                            ))}
                        </SidebarContentMenu>
                    ))}

                {/* commonMenu */}
                {!!commonMenu?.length && (
                    <>
                        <SidebarContentMenuHeading onClick={() => setCommonMenuIsExpanded(!commonMenuIsExpanded)}>
                            <Text g500 semibold small uppercase>
                                impactMarket
                            </Text>
                            <Icon g400 icon={commonMenuIsExpanded ? 'chevronUp' : 'chevronDown'} size={1.25} />
                        </SidebarContentMenuHeading>
                        <SidebarContentMenu
                            elHeight={commonMenuContentRef?.current?.clientHeight}
                            isActive={commonMenuIsExpanded}
                            isCollapsible
                        >
                            <SidebarContentMenuCollapsibleContent ref={commonMenuContentRef}>
                                {commonMenu.map((item, index) => (
                                    <SidebarContentMenuItem key={index}>
                                        <MenuItem {...item} />
                                    </SidebarContentMenuItem>
                                ))}
                            </SidebarContentMenuCollapsibleContent>
                        </SidebarContentMenu>
                    </>
                )}

                {/* footerMenu */}
                {!!footerMenu?.length && (
                    <SidebarContentMenu>
                        {footerMenu.map((item, index) => (
                            <SidebarContentMenuItem key={index}>
                                <MenuItem {...item} />
                            </SidebarContentMenuItem>
                        ))}
                    </SidebarContentMenu>
                )}
            </SidebarContent>
            <SidebarFooter>
                {!!userButton?.address && !!userButton?.action ? (
                    <SidebarFooterButton isActive={userButton?.isActive} onClick={userButton?.action}>
                        <Avatar url={userButton?.photo?.url} />
                        <Box ml={1}>
                            {!!userButton.name && (
                                <Text g700 semibold>
                                    {userButton.name}
                                </Text>
                            )}
                            <Text g700>
                                {userButton.address}
                                {!!userButton?.currency ? ` · ${userButton.currency}` : ''}
                            </Text>
                        </Box>
                        <Icon g400 icon="chevronRight" ml="auto" size={1.5} />
                    </SidebarFooterButton>
                ) : (
                    <ConnectButton />
                )}
            </SidebarFooter>
        </SidebarWrapper>
    );
};

Sidebar.defaultProps = {
    commonMenu: [],
    footerMenu: [],
    menus: [],
    userButton: undefined
};
