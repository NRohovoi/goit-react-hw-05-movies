import styled from 'styled-components';

export const ListWrapper = styled.div`
  padding-left: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[6]}px;
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  gap: 20px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: rgb(0 0 0 / 30%) 0px 10px 40px,
    rgb(0 0 0 / 60%) -23px 0px 20px -23px, rgb(0 0 0 / 60%) 23px 0px 20px -23px,
    rgb(0 0 0 / 10%) 0px 0px 40px inset;
`;

export const ListItem = styled.li`
  width: 130px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: rgb(0 0 0 / 30%) 0px 10px 40px,
    rgb(0 0 0 / 60%) -23px 0px 20px -23px, rgb(0 0 0 / 60%) 23px 0px 20px -23px,
    rgb(0 0 0 / 10%) 0px 0px 40px inset;
`;

export const ActorProfile = styled.img`
  width: 100px;
  height: 150px;
  border-radius: ${p => p.theme.radii.normal};
`;

export const AbouParagraph = styled.p`
  text-align: center;
  margin-bottom: ${p => p.theme.space[2]}px;
`;
