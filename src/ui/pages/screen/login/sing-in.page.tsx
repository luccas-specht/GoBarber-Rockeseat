import React from 'react';
import { Container, Context, ImgBackground } from './sing-in.style';

import logoGoBarber from '../../../assets/svg/logo-go-barber.svg';

const SingIn: React.FC = () => {
  return (
    <Container>
      <Context>
        <img src={logoGoBarber} alt='Logo GoBarber' />
      </Context>
      <ImgBackground />
    </Container>
  );
};

export { SingIn };
