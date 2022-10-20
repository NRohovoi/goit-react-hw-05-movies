import styled from 'styled-components';

export const ImageListItem = styled.li`
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
`;

export const Image = styled.img`
  width: 360px;
  height: 240px;
  transition-property: background-color, scale;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    scale: 1.5;
    font-weight: bolder;
  }
`;
