import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root{
    --primary: white;
    --secondary: #FA6E59;
    --tertiary: #fcecb1;
    --quaternary: #077dde;
    --quinary: #F8a055;
}

*
{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Baloo Bhaina 2', cursive;
}

body {
    /* background: url("./ocean.jpg"); */
    background: var(--tertiary);
    background-size:cover;
    color: var(--quaternary);
    background-attachment: fixed;
    overflow: scroll;
}


`
