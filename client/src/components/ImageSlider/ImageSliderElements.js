import styled, { keyframes } from 'styled-components';

export const ImageWrapper = styled.div`
  width: 100%;
  max-height: 400px;
  height: inherit;
`;

const loadingAnimation = keyframes`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff;
  }
`;

export const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: ${loadingAnimation} 1s infinite;
`;

export const StyledImage = styled.img`
  width: 100%;
  max-height: 400px;
  height: inherit;
  object-fit: scale-down;
`;
