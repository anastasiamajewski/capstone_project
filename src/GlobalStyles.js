import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle `

:root{
    --eins: #8b8069;
    --zwei: #B7545C;
    --drei: #81825B;
    --vier: #A4A59B;
    --fünf: #1D1E12;
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
    color: var(--fünf);
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

