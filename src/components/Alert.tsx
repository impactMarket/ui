import { Box } from './Box';
import { BoolProps, BoolPropsFromArray, GeneratedPropTypes } from '../types';
import { Icon } from './Icon';
import { Text } from './Typography';
import { StateTypes, applyAlertStateColor, stateTypes } from '../helpers/applyStateColor';
import { generateProps, variations } from 'styled-gen';
import { colors } from '../theme';
import { ease, mq, transitions } from 'styled-gen';
import { position } from 'polished';
import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

// #region ====== style ===
const alertColorVariations = stateTypes.reduce(
    (results, type) => ({ ...results, [type === 'info' ? 'default' : type]: applyAlertStateColor(type) }),
    {}
);

const AlertWrapper = styled.div<{ state?: StateTypes } & GeneratedPropTypes>`
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    ${variations(alertColorVariations)};
    ${generateProps};
`;

const AlertIconsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;
// #endregion === style ===

export type AlertProps = {
    allowClose: boolean;
    icon: string;
    children: any | any[];
} & BoolPropsFromArray<typeof stateTypes> &
    GeneratedPropTypes;

export const Alert: React.FC<AlertProps> = props => {
    const { allowClose, icon, children, ...forwardProps } = props;

    return (
        <Box w="100%">
            <AlertWrapper {...forwardProps}>
                <AlertIconsWrapper>
                    <Icon icon={icon} />
                    { allowClose && <Icon icon={'close'} /> }
                </AlertIconsWrapper>
                <Text mt={0.875}>{children}</Text>
            </AlertWrapper>
        </Box>
    );
};
