import React, { useCallback, useRef } from 'react';
import { Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core';

import { Button, Input } from '../../components';

import {  Container, 
          Title, 
          BackToLoginButton,
          BackToLoginButtonText 
        } from './register.style';

import logoGoBarber from '../../assets/img/logo.png';

const Register = () => {
    const formRef = useRef<FormHandles>(null)
    const navigation = useNavigation();
    
    const handleRegister = useCallback((data: object)=>{
        console.log('da', data)
    },[])
    
    return (
        <>
        <ScrollView 
            keyboardShouldPersistTaps='handled'
            contentContainerStyle={{ flex: 1 }}
        >
             <Container>
                <Image source={logoGoBarber} />
                <Title>
                     Crie sua conta
                </Title>

                <Form 
                 ref={formRef}
                 onSubmit={handleRegister}
                >    
                    <Input
                     autoCapitalize='words'
                     icon='user'
                     name='username'
                     placeholder='Nome'
                     />

                    <Input
                     icon='mail'
                     name='emailRegister'
                     placeholder='E-mail'
                     autoCorrect={false}
                     autoCompleteType='off'
                     autoCapitalize='none'
                     keyboardType='email-address'
                     />

                    <Input
                     icon='lock'
                     name='passwordRegister'
                     placeholder='Senha'
                     returnKeyType='send'
                     textContentType='newPassword'
                     secureTextEntry
                     onSubmitEditing={()=>{formRef.current?.submitForm()}}
                     />
                </Form>
                 
                 <Button
                 onPress={()=>{formRef.current?.submitForm()}}
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