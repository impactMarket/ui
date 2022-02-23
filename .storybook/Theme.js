import { create } from '@storybook/theming';
import { colors, fonts } from '../src/theme';
import logo from '../.public/impactMarket-logo.svg';

export default create({
  base: 'light',

  colorPrimary: colors.p500,
  colorSecondary: colors.p500,

  // UI
  appBg: colors.n01,
  appContentBg: colors.g50,
  appBorderColor: colors.g200,
  appBorderRadius: 0,

  // Typography
  fontBase: fonts.families.sans,
  fontCode: 'monospace',

  // Text colors
  textColor: colors.g900,
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: colors.g500,
  barSelectedColor: colors.p700,
  barBg: colors.g50,

  // Form colors
  inputBg: colors.n01,
  inputBorder: colors.g200,
  inputTextColor: colors.g900,
  inputBorderRadius: 2,

  brandTitle: 'impactMarket Design System',
  brandUrl: 'https://impactmarket.com',
  brandImage: logo
});
