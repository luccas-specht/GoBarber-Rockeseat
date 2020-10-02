import React from 'react';
import { Container, Context, ImgBackground } from './login.style';
import { FormLogin } from '../components';

import logoGoBarber from '../../../assets/svg/logo-go-barber.svg';

const Login: React.FC = () => (
  <Container>
    <Context>
      <img src={logoGoBarber} alt='Logo GoBarber' />
      <FormLogin />
    </Context>
    <ImgBackground />
  </Container>
);

export { Login };
