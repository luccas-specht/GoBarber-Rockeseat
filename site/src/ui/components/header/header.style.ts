import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 140px;
    align-items: center;
    justify-content: center;
    background-color: ${props=> props.theme.colors.blackMedium};
`;

const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    width: 80%;
    align-items: center;

    > img{
        height: 80px;
    }

    button{
        margin-left: auto;
        background: transparent;
        border: 0;

        svg{
            color: #999591;
            width: 20px;
            height: 20px;
        }
    }
`;

const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 80px;

    img{
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }

    div{
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;
    }
`;

const WellcomeUser = styled.span`
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: ${props=> props.theme.colors.grayHard};
`;


const UserName = styled.strong`
      color: ${props=> props.theme.colors.primary};
`;

export {
    Container, 
    Content,
    Profile,
    WellcomeUser, 
    UserName };