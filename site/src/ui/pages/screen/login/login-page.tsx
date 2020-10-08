import React from 'react';
import {
  Container,
  Context,
  ImgBackground,
  AnimationContext,
} from './login.style';
import { FormLogin } from '../components';

import logoGoBarber from '../../../assets/svg/logo-go-barber.svg';

const Login: React.FC = () => (
  <Container>
    <Context>
      <AnimationContext>
        <img src={logoGoBarber} alt='Logo GoBarber' />
        <FormLogin />
      </AnimationContext>
    </Context>
    <ImgBackground />
  </Container>
);

export { Login };
