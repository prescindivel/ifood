import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.jpg';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    min-height: 100%;
  }

  body {
    font-family: 'Roboto', Arial, sans-serif;
    background-color: #000;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${background});
    -webkit-font-smoothing: antialiased !important;
  }

  .container {
    margin: 20px auto;
    max-width: 450px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content {
    margin-top: 20px;
    width: 100%;
    border-radius: 4px;
    padding: 30px;
    background-color: #fff;
  }

  .content form {
    display: flex;
    flex-direction: column;
  }

  .content .page-title {
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 30px;
  }

  .content .button-separator {
    font-size: 12px;
    text-align: center;
    margin: 15px auto;
  }

  .logout {
    position: fixed;
    top: 20px;
    right: 20px;
    color: #fff;
    &:hover {
      opacity: .7;
    }
  }
`;

export default GlobalStyle;
