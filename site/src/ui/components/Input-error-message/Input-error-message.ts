import styled from 'styled-components';

const Error = styled.div`
  background: ${props => props.theme.colors.error};
  color: ${props => props.theme.colors.white};
  width: 340px;
  height: 35px;
  margin-top: -15px;
  margin-bottom: 24px;
  font-size: 13.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-bottom-left-radius: 13px 13px;
  border-bottom-right-radius: 13px 13px;

  span {
    margin-left: 10px;
  }

  :after {
    content: '';
    position: absolute;
    height: 13px;
    left: 0px;
    right: 0px;
    bottom: 100%;
    background-color: transparent;
    border-bottom-left-radius: 13px 13px;
    border-bottom-right-radius: 13px 13px;
    box-shadow: 0px 0px 0px 13px ${props => props.theme.colors.error};
    clip: rect(0px, 340px, 13px, 0px);
  }
`;

export { Error };
