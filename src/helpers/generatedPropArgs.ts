/* eslint-disable sort-keys */
import { generator } from '../theme';
import { spaceNames } from '../types';

export const setGeneratedPropArgs = () => {
    return {
        ['Generated Props']: {
            description: '[Generator docs](?path=/story/generator--page)'
        },
        namedProps: {
            control: { type: 'text' },
            description: 'View `namedProps` in generator doc'
        },
        variableProps: {
            control: { type: 'object' },
            description: 'View `variableProps` in generator doc'
        },
        spaceProps: {
            control: { type: 'object' },
            description: 'View `spaceProps` in generator doc'
        }
    };
};

export const getGeneratedPropArgs = (props: any) => {
    const { namedProps, spaceProps, variableProps, ...forwardProps } = props;
    const namedListKeys = generator.namedProps.reduce(
        (results: string[], { prefix, list }: { prefix?: string; list: { [key: string]: any } }) => [
            ...results,
            ...(!prefix
                ? Object.keys(list)
                : Object.keys(list).map(option => `${prefix}${option.charAt(0).toUpperCase() + option.slice(1)}`))
        ],
        []
    );

    const variableListKeys = generator.variableProps.map(({ name }) => name);

    const nProps = (namedProps || '')
        .split(' ')
        .reduce(
            (results: { [key: string]: boolean }, key: string) =>
                namedListKeys.includes(key) ? { ...results, [key]: true } : results,
            {}
        ) as {
        [key: string]: boolean;
    };

    const sProps = Object.entries(spaceProps || {}).reduce(
        (results: { [key: string]: any }, [key, value]: any) =>
            spaceNames.includes(key) ? { ...results, [key]: value } : results,
        {}
    );

    const vProps = Object.entries(variableProps || {}).reduce(
        (results: { [key: string]: any }, [key, value]: any) =>
            variableListKeys.includes(key) ? { ...results, [key]: value } : results,
        {}
    );

    return {
        ...forwardProps,
        ...nProps,
        ...vProps,
        ...sProps
    };
};
