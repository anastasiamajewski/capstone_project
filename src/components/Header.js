import React from 'react'
import styled from 'styled-components/macro'

export default function Header() {
  return (
    <HeaderStyled>
      <h1>Rate your day!</h1>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  background: var(--secondary);
  color: var(--primary);
  text-align: center;
  justify-content: space-around;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`
