import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRegister } from '../../../../../hooks'

import { InputText, Button, InputPassword } from '../../../../components';

import { Form, Title, BackToSingIn } from './form-sing-up.component.style';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

const FormSingUp: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { register } = useRegister();
  const history = useHistory();

  const handleChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }
    
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }
    
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!userName || !email|| !password  ) {
      alert('preencha tudo ')
    }else{
      rigistered();
    }
  }

  const rigistered = async () => {
    const response = await register(userName, email, password );
    if (response.status === 400) {
      alert('não deu cpx já existe assim')
    } else {
      history.push('./login');
    }
}
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title>Cadastra-se</Title>
        <InputText
          icon={<FiUser size={22} />}
          name='username-sing-Up'
          id='tx-username-sing-Up'
          placeholder='Nome'
          value={userName}
          onChange={handleChangeUserName}
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
