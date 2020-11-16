import styled, { css } from 'styled-components';
interface ContainerProps {
  isFocus: boolean;
  isFilled: boolean;
  isError: boolean;
}

const Container = styled.div<ContainerProps>`
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

  ${(props) =>
    props.isError &&
    css`
      color: ${(props) => props.theme.colors.error};
      /* border-color: ${(props) => props.theme.colors.error}; */
    `}

  ${(props) =>
    props.isFocus &&
    css`
      color: ${(props) => props.theme.colors.primary};
      border-color: ${(props) => props.theme.colors.primary};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${(props) => props.theme.colors.primary};
    `}
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
