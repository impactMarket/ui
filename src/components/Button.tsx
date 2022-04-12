import { BoolProps, Breakpoint, GeneratedPropTypes } from '../types';
import { Icon } from '../components/Icon';
import { Spinner } from './Spinner';
import { colors } from '../theme/colors';
import { ease, generateProps, mq, transitions, variations } from 'styled-gen';
import { fonts } from '../theme';
import { rgba } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';

type ColorVariationHelperFnProps = {
    backgroundColor?: string;
    borderColor?: string;
    boxShadow?: string;
    color?: string;
    hover?: {
        backgroundColor?: string;
        borderColor?: string;
        color?: string;
    };
};

const setColorVariation = ({
    backgroundColor,
    borderColor,
    boxShadow,
    color,
    hover
}: ColorVariationHelperFnProps) => css`
    background-color: ${backgroundColor};
    box-shadow: ${boxShadow || `0 0.0625rem 0.125rem ${rgba(colors.g900, 0.05)}`};
    border: 1px solid ${borderColor || backgroundColor || 'transparent'};
    color: ${color};

    .button-spinner {
        background-color: ${backgroundColor || colors?.n01};
    }

    ${({ isDisabled }: any) =>
        !isDisabled &&
        css`
            ${mq.tabletLandscape(css`
                &:not(:disabled) {
                    &:hover {
                        background-color: ${hover?.backgroundColor};
                        border: 1px solid ${hover?.borderColor || hover?.backgroundColor || 'transparent'};
                        color: ${hover?.color};
                    }
                }
            `)}
        `}
`;

export const buttonColorVariations = {
    default: setColorVariation({
        backgroundColor: colors.p600,
        color: colors.n01,
        hover: {
            backgroundColor: colors.p700
        }
    }),

    gray: setColorVariation({
        backgroundColor: colors.n01,
        borderColor: colors.g300,
        color: colors.g700,
        hover: {
            backgroundColor: colors.g50
        }
    }),

    secondary: setColorVariation({
        backgroundColor: colors.p50,
        color: colors.p700,
        hover: {
            backgroundColor: colors.p200
        }
    })
};

export const buttonSizeVariations = {
    default: css`
        .button-content {
            font-size: 0.875rem;
            line-height: 1.25rem;
            padding: 0.625rem 1rem;

            & > svg {
                height: 1rem;
                width: auto;
            }
        }

        .spinner {
            height: 1.5rem;
            width: 1.5rem;
        }
    `,

    large: css`
        .button-content {
            font-size: 1.125rem;
            line-height: 1.75rem;
            padding: 1rem 1.75rem;

            & > svg {
                height: 1.25rem;
                width: auto;
            }
        }

        .spinner {
            height: 2rem;
            width: 2rem;
        }
    `
};

type ButtonBaseProps = {
    as?: any;
    className?: string;
    children?: any | any[];
    disabled?: boolean;
    href?: string;
    icon?: string;
    fluid?: Breakpoint | boolean;
    // eslint-disable-next-line no-unused-vars
    onClick?: any;
    reverse?: boolean;
    isLoading?: boolean;
    title?: string;
    type?: string;
};

type ButtonColorVariations = BoolProps<typeof buttonColorVariations>;
type ButtonSizeVariations = BoolProps<typeof buttonSizeVariations>;

export type ButtonProps = GeneratedPropTypes & ButtonBaseProps & ButtonColorVariations & ButtonSizeVariations;

const ButtonContent = styled.span<{ reverse?: boolean }>`
    display: flex;
    align-items: center;
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
`;

const ButtonSpinnerWrapper = styled.div<{ isLoading?: boolean }>`
    align-items: center;
    display: ${({ isLoading }) => (isLoading ? 'flex' : 'none')};
    height: 100%;
    justify-content: center;
    position: absolute;
    width: 100%;
`;

const ButtonWrapper = styled.button<ButtonProps>`
    ${transitions(['background-color', 'border-color', 'box-shadow', 'color'], 250, ease.outSine)};

    align-items: center;
    border-radius: 0.5rem;
    display: inline-flex;
    flex-shrink: 0;
    font-family: ${fonts.families.sans};
    font-weight: ${fonts.weights.medium};
    justify-content: center;
    outline: 0;
    overflow: hidden;
    position: relative;

    &:not(:disabled) {
        &:hover {
            cursor: pointer;
        }
    }

    &:disabled {
        cursor: not-allowed !important;
    }

    ${({ fluid }) =>
        (typeof fluid === 'boolean' && fluid) || fluid === 'xs'
            ? css`
                  width: 100%;
              `
            : fluid &&
              mq.upTo(
                  fluid,
                  css`
                      width: 100%;
                  `
              )}

    ${variations(buttonColorVariations)};
    ${variations(buttonSizeVariations)};

    ${generateProps}
`;

export const Button = (props: ButtonProps) => {
    const { children, href, icon, isLoading, reverse, ...forwardProps } = props;

    return (
        <ButtonWrapper as={href ? 'a' : 'button'} href={href} {...forwardProps}>
            <ButtonSpinnerWrapper className="button-spinner" isLoading={isLoading}>
                <Spinner isActive={isLoading} />
            </ButtonSpinnerWrapper>
            <ButtonContent className="button-content" reverse={reverse}>
                {icon && <Icon icon={icon} ml={reverse ? 0.5 : 0} mr={!reverse ? 0.5 : 0} />}
                {children}
            </ButtonContent>
        </ButtonWrapper>
    );
};
