/* eslint-disable no-nested-ternary */
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
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    padding: 1rem;
    position: relative;
    width: 100%;

    ${variations(alertColorVariations)};
    ${generateProps};
`;

const AlertCloseWrapper = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
`;
// #endregion === style ===

export type AlertProps = {
    button?: any;
    icon: string;
    title?: string | React.ReactNode;
    message?: string | React.ReactNode;
    handleClose?: any;
} & BoolPropsFromArray<typeof stateTypes> &
    GeneratedPropTypes;

export const Alert: React.FC<AlertProps> = props => {
    const { button, icon, title, message, handleClose, ...forwardProps } = props;

    const hasButton = !!button;
    const hasClose = !hasButton && typeof handleClose === 'function';

    return (
        <AlertWrapper {...forwardProps}>
            <Box fLayout="center between" fWrap="wrap" flex>
                <Box
                    fDirection={{ sm: 'row', xs: 'column' }}
                    fLayout={{ sm: 'center start', xs: 'start' }}
                    flex
                    w={{ sm: hasButton ? '75%' : '100%', xs: '100%' }}
                >
                    <Box pb={{ sm: 0, xs: 0.75 }} pr={0.875}>
                        <Icon icon={icon} />
                    </Box>
                    <Box>
                        {title && (
                            <Text mb={message ? 0.25 : 0} semibold small>
                                {title}
                            </Text>
                        )}
                        {message && <Text small>{message}</Text>}
                    </Box>
                </Box>
                {hasButton && (
                    <Box
                        pl={{ sm: 0.875, xs: 0 }}
                        pt={{ sm: 0, xs: 0.75 }}
                        tAlign={{ sm: 'right', xs: 'left' }}
                        w={{ sm: hasButton ? '25%' : '100%', xs: '100%' }}
                    >
                        {button}
                    </Box>
                )}
            </Box>
            {hasClose && (
                <AlertCloseWrapper>
                    <a onClick={handleClose}>
                        <Icon icon="close" />
                    </a>
                </AlertCloseWrapper>
            )}
        </AlertWrapper>
    );
};
