import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    position: relative;
    width: 100%;

    & + div {
        margin-top: 16px;
    }

    img {
        width: 56px;
        height: 56px;
        border-radius: 40px;
    }

    strong {
        margin-left: 18px;
        font-size: 18px;
        color: ${props => props.theme.colors.white};
    }

    span {
        margin-left: auto;
        display: flex;
        align-items: center;
        color: ${props => props.theme.colors.white};
        font-size: 18px;

        svg{
            color: ${props => props.theme.colors.primary};
            margin-right: 8px;
            size: 18px
        }
    }

    div {
            display: flex;
            align-items: center;
            padding: 16px 24px;
            background-color: ${props => props.theme.colors.shape};
            border-radius: 10px;
            margin-left: 24px;
            flex: 1
        }
`;