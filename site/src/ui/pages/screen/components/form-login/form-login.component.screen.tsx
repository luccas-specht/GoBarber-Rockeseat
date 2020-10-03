import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputText, InputPassword, Button } from '../../../../components';
import { Form, Title, CreateAccount } from './form-login.component.style';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

const FormLogin: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleSubmit = (event: any) => event.preventDefault();

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title>Faça seu Login</Title>
        <InputText
          icon={<FiMail size={20} />}
          name='username-sing-Up'
          id='tx-username-sing-Up'
          placeholder='E-mail'
          value={name}
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
