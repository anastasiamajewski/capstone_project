import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root{
    --primary: white;
    --secondary: #FA6E59;
    
    --tertiary: #fcecb1;
    --tertiary-light: #fff7db;
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
    background: var(--tertiary-light);
    background-size:cover;
    color: var(--quaternary);
    overflow: scroll;
}

`
