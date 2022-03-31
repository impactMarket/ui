import { GeneratedPropTypes } from '../../types';
import { Icon } from '../Icon';
import { Text } from '../Typography';
import { colors } from '../../theme/colors';
import { ease, generateProps, transitions } from 'styled-gen';
import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

// #region ====== style ===
const SidebarMenuGroupWrapper = styled.div<GeneratedPropTypes>`
    & + & {
        padding-top: 1rem;
    }

    &:not(:last-of-type) {
        border-bottom: 0.0625rem solid ${colors.g200};
        padding-bottom: 1rem;
    }

    ${generateProps};
`;

const SidebarContentMenu = styled.div<{ elHeight?: number; isActive?: boolean; isCollapsible?: boolean }>`
    flex-shrink: 0;
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

const SidebarContentMenuCollapsibleContent = styled.div<{ isCollapsible?: boolean }>`
    width: 100%;

    ${({ isCollapsible }) =>
        isCollapsible &&
        css`
            position: absolute;
            padding: 1rem 0 0;
        `}

    & > a + a {
        margin-top: 0.25rem;
    }
`;

const SidebarContentMenuHeading = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem 0 0.75rem;
`;
// #endregion === style ===

export type SidebarMenuGroupProps = {
    children: any | any[];
    isCollapsible?: boolean;
    title?: string;
} & GeneratedPropTypes;

export const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = props => {
    const { children, isCollapsible, title, ...forwardProps } = props;

    const [groupIsExpanded, setGroupIsExpanded] = useState(false);

    const menuContentRef = useRef<any>();

    return (
        <SidebarMenuGroupWrapper {...forwardProps}>
            {!!title && (
                <SidebarContentMenuHeading
                    as={!isCollapsible ? 'div' : 'a'}
                    onClick={() => setGroupIsExpanded(!groupIsExpanded)}
                >
                    <Text g500 semibold small uppercase>
                        {title}
                    </Text>
                    {isCollapsible && <Icon g400 icon={groupIsExpanded ? 'chevronUp' : 'chevronDown'} size={1.25} />}
                </SidebarContentMenuHeading>
            )}
            <SidebarContentMenu
                elHeight={menuContentRef?.current?.clientHeight}
                isActive={groupIsExpanded}
                isCollapsible={isCollapsible}
            >
                <SidebarContentMenuCollapsibleContent isCollapsible={isCollapsible} ref={menuContentRef}>
                    {children}
                </SidebarContentMenuCollapsibleContent>
            </SidebarContentMenu>
        </SidebarMenuGroupWrapper>
    );
};
