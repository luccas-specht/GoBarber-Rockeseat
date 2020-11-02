import styled from 'styled-components/native';

import Feather from 'react-native-vector-icons/Feather';

const Container = styled.View`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    background: #232129;
    border-radius: 10px;
    margin-bottom: 10px;
    flex-direction: row;
    align-items: center;
`;

const TextInput = styled.TextInput`
    flex: 1;
    color: #fff;
    font-size: 16px;
    font-family: 'Roboto-Regular';
`;

const Icon = styled(Feather)`
    margin-right: 16px;
    /* color={isFocus? '#ff9000': '#666360'} */
    color: #666360;
`;


export { Container, TextInput, Icon }