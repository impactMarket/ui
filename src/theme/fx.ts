import { colors } from '../theme/colors';
import { css } from 'styled-components';
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
