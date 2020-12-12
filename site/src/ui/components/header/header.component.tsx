import React, { useContext } from 'react';

import { AuthContext } from '../../../context';

import { FiPower } from 'react-icons/fi';

import * as SC from './header.style';

import logoGoBarber from '../../assets/svg/logo-go-barber.svg';
import imageDefaultProfile from '../../assets/images/this-person-does-not-exists.jpeg';

const Header = () => {
    const { signOut, user } = useContext(AuthContext);
    return (
        <SC.Container>
            <SC.Content>
                <img src={logoGoBarber} alt='Logo GoBarber' />
                <SC.Profile>
                    <img src={user.image ? user.image : imageDefaultProfile} alt="imagem de perfil" />
                    <div>
                       <SC.WellcomeUser>Bem Vindo,</SC.WellcomeUser>
                       <SC.UserName>{user.name}</SC.UserName>
                    </div>
                </SC.Profile>
                <button type='button' onClick={signOut}>
                    <FiPower />
                </button>''
            </SC.Content>
        </SC.Container>
    );
};

export { Header };