import styled from 'styled-components';

import Box from './Box';

// I ususally define variants and based on variant color it will get the hove color but for now will ignore it because of the time
const Button = styled(Box).attrs({ as: 'button' })`
    outline: 0;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: ${p => p.theme.radii.medium};
    font-size: ${p => p.theme.fontSizes[3]};
    background-color: ${p => p.theme.colors.blue[600]};

    &:hover {
        background-color: ${p => p.theme.colors.blue[500]};
    }
`;

export default Button;