import styled, { css } from 'styled-components';
import { color, background, fontSize, fontStyle, fontFamily, space, shadow, width, height, minHeight, minWidth, size, border, position, borderRadius, overflow } from 'styled-system';

/**
 * Chakra-ui style
 * Chakra-ui style
 * Chakra-ui style
 * Chakra-ui style
 */

 const cursor = css`
  cursor: ${p => p.cursor};
 `;

const Box = styled.div`
  ${color};
  ${background};
  
  ${fontSize};
  ${fontStyle};
  ${fontFamily};

  ${space};
  ${shadow};

  ${size};
  ${width};
  ${minWidth};
  ${height};
  ${minHeight};

  ${border};
  ${borderRadius};

  ${position};

  ${overflow};

  ${p => p.cursor && cursor};
`;

export default Box;