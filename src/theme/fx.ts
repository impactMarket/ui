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

const placeholderStyle = css`
    color: ${colors.g500};
`;

export const inputWrapperStyle = css`
    background-color: ${colors.n01};
    border-radius: 0.5rem;
    box-shadow: 0 0.125rem 0.0625rem ${rgba(colors.g900, 0.05)}, 0 0 0 1px ${colors.g300};
    outline: 0;
    padding: 0.625rem 0.875rem;

    ${({ isFocused }: any) =>
        isFocused &&
        css`
            box-shadow: 0 0.125rem 0.0625rem ${rgba(colors.g900, 0.05)}, 0 0 0 1px ${colors.g400};
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
        color: ${colors.g900};
        font-family: ${fonts.families.sans};
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
