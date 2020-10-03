import React, { useState } from 'react';
import { InputText, Button, InputPassword } from '../../../../components';
import { Form, Title, BackToSingIn } from './form-sing-up.component.style';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

const FormSingUp: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleSubmit = (event: any) => event.preventDefault();

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title>Cadastra-se</Title>
        <InputText
          icon={<FiUser size={22} />}
          name='username-sing-Up'
          id='tx-username-sing-Up'
          placeholder='Nome'
          value={name}
          onChange={handleChangeName}
        />

        <InputText
          icon={<FiMail size={20} />}
          name='email-sing-up'
          id='tx-email-sing-up'
          placeholder='E-mail'
          value={email}
          onChange={handleChangeEmail}
        />

        <InputPassword
          icon={<FiLock size={20} />}
          name='password-sing-up'
          id='ps-password-sing-up'
          placeholder='Senha'
          value={password}
          onChange={handleChangePassword}
        />

        <Button title='Cadastrar' />
      </Form>

      <BackToSingIn to='login'>
        <FiArrowLeft />
        Voltar para o login
      </BackToSingIn>
    </>
  );
};

export { FormSingUp };
