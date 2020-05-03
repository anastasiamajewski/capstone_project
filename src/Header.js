import React from 'react'
import styled from 'styled-components/macro'

export default function Header(){
return(

<HeaderStyled>
    <h1>Rate your day!</h1>
</HeaderStyled>
)}


const HeaderStyled = styled.header`
  display: flex;
  background: var(--zwei);
  color: var(--fünf);
  text-align: center;
  justify-content: space-around;
`