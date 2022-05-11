import { Avatar } from '../Avatar';
import { Box } from '../Box';
import { CircledIcon } from '../CircledIcon';
import { Icon } from '../Icon';
import { Text } from '../Typography';
import { colors } from '../../theme';
import { mq } from 'styled-gen';
import { useSidebarMobile } from './Sidebar';
import React from 'react';
import styled, { css } from 'styled-components';

const SidebarUserButtonWrapper = styled.a<{ isActive?: boolean }>`
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

export type SidebarUserButtonProps = {
    address: string;
    isActive?: boolean;
    currency?: string;
    photo?: {
        url?: string;
    };
    name?: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export const SidebarUserButton: React.FC<SidebarUserButtonProps> = props => {
    const { address, isActive, currency, photo, name, onClick, ...forwardProps } = props;

    const { setIsActive } = useSidebarMobile();

    const handleClick = (event: any) => {
        setIsActive(false);

        if (typeof onClick === 'function') {
            return onClick(event);
        }
    };

    return (
        <SidebarUserButtonWrapper isActive={isActive} {...forwardProps} onClick={handleClick}>
            {photo?.url ? <Avatar url={photo?.url} /> : <CircledIcon icon="user" />}
            <Box ml={1}>
                {!!name && (
                    <Text g700 semibold>
                        {name}
                    </Text>
                )}
                <Text g700>
                    {address}
                    {!!currency ? ` · ${currency}` : ''}
                </Text>
            </Box>
            <Icon g400 icon="chevronRight" ml="auto" size={1.5} />
        </SidebarUserButtonWrapper>
    );
};
