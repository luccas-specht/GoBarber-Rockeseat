import React from 'react';
import { Image } from 'react-native';

import { Button, Input} from '../../components';

import { Container, Title } from './login.style';

import logoGoBarber from '../../assets/img/logo.png';

const Login = () => {
    return (
        <Container >
            <Image source={logoGoBarber} />
            <Title>
                 Faça seu Login
            </Title>
            <Input
             icon='mail'
             name='email'
             placeholder='E-mail'
             />
            <Input
             icon='lock'
             name='password'
             placeholder='Senha'/>
            <Button onPress={()=>{console.log('oiii')}}> Entrar </Button>
        </Container>
    );
}

export { Login }