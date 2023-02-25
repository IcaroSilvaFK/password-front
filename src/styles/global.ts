import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }

  :focus{
    outline: none;
    box-shadow: 0 0  0 2px ${({ theme }) => theme.colors.green}
  }

  body,html,#root{
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.black};
  }

  body,input,textarea,button{
    font-size: 1rem ;
    font-family: ${({ theme }) => theme.fonts.jetBrains};
    color:${({ theme }) => theme.colors.text};
  }

  button,input{
    border:0;
  }
  button{
    cursor:pointer
  }

  ul,ol{
    list-style: none;
  }

`;
