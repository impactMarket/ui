/* eslint-disable no-nested-ternary */
import { colors } from '../theme/colors';
import { css } from 'styled-components';

export const stateTypes = ['error', 'info', 'success', 'warning', 'system'] as const;

export type StateTypes = typeof stateTypes[number];

type Color = keyof typeof colors;

const getTypePrefix = (type: StateTypes) => {
    return type === 'info' ? 'p' : type === 'system' ? 'g' : type.charAt(0);
};

export const applyStateColor = (type: StateTypes) => {
    const typePrefix = getTypePrefix(type);

    return css`
        color: ${colors[`${typePrefix}600` as Color]};
        background-color: ${colors[`${typePrefix}100` as Color]};
    `;
};

export const applyAlertStateColor = (type: StateTypes) => {
    const typePrefix = getTypePrefix(type);

    return css`
        color: ${colors[`${typePrefix}700` as Color]};
        background-color: ${colors[`${typePrefix}25` as Color]};
        border-color: ${colors[`${typePrefix}300` as Color]};
    `;
};

export const applyProgressBarStateColor = (type: StateTypes) => {
    const typePrefix = getTypePrefix(type);
    const colorCode = typePrefix === 'p' ? 400 : typePrefix === 'w' ? 300 : typePrefix === 'e' ? 500 : 600;

    return css`
        background-color: ${colors[`${typePrefix}${colorCode}` as Color]};
    `;
};

export const applyLabelStateColor = (type: StateTypes) => {
    const typePrefix = getTypePrefix(type);

    return css`
        color: ${colors[`${typePrefix}700` as Color]};
        background-color: ${colors[`${typePrefix}50` as Color]};
    `;
};

export const applyDotStateColor = (type: StateTypes) => {
    const typePrefix = getTypePrefix(type);

    return css`
        background-color: ${colors[`${typePrefix}500` as Color]};
    `;
};
