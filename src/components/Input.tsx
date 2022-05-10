import { GeneratedPropTypes } from '../types';
import { Icon } from './Icon';
import { Text } from './Typography';
import { colors } from '../theme/colors';
import { generateProps } from 'styled-gen';
import { inputWrapperStyle } from '../theme/fx';
import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

export type InputProps = {
    as?: any;
    disabled?: boolean;
    hint?: string;
    icon?: string;
    onBlur?: Function;
    onFocus?: Function;
    rows?: number | string;
    withError?: boolean;
    wrapperProps?: GeneratedPropTypes;
} & { [key: string]: any };

const InputElement = styled.input`
    width: 100%;
`;

const InputBoxWrapper = styled.div<GeneratedPropTypes & { [key: string]: any }>`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    ${inputWrapperStyle};
    ${generateProps}
`;

export const Input = React.forwardRef((props: InputProps, ref) => {
    const { hint, icon, onFocus, onBlur, rows, withError, wrapperProps, ...inputProps } = props;

    const [isFocused, setIsFocused] = useState(false);

    const handleBlur = useCallback(
        (event: any) => {
            setIsFocused(false);

            if (typeof onBlur === 'function') {
                return onBlur(event);
            }
        },
        [onBlur]
    );

    const handleFocus = useCallback(
        (event: any) => {
            setIsFocused(true);

            if (typeof onFocus === 'function') {
                return onFocus(event);
            }
        },
        [onFocus]
    );

    const inputExtraProps = useMemo(() => {
        if (!rows) {
            return {};
        }

        return { as: 'textarea', rows };
    }, [rows]);

    return (
        <>
            <InputBoxWrapper
                {...wrapperProps}
                disabled={inputProps.disabled}
                isFocused={isFocused}
                withError={withError}
            >
                {!!icon && <Icon g500 icon={icon} mr={0.5} size={1.25} />}
                <InputElement
                    {...(inputProps || {})}
                    {...inputExtraProps}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    ref={ref}
                />
                {withError && <Icon e500 icon="alertCircle" size={1} />}
            </InputBoxWrapper>
            {!!hint && (
                <Text pt={0.375} sColor={withError ? colors.e500 : colors.g500} small>
                    {hint}
                </Text>
            )}
        </>
    );
});

Input.displayName = 'Input';
