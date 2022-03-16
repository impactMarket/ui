import { Box } from './Box';
import { GeneratedPropTypes } from '../types';
import { Icon } from './Icon';
import { Text } from './Typography';
import { colors } from '../theme';
import { ease, mq, transitions } from 'styled-gen';
import { position } from 'polished';
import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

// #region ====== style ===
const AccordionItemContent = styled.div<{ isActive?: boolean; elHeight?: number }>`
    ${transitions('height', 350, ease.inOutCubic)};

    height: ${({ elHeight, isActive }) => (isActive ? (elHeight || 0) / 16 : 0)}rem;
    overflow: hidden;
    position: relative;
`;

const AccordionItemHeading = styled.a`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;

    ${mq.tabletLandscape(css`
        padding: 1.5rem 0;
    `)}
`;

const AccordionItemInnerContent = styled.div`
    ${position('absolute', 0, 0, null, 0)};

    padding-bottom: 1rem;
    width: 100%;

    ${mq.tabletLandscape(css`
        padding: 1.5rem 0;
        padding-bottom: 1.5rem;
    `)}
`;

const AccordionItemWrapper = styled.div`
    border-top: 1px solid ${colors.g200};
    width: 100%;

    &:last-of-type {
        border-bottom: 1px solid ${colors.g200};
    }
`;
// #endregion === style ===

export type AccordionItemProps = {
    children: any;
    handleItemClick?: any;
    isActive?: boolean;
    title: string;
};

export const AccordionItem: React.FC<AccordionItemProps> = props => {
    const { children, handleItemClick, isActive, title } = props;

    const contentRef = useRef<any>();

    return (
        <AccordionItemWrapper>
            <AccordionItemHeading onClick={handleItemClick}>
                <Text g800 large medium pr={1.5}>
                    {title}
                </Text>
                <Icon icon={isActive ? 'minusCircle' : 'plusCircle'} p400 size={1.5} />
            </AccordionItemHeading>
            <AccordionItemContent elHeight={contentRef?.current?.clientHeight} isActive={isActive}>
                <AccordionItemInnerContent ref={contentRef}>{children}</AccordionItemInnerContent>
            </AccordionItemContent>
        </AccordionItemWrapper>
    );
};

AccordionItem.defaultProps = {
    handleItemClick: () => {},
    isActive: false
};

export type AccordionProps = {
    children: React.ReactNode | React.ReactNode[];
} & GeneratedPropTypes;

export const Accordion: React.FC<AccordionProps> = props => {
    const { children, ...forwardProps } = props;

    const [activeItem, setActiveItem] = useState<number | undefined>();

    return (
        <Box w="100%" {...forwardProps}>
            {React.Children.toArray(children).map((child: any, index) =>
                React.cloneElement(child, {
                    ...child?.props,
                    handleItemClick: () => setActiveItem(activeItem !== index ? index : undefined),
                    isActive: activeItem === index
                })
            )}
        </Box>
    );
};
