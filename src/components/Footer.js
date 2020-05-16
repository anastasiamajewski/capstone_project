import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { BsStarFill } from 'react-icons/bs'
import { BsCalendar } from 'react-icons/bs'

export default function Footer() {
  return (
    <FooterStyled>
      <LinkStyled activeClassName="selected" exact to="/ratingpage">
        <BsStarFill size={30} color="var(--primary)" />
      </LinkStyled>

      <LinkStyled activeClassName="selected" to="/calendaroverview">
        <BsCalendar size={30} color="var(--primary)" />
      </LinkStyled>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  display: flex;
  background: var(--secondary);
  text-align: center;
  justify-content: space-around;
  position: relative;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  bottom: 0;
`
const LinkStyled = styled(NavLink)`
  display: flex;
  border-style: none;
  padding: 10px;
  height: 48px;
  font-size: 0.9em;
  text-decoration: underline;
  align-items: center;
`
