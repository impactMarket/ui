import { colors } from '../theme/colors';
import { css } from 'styled-components';

export const stateTypes = ['error', 'info', 'success', 'warning'] as const;

export type StateTypes = typeof stateTypes[number];

type Color = keyof typeof colors;

export const applyStateColor = (type: StateTypes) => {
    const typePrefix = type === 'info' ? 'p' : type.charAt(0);

    return css`
        color: ${colors[`${typePrefix}600` as Color]};
        background-color: ${colors[`${typePrefix}100` as Color]};
    `;
};
