import { colors } from '../theme/colors';
import { css } from 'styled-components';
import { rgba } from 'polished';

export const baseShadow = css`
    box-shadow: 0 0.0625rem 0.1875rem ${rgba(colors.g900, 0.1)}, 0 0.0625rem 0.125rem ${rgba(colors.g900, 0.06)};
`;
