import styled, { css } from 'styled-components';
import { Box } from '../';

export const RowWrapper = styled(Box)`
    color: ${p => p.theme.colors.layout.colors.secondary};

    p {
        user-select: none;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .mark {
        background-color: ${p => p.theme.colors.yellow};
    }

    &:hover {
        color: ${p => p.theme.colors.layout.colors.primary};
    }
`;

// TODO: Fix static height
const activeState = css`
    max-height: 3000px;
    overflow: auto;
`;

export const SubRow = styled(Box)`
    transition: ${p => p.theme.speeds[5]} ease all;
    max-height: 0;
    overflow: hidden;

    ${p => p.active && activeState};
`;