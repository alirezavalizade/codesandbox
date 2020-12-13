import styled, { keyframes } from 'styled-components';

import Box from './Box';

const fade = keyframes`
    from { opacity: 0.001 }
    to { opacity: 0.999 }
`;

const Skeleton = styled(Box)`
    animation: 0.8s linear 0s infinite alternate none running ${fade};
`;

export default Skeleton;