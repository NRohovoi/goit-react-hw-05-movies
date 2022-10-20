import styled from 'styled-components';

export const Backdrop = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1;
`;

export const ImageBox = styled.div``;

export const Image = styled.img`
  max-height: calc(100vh - 48px);
  max-width: calc(100vw - 48px);
  border-radius: ${p => p.theme.radii.normal};
`;
