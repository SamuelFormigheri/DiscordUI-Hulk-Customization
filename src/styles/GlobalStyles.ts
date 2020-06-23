import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Roboto', sans-serif;
  }

  :root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(32,34,37);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;
    
    --white: #fff;
    --green: #4dbd43;
    --gray: #34812d;
    --chat-input: rgb(64,68,75);
    --symbol: #74777a;

    --notification: #b91dff;
    --discord: #77d66e;
    --mention-detail: #f9a839;
    --mention-message: #413f3f;

    --link: #5d80d6;

    --rocketseat: #8ae75a;
  }
`;
