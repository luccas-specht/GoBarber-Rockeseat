import styled from 'styled-components';

const Input = styled.input`
  background: ${(props) => props.theme.colors.inputs};
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.inputs};
  padding: 16px;
  width: 100%;

  & + input {
    margin-top: 8px;
  }
`;
export { Input };
