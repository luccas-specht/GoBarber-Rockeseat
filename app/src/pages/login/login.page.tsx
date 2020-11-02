import React, { useCallback, useRef } from 'react';
import { Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core';

import { Button, Input } from '../../components';

import {  Container, 
          Title, 
          ForgotPassword, 
          ForgotPasswordText,
          CreateAccountButton,
          CreateAccountButtonText 
        } from './login.style';

import logoGoBarber from '../../assets/img/logo.png';

const Login = () => {
    const formRef = useRef<FormHandles>(null)
    const navigation = useNavigation();
   
    const handleLogin = useCallback((data: object)=>{
        console.log('da', data)
    },[])

    return (
        <>
        <ScrollView 
            keyboardShouldPersistTaps='handled'
            contentContainerStyle={{ flex: 1 }}
        >
             <Container >
                <Image source={logoGoBarber} />
                <Title>
                     Crie sua conta
                </Title>
            
                <Form 
                 ref={formRef}
                 onSubmit={handleLogin}
                >    
                   <Input
                    icon='mail'
                    name='email'
                    placeholder='E-mail'
                    autoCorrect={false}
                    autoCompleteType='off'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    />
                   
                   <Input
                    icon='lock'
                    name='password'
                    placeholder='Senha'
                    secureTextEntry
                    returnKeyType='send'
                    onSubmitEditing={()=>{formRef.current?.submitForm()}}
                    />
                </Form>
                <Button
                 onPress={()=>{formRef.current?.submitForm()}}
                 >
                    Entrar
                 </Button>
        
                <ForgotPassword onPress={()=>{}}> 
                    <ForgotPasswordText>
                        Esqueci minha senha
                    </ForgotPasswordText>
                </ForgotPassword>
            </Container>
        </ScrollView>

            <CreateAccountButton onPress={()=> navigation.navigate('Register')}>
            <Icon name='log-in' size={20} color='#ff9000'/>  
              <CreateAccountButtonText>
                    Criar uma conta
              </CreateAccountButtonText>
          </CreateAccountButton>
        </>
    );
}

export { Login }