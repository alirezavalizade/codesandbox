import styled, { css }  from 'styled-components';

import { Box } from './';

const visibleOnHover = css`
  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb {
    visibility: hidden;
  }

  &:hover {
    &::-webkit-scrollbar-track,
    &::-webkit-scrollbar-thumb {
      visibility: visible;
    }
  }
`;

export const scrollKitDefaultCSS = css`
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
  ${p => p.visibleOnHover ? visibleOnHover : null};

  &::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.scroll.thumb};
    min-height: 40px;
  }

  &::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-track {
    border: 4px solid transparent;
    background-clip: padding-box;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${p => p.rail || p.theme.colors.scroll.rail};
  }
`;

export const scrollKitThinCSS = css`
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
  border-right: 2px solid transparent;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border: 2px solid transparent;
    border-radius: 4px;
    background-color: ${p => p.theme.colors.scroll.thumb};
    min-height: 40px;
  }

  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  ${visibleOnHover};
`;

const modes = {
  default: scrollKitDefaultCSS,
  thin: scrollKitThinCSS
};

const ScrollKit = styled(Box)`
  ${p => modes[p.mode]};
`;

ScrollKit.defaultProps = {
  mode: 'default'
};

export default ScrollKit;