import { rgba } from 'polished';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html{
    --heading-1: 4rem
    --heading-1: 3rem
    --heading-1: 2.5rem
    --heading-1: 2rem
    --heading-1: 1.8rem
    --heading-1: 1.6rem
    --shadow-1: rgba(0, 0, 0, 0.1);
    --shadow-2: rgba(0, 0, 0, 0.2);
    --shadow-5: rgba(0, 0, 0, 0.5);
    --shadow-8: rgba(0, 0, 0, 0.8);
    --shadow-inset: rgba(255, 255, 255, 0.5);
    font-size: 10px;
    --grid-items-per-row: 6;
    --grid-item-margin: 16px;
    --grid-item-max-width: 360px;

    @media (max-width: 2287px) {
      --grid-items-per-row: 5;
    }
      @media (max-width: 1947px) {
      --grid-items-per-row: 4;
    }
      @media (max-width: 1127px) {
      --grid-items-per-row: 3;
    }
      @media (max-width: 850px) {
      --grid-items-per-row: 2;
    }
      @media (max-width: 600px) {
      --grid-items-per-row: 1;
    }
  }
  
  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box !important;
    -moz-box-sizing: border-box !important;
    box-sizing: border-box !important;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.fontFamily};

    min-height: 100vh;
  }
  a{text-decoration: none}

  h6, h5, h4, h3, h2, h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

  h1 {
    font-size: calc(1.375rem + 1.5vw);
  }
  @media (min-width: 1200px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: calc(1.325rem + 0.9vw);
  }
  @media (min-width: 1200px) {
    h2 {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: calc(1.3rem + 0.6vw);
  }
  @media (min-width: 1200px) {
    h3 {
      font-size: 1.75rem;
    }
  }

  h4 {
    font-size: calc(1.275rem + 0.3vw);
  }
  @media (min-width: 1200px) {
    h4 {
      font-size: 1.5rem;
    }
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .ct{
    box-shadow: 0px 2px 5px 1px ${(props) => rgba(props.theme.black, 0.1)};
    &__content{
      color: ${(props) => props.theme.text} 
    }
    &:before, &:after {
      background: ${(props) => props.theme.highlight};
    }
  }

  .Toastify__toast-container {
    font-size: 16px;
}
`;
