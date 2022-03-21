import { BoolPropsFromArray, GeneratedPropTypes } from '../types';
import { Box } from './Box';
import { Icon } from './Icon';
import { StateTypes, applyAlertStateColor, stateTypes } from '../helpers/applyStateColor';
import { Text } from './Typography';
import { generateProps, variations } from 'styled-gen';
import React from 'react';
import styled from 'styled-components';

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
    onClick?: any;
} & BoolPropsFromArray<typeof stateTypes> &
    GeneratedPropTypes;

export const Alert: React.FC<AlertProps> = props => {
    const { allowClose, icon, children, onClick, ...forwardProps } = props;

    return (
        <Box w="100%">
            <AlertWrapper {...forwardProps}>
                <AlertIconsWrapper>
                    <Icon icon={icon} />
                    {allowClose && <Icon icon="close" onClick={onClick} />}
                </AlertIconsWrapper>
                <Text mt={0.875}>{children}</Text>
            </AlertWrapper>
        </Box>
    );
};
