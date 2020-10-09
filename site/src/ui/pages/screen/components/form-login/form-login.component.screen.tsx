import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../../../../../hooks'

import { InputText, InputPassword, Button } from '../../../../components';
import { Form, Title, CreateAccount } from './form-login.component.style';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

const FormLogin: React.FC = () => {
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
    
  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (!email || !password) {
        alert('Você precisa preencher todos os campos');
    } else {
        login();
    }
  }

  const login = async () => {
      const response = await authentication(email, password);
      if (response.status === 400) {
        history.push('./naodeu');
      } else {
        history.push('./forgot');
      }
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
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
