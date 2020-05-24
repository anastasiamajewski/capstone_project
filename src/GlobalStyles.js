import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root{
    --primary: white;
    --secondary: #118C8B;
    --tertiary: #fcecb1;
    --tertiary-light: #fffcf2;
    --quaternary: #F14D49;
    --quaternary-light: #F2746B;
    --quinary: #000D29;
   
}

*
{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Baloo Bhaina 2', cursive;
}

body {
    background: var(--tertiary-light);
    background-size:cover;
    color: var(--secondary);
    overflow: scroll;
}
`
