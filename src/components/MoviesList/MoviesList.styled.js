import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${p => p.theme.space[5]}px;
  margin: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[0]}px;
  list-style: none;
`;

export const ListItem = styled.li`
  text-align: center;
  overflow: hidden;
  border-radius: ${p => p.theme.radii.normal};
  padding-bottom: ${p => p.theme.space[2]}px;
  box-shadow: rgb(0 0 0 / 30%) 0px 10px 40px,
    rgb(0 0 0 / 60%) -23px 0px 20px -23px, rgb(0 0 0 / 60%) 23px 0px 20px -23px,
    rgb(0 0 0 / 10%) 0px 0px 40px inset;
`;

export const ImageWrapper = styled.div`
  width: 350px;
  height: 525px;
  margin-bottom: ${p => p.theme.space[2]}px;
  overflow: hidden;
`;

export const Image = styled.img`
  transition-property: background-color, scale;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    scale: 1.3;
    font-weight: bolder;
  }
`;

export const ListLink = styled(Link)`
  text-decoration: none;
  font-weight: bolder;
  color: ${p => p.theme.colors.secondary};

  transition-property: color;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.text};
  }
`;

export const VoteImage = styled.img`
  margin-left: ${p => p.theme.space[3]}px;
`;
