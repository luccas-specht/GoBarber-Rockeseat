import React from 'react';

import {
  Container,
  Context,
  ImgBackground,
  AnimationContext,
} from './reset-password.style';

import { FormResetPassword } from '../components';
import logoGoBarber from '../../../assets/svg/logo-go-barber.svg';

const ResetPassword = () => (
  <Container>
    <Context>
      <AnimationContext>
        <img src={logoGoBarber} alt='Logo GoBarber' />

        <FormResetPassword />
      </AnimationContext>
    </Context>
    <ImgBackground />
  </Container>
);

export { ResetPassword };
