import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { BsStarFill } from 'react-icons/bs'
import { FaPencilAlt } from 'react-icons/fa'
import { GiBookCover } from 'react-icons/gi'
import { RiHomeHeartLine } from 'react-icons/ri'

export default function Footer() {
  return (
    <FooterStyled>
      <LinkStyled activeClassName="selected" exact to="/home">
        <RiHomeHeartLine size={30} color="var(--primary)" />
      </LinkStyled>

      <LinkStyled activeClassName="selected" to="/ratingpage">
        <BsStarFill size={30} color="var(--primary)" />
      </LinkStyled>

      <LinkStyled activeClassName="selected" to="/ratingresult">
        <FaPencilAlt size={30} color="var(--primary)" />
      </LinkStyled>

      <LinkStyled activeClassName="selected" to="/diary">
        <GiBookCover size={30} color="var(--primary)" />
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

  svg {
    fill: var(--primary);
    width: 32px;
    height: 32px;
  }
  &.selected {
    background: var(--secondary);
    svg {
      fill: var(--quaternary);
    }
  }
`
