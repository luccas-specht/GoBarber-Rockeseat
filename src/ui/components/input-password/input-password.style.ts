import styled from 'styled-components';

const Container = styled.div`
  background: ${(props) => props.theme.colors.inputs};
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.inputs};
  padding: 16px;
  width: 100%;
  color: ${(props) => props.theme.colors.grayHard};
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
  }
`;

const Input = styled.input`
  color: ${(props) => props.theme.colors.primary2};
  flex: 1;
  background: transparent;
  border: 0;

  &::placeholder {
    color: ${(props) => props.theme.colors.grayHard};
  }
`;
export { Container, Input };
