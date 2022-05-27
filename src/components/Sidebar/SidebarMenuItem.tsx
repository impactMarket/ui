import { Icon } from '../Icon';
import { Label } from '../Label';
import { Text } from '../Typography';
import { colors } from '../../theme/colors';
import { mq } from 'styled-gen';
import { useSidebarMobile } from './Sidebar';
import React from 'react';
import styled, { css } from 'styled-components';

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
    uid?: string;
    children?: any;
    flag?: string | number;
    icon?: string;
    isActive?: boolean;
    isVisible?: boolean;
    label?: string | React.ReactNode;
} & React.HTMLAttributes<HTMLAnchorElement>;

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = props => {
    const { children, isActive, flag, icon, label, onClick, ...forwardProps } = props;
    const { setIsActive } = useSidebarMobile();

    const handleClick = (event: any) => {
        setIsActive(false);

        if (isActive) {
            event.preventDefault();
        }

        if (typeof onClick === 'function') {
            return onClick(event);
        }
    };

    return (
        <Item isActive={isActive} {...forwardProps} onClick={handleClick}>
            {!!icon && <Icon icon={icon} mr={0.75} size={1.5} />}
            {!!label && <Text medium>{label}</Text>}
            {children}
            {!!flag && <Label content={flag} />}
        </Item>
    );
};
