import styled from 'styled-components';

export const ImageList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
  margin: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[0]}px;
  list-style: none;
`;
