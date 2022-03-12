import { mq } from 'styled-gen';
import styled, { css } from 'styled-components';

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;

    ${mq.tabletLandscape(css`
        flex-direction: row;
    `)};
`;
