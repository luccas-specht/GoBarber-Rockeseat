import React from 'react';
import {
  Container,
  Context,
  ImgBackground,
  AnimationContext,
} from './sing-up.style';
import { FormRegister } from '../components';

import logoGoBarber from '../../../assets/svg/logo-go-barber.svg';

const SingUp = () => (
  <Container>
    <ImgBackground />
    <Context>
      <AnimationContext>
        <img src={logoGoBarber} alt='Logo GoBarber' />

        <FormRegister />
      </AnimationContext>
    </Context>
  </Container>
);
export { SingUp };
