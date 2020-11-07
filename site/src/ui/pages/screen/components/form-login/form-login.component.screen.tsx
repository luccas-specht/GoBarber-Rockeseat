import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import { toastConfig } from '../../../../../configs/toaster/toaster.config';

import { useAuth } from '../../../../../hooks'

import { InputText, InputPassword, Button } from '../../../../components';
import { Form, Title, CreateAccount } from './form-login.component.style';

const FormLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { authentication } = useAuth();
  const history = useHistory();

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const onSubmit = async (event: any): Promise<void> => {
    event.preventDefault()
    if (!email || !password) {
      toast.error("Dados incorretos", toastConfig);
    } else {
      const response = await authentication(email, password);
      if (response?.status === 400) {
        console.log('aqui não deu:', response)
      } else {
        console.log('aqui deu', response)
      }
    }
  }

  return (
    <>
      <ToastContainer />
      <Form onSubmit={onSubmit}>
        <Title>Faça seu Login</Title>
        <InputText
          icon={<FiMail size={20} />}
          name='username-sing-Up'
          id='tx-username-sing-Up'
          placeholder='E-mail'
          value={email}
          onChange={handleChangeName}
        />

        <InputPassword
          icon={<FiLock size={20} />}
          name='password-sing-up'
          id='ps-password-sing-up'
          placeholder='Senha'
          value={password}
          onChange={handleChangePassword}
        />

        <Button title='Entrar' />
        <Link to='forgot'>Esqueci a minha senha</Link>
      </Form>

      <CreateAccount to='sing-up'>
        <FiLogIn />
        Criar conta
      </CreateAccount>
    </>
  );
};

export { FormLogin };
