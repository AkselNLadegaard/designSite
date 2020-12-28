import { css } from '@emotion/react'
import * as constant from './constants'
export const baseStyles = css`
  /*html {
    font-family: 'Ubuntu', sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'VT323', monospace; 
    margin-top: 0;
    margin-block-start: 0;
  }*/
  button {
    outline: none;
    border: 0;
  }
  input[type='text'],
  textarea {
    outline: none;
    border: none;
    min-height: 32px;
    border-radius: ${constant.borderRadius};
    padding: 0 ${constant.borderRadius};
    background: ${constant.white};
    width: 100%;
  }
  textarea {
    padding: ${constant.borderRadius};
  }
`
