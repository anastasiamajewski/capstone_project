import React from 'react'
import styled from 'styled-components/macro'
import logo from './logolight.png'

export default function Header() {
  return (
    <HeaderStyled>
      <img src={logo} alt="Rate your day!" height="50px" width="auto" />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  background: var(--secondary);
  color: var(--primary);
  text-align: center;
  justify-content: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`
