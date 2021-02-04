import styled, { keyframes } from 'styled-components';

import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${appearFromRight} 1s;
  form {
    margin: 80px 0px;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
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
  > a {
    color: #f4ede8;
    display: flex;
    align-items: center;
    margin-top: 24px;
    text-decoration: none;
    transition: 0.2s;
    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
