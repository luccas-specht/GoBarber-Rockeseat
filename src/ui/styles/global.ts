import { createGlobalStyle } from "styled-components";

const CreateGlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
outline: 0;
box-sizing:border-box;
} 

body {
background: ${(props) => props.theme.color.disabled}
}
`;

export { CreateGlobalStyle };
