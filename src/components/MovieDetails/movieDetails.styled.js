import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb';

export const Main = styled.main`
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
`;

export const MovieDetalisWrapper = styled.div`
  display: flex;
  padding: ${p => p.theme.space[5]}px;
  gap: ${p => p.theme.space[6]}px;
  margin: ${p => p.theme.space[5]}px ${p => p.theme.space[6]}px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: rgb(0 0 0 / 30%) 0px 10px 40px,
    rgb(0 0 0 / 60%) -23px 0px 20px -23px, rgb(0 0 0 / 60%) 23px 0px 20px -23px,
    rgb(0 0 0 / 10%) 0px 0px 40px inset;
`;

export const MovieNamed = styled.h2`
  padding: ${p => p.theme.space[3]}px;
  text-align: center;
  width: 460px;
  margin: 0 auto;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: rgb(0 0 0 / 30%) 0px 10px 40px,
    rgb(0 0 0 / 60%) -23px 0px 20px -23px, rgb(0 0 0 / 60%) 23px 0px 20px -23px,
    rgb(0 0 0 / 10%) 0px 0px 40px inset;
`;

export const Vote = styled.p`
  display: block;
  margin: 0 auto;
`;

export const OverviewWrapper = styled.div`
  padding: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: rgb(0 0 0 / 30%) 0px 10px 40px,
    rgb(0 0 0 / 60%) -23px 0px 20px -23px, rgb(0 0 0 / 60%) 23px 0px 20px -23px,
    rgb(0 0 0 / 10%) 0px 0px 40px inset;
`;

export const GenresWrapper = styled.div`
  padding: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: rgb(0 0 0 / 30%) 0px 10px 40px,
    rgb(0 0 0 / 60%) -23px 0px 20px -23px, rgb(0 0 0 / 60%) 23px 0px 20px -23px,
    rgb(0 0 0 / 10%) 0px 0px 40px inset;
`;

export const Title = styled.h3`
  text-align: center;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  gap: 10px;
`;

export const AditionalWrapper = styled.div`
  text-align: center;
  padding: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: rgb(0 0 0 / 30%) 0px 10px 40px,
    rgb(0 0 0 / 60%) -23px 0px 20px -23px, rgb(0 0 0 / 60%) 23px 0px 20px -23px,
    rgb(0 0 0 / 10%) 0px 0px 40px inset;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  margin-top: ${p => p.theme.space[3]}px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  gap: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: inherit;
  color: black;

  transition-property: background-color, scale, color, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.white};
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

export const ImageWrapper = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
`;

export const Poster = styled.img`
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: rgb(0 0 0 / 30%) 0px 10px 40px,
    rgb(0 0 0 / 60%) -23px 0px 20px -23px, rgb(0 0 0 / 60%) 23px 0px 20px -23px,
    rgb(0 0 0 / 10%) 0px 0px 40px inset;
`;

export const BackSvg = styled(TbArrowBackUp)``;
