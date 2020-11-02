import React, { useState } from 'react';
import { Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { Button, Input } from '../../components';

import {  Container, 
          Title, 
          BackToLoginButton,
          BackToLoginButtonText 
        } from './register.style';

import logoGoBarber from '../../assets/img/logo.png';

const Register = () => {
    const navigation = useNavigation();
    const [isFocus, setIsFocus] = useState<boolean>();

    return (
        <>
        <ScrollView 
            keyboardShouldPersistTaps='handled'
            contentContainerStyle={{ flex: 1 }}
        >
             <Container isFocus={isFocus}>
                <Image source={logoGoBarber} />
                <Title>
                     Crie sua conta
                </Title>

                <Input
                 icon='user'
                 name='username'
                 placeholder='Nome'
                 onFocus={(focus: boolean) => setIsFocus(focus)}
                 />

                <Input
                 icon='mail'
                 name='emailRegister'
                 placeholder='E-mail'
                 onFocus={(focus: boolean) => setIsFocus(focus)}
                 />
               
                <Input
                 icon='lock'
                 name='passwordRegister'
                 placeholder='Senha'
                 onFocus={(focus: boolean) => setIsFocus(focus)}
                 />

                <Button
                 onPress={()=>{console.log('oiii')}}
                 >
                    Entrar
                 </Button>
        
            </Container>
        </ScrollView>

            <BackToLoginButton onPress={()=> navigation.navigate('Login')}>
            <Icon name='arrow-left' size={20} color='#fff'/>  
              <BackToLoginButtonText>
                   Voltar para o login
              </BackToLoginButtonText>
          </BackToLoginButton>
        </>
    );
}

export { Register }