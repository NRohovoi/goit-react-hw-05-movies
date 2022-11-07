import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HiHome } from 'react-icons/hi';
import { RiMovie2Line } from 'react-icons/ri';

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  display: flex;
  gap: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: inherit;
  color: ${p => p.theme.colors.black};

  transition-property: background-color, scale, color, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }
  &.active {
    background-color: inherit;
    color: white;
    scale: 1.2;
    box-shadow: rgb(0 0 0 / 30%) 0px 10px 40px,
      rgb(0 0 0 / 60%) -23px 0px 20px -23px,
      rgb(0 0 0 / 60%) 23px 0px 20px -23px, rgb(0 0 0 / 10%) 0px 0px 40px inset;
  }
  &:hover,
  &:focus {
    scale: 1.2;
    font-weight: bolder;
    box-shadow: rgb(0 0 0 / 30%) 0px 10px 40px,
      rgb(0 0 0 / 60%) -23px 0px 20px -23px,
      rgb(0 0 0 / 60%) 23px 0px 20px -23px, rgb(0 0 0 / 10%) 0px 0px 40px inset;
  }
`;

export const StyledHeader = styled.header`
  padding: 15px;
  border-bottom: 2px solid black;
  background-color: ${p => p.theme.colors.secondary};
  display: flex;
  justify-content: center;
  margin-bottom: 15px;

  & nav {
    display: flex;
  }
`;

export const HomeSvg = styled(HiHome)``;
export const MoviesSvg = styled(RiMovie2Line)``;
