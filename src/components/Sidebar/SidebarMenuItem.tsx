import { Icon } from '../Icon';
import { Text } from '../Typography';
import { colors } from '../../theme/colors';
import { mq } from 'styled-gen';
import { rgba } from 'polished';
import { useSidebarMobile } from './Sidebar';
import React from 'react';
import styled, { css } from 'styled-components';

const Flag = styled.div`
    align-items: center;
    background-color: ${rgba(colors.p500, 0.15)};
    border-radius: 1rem;
    color: ${colors.p800};
    display: inline-flex;
    flex-shrink: 0;
    justify-content: center;
    margin-left: auto;
    min-height: 1.5rem;
    padding: 0 0.625rem;
`;

const Item = styled.a<{ isActive?: boolean }>`
    align-items: center;
    background-color: ${({ isActive }) => isActive && colors.p50};
    border-radius: 0.375rem;
    color: ${({ isActive }) => (isActive ? colors.p600 : colors.g700)};
    cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')} !important;
    display: flex;
    padding: 0.5rem 0.75rem;

    svg {
        color: ${({ isActive }) => (isActive ? colors.p700 : colors.g500)};
    }

    ${({ isActive }) =>
        !isActive &&
        css`
            ${mq.tabletLandscape(css`
                &:hover {
                    background-color: ${colors.p25};
                }
            `)};
        `}
`;

export type SidebarMenuItemProps = {
    children?: React.ReactNode;
    flag?: string | number | React.ReactNode;
    icon?: string;
    isActive?: boolean;
    label?: string | React.ReactNode;
} & React.HTMLAttributes<HTMLAnchorElement>;

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = props => {
    const { children, flag, icon, label, onClick, ...forwardProps } = props;

    const { setIsActive } = useSidebarMobile();

    const handleClick = (event: any) => {
        setIsActive(false);

        if (typeof onClick === 'function') {
            return onClick(event);
        }
    };

    return (
        <Item {...forwardProps} onClick={handleClick}>
            {!!icon && <Icon icon={icon} mr={0.75} size={1.5} />}
            {!!label && <Text medium>{label}</Text>}
            {children}
            {!!flag && (
                <Flag>
                    <Text medium small>
                        {flag}
                    </Text>
                </Flag>
            )}
        </Item>
    );
};
