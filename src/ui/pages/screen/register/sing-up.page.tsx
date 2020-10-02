import React from 'react';
import { Container, Context, ImgBackground } from './sing-up.style';
import { FormSingUp } from '../components';

import logoGoBarber from '../../../assets/svg/logo-go-barber.svg';

const SingUp: React.FC = () => (
  <Container>
    <ImgBackground />
    <Context>
      <img src={logoGoBarber} alt='Logo GoBarber' />
      <FormSingUp />
    </Context>
  </Container>
);
export { SingUp };
