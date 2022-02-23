import { FlattenSimpleInterpolation, css } from 'styled-components';

const prepend: any = (type?: string) => {
    if (!type) {
        return;
    }

    if (['start', 'end'].includes(type)) {
        return `flex-${type}`;
    }

    if (['around', 'between', 'evenly'].includes(type)) {
        return `space-${type}`;
    }

    return type;
};

const propShorts = ['start', 'end', 'around', 'between', 'evenly', 'stretch', 'unset'] as const;

type FlexPropsShort = typeof propShorts[number];

export type FlexLayoutType =
    | 'null start'
    | 'null end'
    | 'null around'
    | 'null between'
    | 'null evenly'
    | 'null stretch'
    | 'null unset'
    | 'start null'
    | 'start'
    | 'start end'
    | 'start around'
    | 'start between'
    | 'start evenly'
    | 'start stretch'
    | 'start unset'
    | 'end null'
    | 'end start'
    | 'end'
    | 'end around'
    | 'end between'
    | 'end evenly'
    | 'end stretch'
    | 'end unset'
    | 'around null'
    | 'around start'
    | 'around end'
    | 'around'
    | 'around between'
    | 'around evenly'
    | 'around stretch'
    | 'around unset'
    | 'between null'
    | 'between start'
    | 'between end'
    | 'between around'
    | 'between'
    | 'between evenly'
    | 'between stretch'
    | 'between unset'
    | 'evenly null'
    | 'evenly start'
    | 'evenly end'
    | 'evenly around'
    | 'evenly between'
    | 'evenly'
    | 'evenly stretch'
    | 'evenly unset'
    | 'stretch null'
    | 'stretch start'
    | 'stretch end'
    | 'stretch around'
    | 'stretch between'
    | 'stretch evenly'
    | 'stretch'
    | 'stretch unset'
    | 'unset null'
    | 'unset start'
    | 'unset end'
    | 'unset around'
    | 'unset between'
    | 'unset evenly'
    | 'unset stretch'
    | 'unset';

// eslint-disable-next-line no-unused-vars
type FlexLayout = (vertical: FlexPropsShort, horizontal: FlexPropsShort) => FlattenSimpleInterpolation;

export const flexLayout: FlexLayout = (vertical = 'start', horizontal = 'start') => {
    return css`
        align-items: ${prepend(vertical)};
        justify-content: ${prepend(horizontal)};
    `;
};
