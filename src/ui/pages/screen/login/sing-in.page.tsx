import React from 'react';
import { Container, Context, ImgBackground } from './sing-in.style';
import { FormLogin } from '../components';

import logoGoBarber from '../../../assets/svg/logo-go-barber.svg';

const SingIn: React.FC = () => (
  <Container>
    <Context>
      <img src={logoGoBarber} alt='Logo GoBarber' />
      <FormLogin />
    </Context>
    <ImgBackground />
  </Container>
);

export { SingIn };
