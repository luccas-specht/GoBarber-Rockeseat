import React, { useContext } from 'react';

import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../../context';

import { FiPower } from 'react-icons/fi';

import * as SC from './header.style';

import logoGoBarber from '../../assets/svg/logo-go-barber.svg';
import imageDefaultProfile from '../../assets/images/this-person-does-not-exists.jpeg';

const Header = () => {
    const { push } = useHistory();
    const { signOut, user } = useContext(AuthContext);

    const handleSignOut = () => {
        signOut();
        push('/login')
    }

    return (
        <SC.Container>
            <SC.Content>
                <img src={logoGoBarber} alt='Logo GoBarber' />
                <SC.Profile>
                    <img src={user?.image ? user?.image : imageDefaultProfile} alt="imagem de perfil" />
                    <div>
                       <SC.WellcomeUser>Bem Vindo,</SC.WellcomeUser>
                       <SC.UserName>{user?.name}</SC.UserName>
                    </div>
                </SC.Profile>
                <FiPower onClick={handleSignOut}  />
            </SC.Content>
        </SC.Container>
    );
};

export { Header };