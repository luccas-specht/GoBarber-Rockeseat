import React from 'react';

import {
  Container,
  Context,
  ImgBackground,
  AnimationContext,
} from './forgot-password.style';

import { FormForgotPassword } from '../components';
import logoGoBarber from '../../../assets/svg/logo-go-barber.svg';

const ForgotPassword = () => (
  <Container>
    <Context>
      <AnimationContext>
        <img src={logoGoBarber} alt='Logo GoBarber' />

        <FormForgotPassword />
      </AnimationContext>
    </Context>
    <ImgBackground />
  </Container>
);

export { ForgotPassword };
