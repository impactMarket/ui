import { GeneratedPropTypes } from '../types';
import { Icon } from './Icon';
import { Text } from './Typography';
import { colors } from '../theme/colors';
import { ease, generateProps, mq, transitions } from 'styled-gen';
import { flyoutMenuShadow, fonts, inputWrapperStyle } from '../theme';
import { position } from 'polished';
import { useClickOutside } from '../hooks/useClickOutside';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

type Value = string | number;

type OptionType = {
    label?: string;
    value: string;
};

export type SelectProps = {
    clearLabel?: string | Function;
    hint?: string;
    isClearable?: boolean;
    isMultiple?: boolean;
    onBlur?: Function;
    onChange?: Function;
    onFocus?: Function;
    options?: OptionType[];
    optionsSearchPlaceholder?: string;
    renderLabel: Function;
    renderOption?: Function;
    value?: Value | Value[];
    withError?: boolean;
    withOptionsSearch?: boolean;
} & GeneratedPropTypes;

// #region ====== style ===
const SelectedOptionContent = styled.div`
    margin-right: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    & > * {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

const InputWrapper = styled.a<{ isFocused?: boolean; withError?: boolean } & GeneratedPropTypes>`
    align-items: center;
    display: flex;
    justify-content: space-between;

    ${inputWrapperStyle};
`;

const Option = styled.a<{ isActive?: boolean }>`
    display: flex;
    padding: 0.625rem 0.875rem;
    background-color: ${colors.n01};
    justify-content: space-between;
    align-items: center;

    ${({ isActive }) =>
        isActive
            ? css`
                  background-color: ${colors.p25};
              `
            : css`
                  &:hover {
                      background-color: ${colors.p100};
                  }
              `}
`;

const OptionsContent = styled.div`
    overflow-y: auto;
    max-height: 15rem;

    ${mq.tablet(css`
        max-height: 17.25rem;
    `)}
`;

const OptionsWrapper = styled.div<{ isActive?: boolean; withOptionsSearch?: boolean }>`
    ${transitions('all', 250, ease.inOutCubic)};

    background-color: ${colors.n01};
    opacity: 0;
    overflow: hidden;
    padding-top: ${({ withOptionsSearch }) => (withOptionsSearch ? '2.75rem' : 0)};
    position: absolute;
    transform: translateY(1.5rem);
    visibility: hidden;
    width: 100%;
    z-index: 1;
    border-radius: 0.5rem;
    top: 100%;

    ${({ isActive }) =>
        isActive &&
        css`
            opacity: 1;
            visibility: visible;
            transform: translateY(0.5rem);
        `}

    ${flyoutMenuShadow};
`;

const SearchInput = styled.div`
    ${position('absolute', 0, 0, null, 0)};

    background-color: ${colors.n01};
    display: flex;
    padding: 0.625rem 0.875rem;

    input {
        color: ${colors.g900};
        font-family: ${fonts.families.sans};
        font-size: 1rem;
        width: 100%;

        ::placeholder,
        ::-webkit-input-placeholder {
            color: ${colors.g500};
        }
        :-ms-input-placeholder {
            color: ${colors.g500};
        }
    }
`;

const Wrapper = styled.div`
    position: relative;

    ${generateProps};
