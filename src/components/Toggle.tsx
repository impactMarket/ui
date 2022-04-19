import { GeneratedPropTypes } from '../types';
import { colors } from '../theme';
import { ease, generateProps, transitions } from 'styled-gen';
import { rgba, size } from 'polished';
import React, { useCallback } from 'react';
import styled from 'styled-components';

export type ToggleProps = {
    wrapperProps?: GeneratedPropTypes;
} & { [key: string]: any };

const ToggleControl = styled.div<{ isActive?: boolean }>`
    ${size('1rem')};
    ${transitions('left', 250, ease.inOutCubic)};

    background-color: ${colors.n01};
    border-radius: 50%;
    box-shadow: 0 0.0625rem 0.125rem ${rgba(colors.g900, 0.1)}, 0 0.0625rem 0.1875rem ${rgba(colors.g900, 0.06)};
    left: ${({ isActive }) => (!isActive ? '0.125rem' : '1.125rem')};
    position: absolute;
`;

const ToggleSlider = styled.a<{ isActive?: boolean }>`
    ${size('1.25rem', '2.25rem')};
    ${transitions('background-color', 250, ease.inOutCubic)};

    align-items: center;
    background-color: ${({ isActive }) => (!isActive ? colors.g100 : colors.p600)};
    border-radius: 0.625rem;
    display: flex;
    overflow: hidden;
    position: relative;
`;

const ToggleInput = styled.input`
    display: none !important;
    z-index: -10 !important;
`;

const ToggleWrapper = styled.div<GeneratedPropTypes & { [key: string]: any }>`
    display: inline-flex;

    ${generateProps}
`;

export const Toggle: React.FC<ToggleProps> = props => {
    const { children, isActive, onChange, wrapperProps, ...inputProps } = props;

    const handleChange = useCallback(() => {
        onChange(!isActive);
    }, [onChange, isActive]);

    return (
        <ToggleWrapper {...wrapperProps}>
            <ToggleSlider isActive={isActive} onClick={handleChange}>
                <ToggleControl isActive={isActive} />
            </ToggleSlider>
            <ToggleInput {...inputProps} type="checkbox" value={isActive} />
            {children}
        </ToggleWrapper>
    );
};
