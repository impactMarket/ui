import React from 'react';
import { DesignSystemProvider } from '../src/components/DesignSystemProvider';
import { colors } from '../src/theme';
import StoryWrapper from '../src/ui/StoryWrapper';
import { withGenerator } from './generator/register';

const presetColors = Object.entries(colors).map(([title, color]) => ({ color, title }));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    presetColors
  }
}

export const decorators = [
  Story => (
    <DesignSystemProvider>
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    </DesignSystemProvider>
  ),
  withGenerator
];
