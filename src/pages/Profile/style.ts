import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  header {
    display: flex;
    align-items: center;
    height: 144px;
    background: #28262e;
    div {
      width: 100%;
      max-width: 1120px;
      margin: 0px auto;
      svg {
        width: 24px;
        height: 24px;
        color: #999591;
        transition: 0.2s;
        &:hover {
          color: ${shade(0.2, '#999591')};
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: -176px auto 0px;
  form {
    margin: 80px 0px;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;
    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }
    a {
      color: #f4edeb;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: 0.2s;
      &:hover {
        color: ${shade(0.2, '#f4edeb')};
      }
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;
  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
  label {
    width: 48px;
    height: 48px;
    position: absolute;
    right: 0px;
    bottom: 0px;
    border: none;
    transition: 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    background: #ff9000;
    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }
    input {
      display: none;
    }
    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
