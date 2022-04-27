import { colors } from '../theme/colors';
import { css } from 'styled-components';
import { fonts } from './fonts';
import { rgba } from 'polished';

export const baseShadow = css`
    box-shadow: 0 0.0625rem 0.1875rem ${rgba(colors.g900, 0.1)}, 0 0.0625rem 0.125rem ${rgba(colors.g900, 0.06)};
`;

export const shadowXl = css`
    box-shadow: 0 0.5rem 0.5rem -0.25rem ${rgba(colors.g900, 0.4)}, 0 1.25rem 1.5rem -0.25rem ${rgba(colors.g900, 0.1)};
`;

export const dropdownMenuShadow = css`
    box-shadow: 0 0.063rem 0.125rem ${rgba(colors.g900, 0.4)};
`;

export const flyoutMenuShadow = css`
    box-shadow: 0 0.75rem 1rem -0.25rem ${rgba(colors.g900, 0.1)},
        0 0.25rem 0.375rem -0.125rem ${rgba(colors.g900, 0.05)};
`;

const placeholderStyle = css`
    color: ${colors.g500};
    font-size: 0.875rem;
`;

export const inputWrapperStyle = css`
    background-color: ${({ disabled }: any) => (disabled ? colors.g100 : colors.n01)};
    border-radius: 0.5rem;
    box-shadow: 0 0.125rem 0.0625rem ${rgba(colors.g900, 0.05)}, 0 0 0 1px ${colors.g300};
    outline: 0;
    padding: 0.625rem 0.875rem;

    ${({ isFocused }: any) =>
        isFocused &&
        css`
            box-shadow: 0 0.125rem 0.0625rem ${rgba(colors.g900, 0.05)}, 0 0 0 0.0625rem ${colors.p300},
                0 0 0 0.3125rem ${rgba(colors.p500, 0.1)};
        `}

    ${({ withError }: any) =>
        withError &&
        css`
            box-shadow: 0 0.125rem 0.0625rem ${rgba(colors.g900, 0.05)}, 0 0 0 1px ${colors.e600};
        `}

    input,
    textarea {
        appearance: none;
        background-color: transparent;
        border: none;
        color: ${({ disabled }: any) => (disabled ? colors.g500 : colors.g900)};
        font-family: ${fonts.families.sans};
        font-size: 1rem;
        outline: none;
        resize: none;

        ::placeholder,
        ::-webkit-input-placeholder {
            ${placeholderStyle}
        }
        :-ms-input-placeholder {
            ${placeholderStyle}
        }
    }
`;
