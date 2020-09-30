import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primary2: string;
      gray: string;
      grayHard: string;
      shape: string;
      blackMedium: string;
      background: string;
      inputs: string;
    };
  }
}
