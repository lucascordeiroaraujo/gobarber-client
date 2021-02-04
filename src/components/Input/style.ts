import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export default styled.div<ContainerProps>`
  width: 100%;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  color: #666360;
  display: flex;
  align-items: center;
  transition: 0.2s;
  background: #232129;
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
      color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}
  input {
    flex: 1;
    border: 0;
    color: #f4edeb;
    background: transparent;
    &::placeholder {
      color: #666360;
    }
  }
  & + div {
    margin-top: 8px;
  }
  > svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
