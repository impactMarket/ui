/* eslint-disable no-nested-ternary */
import { Badge, BadgeProps } from './Badge';
import { Box } from './Box';
import { Card } from './Card';
import { GeneratedPropTypes } from '../types';
import { Text } from './Typography';
import { colors } from '../theme/colors';
import { position, rgba } from 'polished';
import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
    border-radius: 0.25rem;
    height: 11.625rem;
    overflow: hidden;
    padding: 1rem;
    width: 100%;
    position: relative;

    img {
        ${position('absolute', 0)};

        display: block;
        height: 100%;
        object-fit: cover;
        width: 100%;
        z-index: 0;
    }
`;

export type ComposedCardProps = {
    badgeProps?: BadgeProps;
    children?: any;
    content?: any;
    heading?: any;
    image?: string;
    imageBackgroundColor?: string;
    label?: string;
} & GeneratedPropTypes;

export const ComposedCard: React.FC<ComposedCardProps> = props => {
    const { badgeProps, content, children, heading, image, imageBackgroundColor, label, ...forwardProps } = props;

    return (
        <Card padding={0.75} {...forwardProps}>
            <ImageWrapper style={{ backgroundColor: imageBackgroundColor }}>
                {!!image && <img alt="" src={image} />}
                {!!label && (
                    <Badge {...badgeProps} relative>
                        {label}
                    </Badge>
                )}
            </ImageWrapper>
            {!!heading && (
                <Text as="div" bold g900 mt={0.75}>
                    {heading}
                </Text>
            )}
            {!!content && (
                <Text as="div" g500 medium mt={0.5} small>
                    {content}
                </Text>
            )}
            {!!children && <Box mt={0.75}>{children}</Box>}
        </Card>
    );
};

ComposedCard.defaultProps = {
    badgeProps: {
        bgP50: true,
        p700: true
    },
    imageBackgroundColor: rgba(colors.p100, 0.2)
};
