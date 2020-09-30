import { createGlobalStyle } from "styled-components";

const CreateGlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500&display=swap');
  * {
      padding: 0;
      margin: 0;
      outline: 0;
      box-sizing:border-box;
   }

 body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary2};
    -webkit-font-smoothing: antialiased;
 }

 body, input, button {
   font-family: 'Roboto Slab', serif;
   font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
   font-weight: 500;
  }

 button {
    cursor: pointer;
  }

 a {
    text-decoration: none;
  }

 ul {
    list-style: none;
  } 
`;

export { CreateGlobalStyle };
