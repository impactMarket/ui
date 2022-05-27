import { Box } from '../Box';
import { Icon } from '../Icon';
import { Logo } from '../Logo';
import { SkeletonElement } from '../SkeletonElement';
import { colors } from '../../theme/colors';
import { mq } from 'styled-gen';
import { position } from 'polished';
import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';

// #region ====== style ===
const SidebarWrapper = styled.div`
    background-color: ${colors.n01};
    border-bottom: 0.0625rem solid ${colors.g200};
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    position: relative;
    width: 100%;

    ${mq.tabletLandscape(css`
        border-right: 0.0625rem solid ${colors.g200};
        flex-direction: column;
        height: 100%;
        overflow-y: auto;
        width: 20rem;
    `)}
`;

const SidebarHeading = styled.div`
    align-items: center;
    display: flex;
    padding: 1rem;
    position: relative;
    width: 100%;
    z-index: 10;
    background-color: ${colors.n01};

    ${mq.tabletLandscape(css`
        padding: 2rem 1.5rem 1.5rem;
    `)};
`;

const SidebarMenu = styled.div<{ isActive?: boolean }>`
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1rem 1rem;
    overflow-y: auto;

    ${mq.upTo(
        'tabletLandscape',
        css`
            ${position('fixed', 65, 0, 0, 0)};

            background-color: ${colors.n01};
            transform: translateY(-100%);
            z-index: 1;

            ${({ isActive }: any) =>
                isActive &&
                css`
                    transform: translateY(0);
                `}
        `
    )};

    ${mq.tabletLandscape(css`
        height: 100%;
    `)};
`;

const SidebarMenuContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-bottom: 1rem;

    ${mq.tabletLandscape(css`
        padding-bottom: 0;
    `)};
`;

const SidebarMobileActions = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: auto;

    ${mq.tabletLandscape(css`
        display: none;
    `)}
`;

const SidebarMobileFooter = styled.div`
    border-top: 0.0625rem solid ${colors.g200};
    padding: 1rem 0 0;

    ${mq.tabletLandscape(css`
        display: none;
    `)}
`;

const SidebarFooter = styled.div`
    display: none;

    ${mq.tabletLandscape(css`
        display: block;
        padding: 0 1rem;
    `)};
`;

const SidebarFooterContent = styled.div`
    padding: 1rem 0;
    border-top: 0.0625rem solid ${colors.g200};
`;
// #endregion === style ===

export type SidebarProps = {
    children: React.ReactNode;
    footer?: React.ReactNode;
    handleLogoClick?: any;
    isLoading?: boolean;
    mobileActions?: React.ReactNode;
};

const SidebarMobileContext = React.createContext<{ isActive: boolean; setIsActive: Function }>({
    isActive: false,
    setIsActive: () => {}
});

export const useSidebarMobile = () => {
    const context = useContext(SidebarMobileContext);

    return context;
};

const LoadingContent = () => (
    <>
        <SkeletonElement h={1.75} w="100%" />
        <SkeletonElement h={1.75} mt={1.2} w="100%" />
        <SkeletonElement h={1.75} mt={1.2} w="100%" />
    </>
);

export const Sidebar: React.FC<SidebarProps> = props => {
    const { children, footer, isLoading, mobileActions, handleLogoClick } = props;
    const [isActive, setIsActive] = useState(false);

    return (
        <SidebarWrapper>
            <SidebarMobileContext.Provider value={{ isActive, setIsActive }}>
                <>
                    <SidebarHeading>
                        {typeof handleLogoClick === 'function' ? (
                            <a onClick={handleLogoClick}>
                                <Logo />
                            </a>
                        ) : (
                            <Logo />
                        )}
                        <SidebarMobileActions>
                            <a onClick={() => setIsActive(!isActive)}>
                                <Box fLayout="center" flex>
                                    <>
                                        {mobileActions}
                                        <Icon g500 icon={isActive ? 'close' : 'menu'} ml={1} size={1.125} />
                                    </>
                                </Box>
                            </a>
                        </SidebarMobileActions>
                    </SidebarHeading>
                    <SidebarMenu isActive={isActive}>
                        {isLoading ? (
                            <LoadingContent />
                        ) : (
                            <>
                                <SidebarMenuContent>{children as any}</SidebarMenuContent>
                                {!!footer && <SidebarMobileFooter>{footer as any}</SidebarMobileFooter>}
                            </>
                        )}
                    </SidebarMenu>
                    {!!footer && !isLoading && (
                        <SidebarFooter>
                            <SidebarFooterContent>{footer as any}</SidebarFooterContent>
                        </SidebarFooter>
                    )}
                </>
            </SidebarMobileContext.Provider>
        </SidebarWrapper>
    );
};

Sidebar.defaultProps = {
    children: null,
    footer: null
};
