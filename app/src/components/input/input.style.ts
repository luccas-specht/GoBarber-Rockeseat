import styled, { css } from 'styled-components/native';

import Feather from 'react-native-vector-icons/Feather';
interface PropsContainer {
    isFocus: boolean;
    isError: boolean;
}
interface PropsIcon {
    isFilled: boolean;
    isFocus: boolean;
}

const Container = styled.View<PropsContainer>`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    background: #232129;
    margin-bottom: 10px;
    border-radius: 10px;
    border-width: 2px;
    border-color: #232129;
   
    flex-direction: row;
    align-items: center;

    ${(props) => props.isError && css`
        border-color: #c53030;
    `};

    ${(props) => props.isFocus && css`
        border-color: #ff9000;
    `};
`;

const TextInput = styled.TextInput`
    flex: 1;
    color: #fff;
    font-size: 16px;
    font-family: 'Roboto-Regular';
`;

const Icon = styled(Feather)<PropsIcon>`
    margin-right: 16px;
    color: #666360;

    ${(props) => props.isFocus || props.isFilled ?
      css`color: #ff9000;` : css`color: #666360;` 
    };
`;


export { Container, TextInput, Icon }