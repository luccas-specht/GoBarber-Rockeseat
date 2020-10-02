import styled from 'styled-components';
import singInImg from '../../../assets/images/sing-in-background.png';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

const Context = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  place-content: center;
  width: 100%;
  max-width: 700px;
`;

const ImgBackground = styled.div`
  flex: 1;
  background: url(${singInImg}) no-repeat center;
  background-size: cover;
`;

export { Container, Context, ImgBackground };
