/* eslint-disable sort-keys */
import { AvatarProps, Avatar as BaseAvatar, avatarSizeVariations } from '../../../components/Avatar';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../../helpers/generatedPropArgs';
import { stateTypes } from '../../../helpers/applyStateColor';
import React from 'react';
import base from 'paths.macro';

export default {
    argTypes: {
        dot: {
            control: { type: 'select' },
            options: stateTypes
        },
        size: {
            control: { type: 'radio' },
            description: 'Pass as bool prop',
            options: Object.keys(avatarSizeVariations)
        },
        ...setGeneratedPropArgs()
    },
    parameters: {
        generator: true
    },
    title: `Components/${base.replace('/src/stories/2-base/', '')}Avatar`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const props = Object.values(args).reduce((results, prop) => ({ ...(results as any), [prop as string]: true }), {
        ...getGeneratedPropArgs(args)
    }) as AvatarProps;

    return (
        <>
            <BaseAvatar {...props} />
        </>
    );
};

export const Avatar = Template.bind({});
Avatar.args = {
    url: 'https://picsum.photos/120'
};
