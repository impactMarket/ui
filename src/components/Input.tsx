import { GeneratedPropTypes } from '../types';
import { Icon } from './Icon';
import { generateProps } from 'styled-gen';
import { inputWrapperStyle } from '../theme/fx';
import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

export type InputProps = {
    as?: any;
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
    flex-wrap: nowrap;

    ${inputWrapperStyle};
    ${generateProps}
`;

export const Input = React.forwardRef((props: InputProps, ref) => {
    const { icon, onFocus, onBlur, rows, withError, wrapperProps, ...inputProps } = props;

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
        <InputBoxWrapper {...wrapperProps} isFocused={isFocused} withError={withError}>
            {!!icon && <Icon g500 icon={icon} mr={0.5} size={1.25} />}
            <InputElement
                {...(inputProps || {})}
                {...inputExtraProps}
                onBlur={handleBlur}
                onFocus={handleFocus}
                ref={ref}
            />
        </InputBoxWrapper>
    );
});

Input.displayName = 'Input';