`;
// #endregion === style ===

export const Select = React.forwardRef((props: SelectProps, ref) => {
    const {
        clearLabel,
        hint,
        isClearable,
        isMultiple,
        onBlur,
        onChange,
        onFocus,
        options,
        optionsSearchPlaceholder,
        renderLabel,
        renderOption,
        value,
        withError,
        withOptionsSearch,
        ...wrapperProps
    } = props;

    const [filteredOptions, setFilteredOptions] = useState(options || []);
    const [filterTerm, setFilterTerm] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const optionsListRef = useRef();

    const checkIfActive = (option: OptionType) =>
        !isMultiple || !Array.isArray(value) ? value === option?.value : (value as Value[]).includes(option?.value);

    const getLabelValue = () => {
        return !isMultiple
            ? options?.find(option => option?.value === value)
            : options?.filter(option => (value as Value[]).includes(option?.value));
    };

    const handleBlur = useCallback(
        (event?: any) => {
            setIsFocused(false);

            if (typeof onBlur === 'function') {
                return onBlur(event);
            }
        },
        [onBlur]
    );

    const handleChange = (option?: OptionType) => {
        if (typeof onChange !== 'function') {
            return;
        }

        const { value: optionValue } = option || {};

        if (typeof option === 'undefined') {
            return onChange(isMultiple ? [] : undefined);
        }

        if (!isMultiple) {
            setIsActive(false);

            return onChange(optionValue);
        }

        const newValueArray = (value as Value[]).includes(optionValue as any)
            ? ((value || []) as Value[]).filter(pickedValue => pickedValue !== optionValue)
            : [...(value as Value[]), optionValue];

        return onChange(newValueArray);
    };

    const handleFocus = useCallback(
        (event?: any) => {
            setIsFocused(true);

            if (typeof onFocus === 'function') {
                return onFocus(event);
            }
        },
        [onFocus]
    );

    const handleClickOutside = () => {
        if (!isActive) {
            return;
        }

        return setIsActive(false);
    };

    const hasOptionSelected = () =>
        (typeof value !== 'undefined' && value !== null && value !== '') || (Array.isArray(value) && value?.length);

    useClickOutside(optionsListRef?.current, handleClickOutside);

    useEffect(() => {
        setFilteredOptions(options || []);
    }, [options]);

    useEffect(() => {
        if (isActive) {
            handleFocus();
        }

        if (!isActive) {
            handleBlur();
        }
    }, [isActive]);

    useEffect(() => {
        if (filterTerm) {
            const filteredOptions = options?.filter(
                ({ label, value }) =>
                    label?.toLowerCase()?.includes(filterTerm.toLowerCase()) ||
                    value.toString().includes(filterTerm.toLowerCase())
            );

            setFilteredOptions(filteredOptions || []);
        } else {
            setFilteredOptions(options || []);
        }
    }, [filterTerm]);

    return (
        <Wrapper {...wrapperProps} ref={ref as any}>
            <InputWrapper isFocused={isFocused} onClick={() => setIsActive(!isActive)} withError={withError}>
                <SelectedOptionContent>{renderLabel({ isFocused, selected: getLabelValue() })}</SelectedOptionContent>
                <Icon g500 icon={isActive ? 'chevronUp' : 'chevronDown'} size={1.25} />
            </InputWrapper>
            <OptionsWrapper isActive={isActive} ref={optionsListRef as any} withOptionsSearch={withOptionsSearch}>
                <OptionsContent>
                    {withOptionsSearch && (
                        <SearchInput>
                            <Icon g500 icon="search" pr={0.5} size={1.5} />
                            <input
                                onChange={event => setFilterTerm(event?.target?.value)}
                                placeholder={optionsSearchPlaceholder || ''}
                                type="text"
                                value={filterTerm || ''}
                            />
                        </SearchInput>
                    )}
                    {isClearable && !!clearLabel && (
                        <Option onClick={() => handleChange()}>
                            {typeof clearLabel === 'function' ? (
                                clearLabel({ hasOptionSelected: hasOptionSelected() })
                            ) : (
                                <Text g900>{clearLabel}</Text>
                            )}
                        </Option>
                    )}
                    {filteredOptions.map((option: OptionType, index: any) => (
                        <Option isActive={checkIfActive(option)} key={index} onClick={() => handleChange(option)}>
                            {typeof renderOption === 'function' ? (
                                renderOption({ isActive: checkIfActive(option), ...option })
                            ) : (
                                <>
                                    <Text g900>{option?.label || option?.value}</Text>
                                    {checkIfActive(option) && <Icon icon="check" ml={0.5} p600 size={1.25} />}
                                </>
                            )}
                        </Option>
                    ))}
                </OptionsContent>
            </OptionsWrapper>
            {!!hint && (
                <Text pt={0.375} sColor={withError ? colors.e500 : colors.g500} small>
                    {hint}
                </Text>
            )}
        </Wrapper>
    );
});

Select.displayName = 'Select';
