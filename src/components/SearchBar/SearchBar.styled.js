import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: ${p => p.theme.space[4]}px;
  background: linear-gradient(
    135deg,
    rgb(229, 93, 135) 0%,
    rgb(95, 195, 228) 100%
  );
`;

export const Form = styled.form`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
`;

export const Input = styled.input`
  padding: ${p => p.theme.space[3]}px;
  width: 260px;
  border-radius: ${p => p.theme.radii.normal};
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
  &:focus {
    ::placeholder {
      color: ${p => p.theme.colors.white};
    }
  }
`;

export const Button = styled.button`
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

export const ButtonSvg = styled(BsSearch)``;
