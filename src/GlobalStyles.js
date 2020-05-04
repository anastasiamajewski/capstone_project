import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle `

:root{
    --primary-brown: #8b8069;
    --secondary-pink: #B7545C;
    --tertiary-green: #81825B;
    --quaternary-grey: #A4A59B;
    --quinary-dark: #1D1E12;
}

*
{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Baloo Bhaina 2', cursive;
}

body {
    background: url("./plants2.jpg");
    background-size:cover;
    color: var(--quinary-dark);
    background-attachment: fixed;
    overflow: scroll;
}

main {
    overflow: scroll;
    line-height: 1.5;
    display: grid;
    justify-content: center;
}

`

