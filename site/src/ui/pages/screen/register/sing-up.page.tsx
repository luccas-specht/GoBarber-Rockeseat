import React from 'react';
import {
  Container,
  Context,
  ImgBackground,
  AnimationContext,
} from './sing-up.style';
import { FormSingUp } from '../components';

import logoGoBarber from '../../../assets/svg/logo-go-barber.svg';

const SingUp: React.FC = () => (
  <Container>
    <ImgBackground />
    <Context>
      <AnimationContext>
        <img src={logoGoBarber} alt='Logo GoBarber' />
        <FormSingUp />
      </AnimationContext>
    </Context>
  </Container>
);
export { SingUp };
