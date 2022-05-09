/* eslint-disable sort-keys */
import { CountryFlag as BaseCountryFlag } from '../../../components/CountryFlag';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../../helpers/generatedPropArgs';
import React from 'react';
import base from 'paths.macro';
// import flags from '../../../../flags';

export default {
    argTypes: {
        // countryCode: {
        //     control: { type: 'select' },
        //     options: Object.keys(flags)
        // },
        size: {
            control: { type: 'object' }
        },
        ...setGeneratedPropArgs()
    },
    parameters: {
        generator: true
    },
    title: `Components/${base.replace('/src/stories/2-base/', '')}CountryFlag`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => <BaseCountryFlag {...getGeneratedPropArgs(args)} />;

export const CountryFlag = Template.bind({});
CountryFlag.storyName = 'CountryFlag';
CountryFlag.args = {
    // countryCode: 'PT',
    size: [2, 2]
};
