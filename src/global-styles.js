import { createGlobalStyle } from 'styled-components';
import media from '@pokedex/ui/theme/media';

export const GlobalStyles = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Lora:400,700&amp;subset=cyrillic');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    position: relative;
    min-width: 320px;
    min-height: 100%;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.2;
    color: #333;
    font-family: Lora, serif;
    background-color: rgba(179, 175, 171, .82);
  }
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    font-weight: 300;
  }
  figure {
    margin: 0;
  }
  li {
    list-style-type: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  a {
    outline: 0;
    text-decoration: none;
    color: #333;
    &:hover {
      text-decoration: none;
      color: #424753;
    }
  }
  label {
    user-select: none;
  }
  input {
    outline: none;
  }
  table {
    max-width: 700px;
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    border: 1px solid #333;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
    ${media.tablet`
      margin: 0 auto;
    `}
  }
  tr {
    border-bottom: 1px solid #333;
  }
  td {
    padding: 7px;

    &:nth-child(2n) {
      width: 7%;
      color: #fff;
      text-align: center;
      background-color: #f25f5c;
    }
  }
`;
