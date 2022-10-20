import styled from 'styled-components';
import { BiLoaderCircle } from 'react-icons/bi';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${p => p.theme.space[4]}px;
`;

export const Buttons = styled.button`
  display: flex;
  gap: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: inherit;
  box-shadow: rgb(0 0 0 / 30%) 0px 10px 40px,
    rgb(0 0 0 / 60%) -23px 0px 20px -23px, rgb(0 0 0 / 60%) 23px 0px 20px -23px,
    rgb(0 0 0 / 10%) 0px 0px 40px inset;
  transition-property: background-color, scale;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    scale: 1.05;
    font-weight: bolder;
  }
`;

export const ButtonSvg = styled(BiLoaderCircle)``;
