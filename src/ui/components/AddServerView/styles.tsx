/* eslint-disable prettier/prettier */
import styled from '@emotion/styled';

import * as style from '../../assets/css-variable/constant';

export const Wrapper = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  overflow-y: auto;
  align-items: center;
  -webkit-app-region: drag;
  justify-content: center;

  display: flex;
  background: ${style.BG_LIGHT};
`;
