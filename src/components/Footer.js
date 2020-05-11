import React from 'react'
import styled from 'styled-components/macro'

export default function Footer() {
  return <FooterStyled></FooterStyled>
}

const FooterStyled = styled.footer`
  display: flex;
  background: var(--secondary-pink);
  color: var(--quinary-dark);
  text-align: center;
  justify-content: space-around;
`
