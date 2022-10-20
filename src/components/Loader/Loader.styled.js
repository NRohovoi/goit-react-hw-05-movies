import styled from 'styled-components';
import { Oval } from 'react-loader-spinner';

export const LoaderWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Loaderr = styled(Oval)`
  width: 300;
  color: #7021de;
`;
