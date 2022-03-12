import { colors } from '../theme/colors';
import { mq } from 'styled-gen';
import styled, { css } from 'styled-components';

export const ViewContent = styled.div`
    height: 100%;
    overflow-y: auto;
    padding: 1.5rem 1rem;
    width: 100%;
    background-color: ${colors.g50};

    ${mq.tabletLandscape(css`
        padding: 2rem;
    `)};
`;
