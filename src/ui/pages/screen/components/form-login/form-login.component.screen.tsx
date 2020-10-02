import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputText, Button } from '../../../../components';
import { Form, Title, CreateAccount } from './form-login.component.style';
import { FiLogIn } from 'react-icons/fi';

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
        <Title>Faça seu Logon</Title>
        <InputText
          name='username'
          id='tx-username'
          placeholder='Nome de usuário:'
          value={name}
          onChange={handleChangeName}
        />
        <InputText
          name='password'
          id='tx-password'
          placeholder='Senha:'
          value={password}
          onChange={handleChangePassword}
        />
        <Button title='Entrar' />
        <Link to='forgot'>Esqueci a minha senha</Link>
      </Form>

      <CreateAccount to='sing-up'>
        <FiLogIn />
        Criar Conta
      </CreateAccount>
    </>
  );
};

export { FormLogin };
