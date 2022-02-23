import { createGlobalStyle, css } from 'styled-components';
import { mq } from 'styled-gen';
import reset from 'styled-reset';

import { colors, fonts, typography } from '../theme';

export const GlobalStyle = createGlobalStyle`
  ${reset};

  html {
    overflow-x: hidden;
  }

  html,
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body {
    box-sizing: border-box;
    color: ${colors.g900};
    font-family: ${fonts.families.sans};
    font-size: ${typography.text.base[0] / 16}rem;
    overflow-x: hidden;
    scroll-behavior: smooth;

    -webkit-overflow-scrolling: touch;

    * {
      box-sizing: border-box;
    }

    &.menu-open {
      ${mq.phone(css`
          overflow-y: hidden;
      `)};
    }

    &.loading,
    &.modal-open {
      overflow-y: hidden;
    }
  }

  a {
    outline: 0;
    text-decoration: none;

    &:active,
    &:focus,
    &:hover {
      outline: 0;
    }

    &:not(:disabled) {
      cursor: pointer;
    }
  }

  b, strong {
    font-weight: ${fonts.weights.bold};
  }

  em {
    font-style: italic;
  }

  input {
    border: 0;
    color: ${colors.g700};
    font-family: ${fonts.families.sans};
    font-size: 14px;
    outline: 0;

    ::placeholder {
      color: ${colors.g500};
    }
  }
`;
