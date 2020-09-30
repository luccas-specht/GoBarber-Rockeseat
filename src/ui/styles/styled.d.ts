import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      primary2: string;
      secondary: string;
      secondary2: string;
      secondary3: string;
      error: string;
      grey77: string;
      grey47: string;
      white: string;
      black: string;
      disabled: string;
    };
  }
}
