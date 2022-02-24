import { FlattenSimpleInterpolation, css } from 'styled-components';
import { MqProp } from '..';
import { mq } from 'styled-gen';

const bps = {
    lg: 'desktop',
    md: 'tabletLandscape',
    sm: 'tablet',
    xs: 'phone'
} as const;

const applyCallBack = (callback: Function | string | FlattenSimpleInterpolation, value?: any) =>
    typeof callback === 'function' ? callback(value) : callback;

const applyMqProps = (prop: MqProp<any>, callback: Function | string | FlattenSimpleInterpolation) => {
    if (typeof prop === 'string' || typeof prop === 'number' || Array.isArray(prop)) {
        return css`
            ${applyCallBack(callback, prop)};
        `;
    }

    const styleArr = Object.entries(bps).reduce((results: string[], [bpShort, bpName]) => {
        if (!prop?.[bpShort] && !prop?.[bpName]) {
            return results;
        }

        if (bpShort === 'xs' && !!prop?.xs) {
            return [
                ...results,
                css`
                    ${applyCallBack(callback, prop.xs)};
                `
            ];
        }

        return [
            ...results,
            !!prop[bpShort]
                ? mq.from(
                      bpShort,
                      css`
                          ${applyCallBack(callback, prop[bpShort])}
                      `
                  )
                : mq?.[bpName](css`
                      ${applyCallBack(callback, prop[bpName])}
                  `)
        ];
    }, []);

    return css`
        ${styleArr};
    `;
};

export default applyMqProps;
