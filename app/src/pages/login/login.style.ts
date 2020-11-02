import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 30px 5px;
`;

const Title = styled.Text`
    font-style: normal;
    font-family: 'Roboto-Medium';
    font-size: 24px;
    line-height: 26px;
    text-align: center;
    color: #F4EDE8;
    margin: 64px 0 24px;
`;

const ForgotPassword = styled.TouchableOpacity`
    margin-top: 24px;
`;

const ForgotPasswordText  = styled.Text`
    font-family: 'Roboto-Regular';
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    color: #F4EDE8;
`;

const CreateAccountButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background: #312e38;
    border-top-width: 1px;
    border-color: #232129;
    padding: 16px 0 21px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const CreateAccountButtonText  = styled.Text`
    font-family: 'Roboto-Regular';
    font-size: 17px;
    text-align: center;
    color: #ff9000;
    margin-left: 16px;
`;

export { 
    Container, 
    Title, 
    ForgotPassword, 
    ForgotPasswordText,
    CreateAccountButton,
    CreateAccountButtonText
 }