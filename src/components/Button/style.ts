import styled from 'styled-components';

import { shade } from 'polished';

export default styled.button`
  width: 100%;
  height: 56px;
  border-radius: 10px;
  border: none;
  color: #312e38;
  font-weight: 500;
  margin-top: 16px;
  background: #ff9000;
  padding: 0px 16px;
  transition: 0.2s;
  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
