import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    background: linear-gradient(rgba(253, 243, 229, 0.92), rgba(253, 243, 229, 0.96)),
      url('/background.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: ${({ theme }) => theme.colors.ink};
    line-height: 1.6;
  }

  h1, h2, h3, h4 {
    margin: 0 0 12px;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 600;
  }

  p {
    margin: 0 0 16px;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.body};
  }

  a:focus-visible,
  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.sun};
    outline-offset: 3px;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`

export default GlobalStyle
