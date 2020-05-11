import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Button({ countRating }) {
  return (
    <>
      <div>
        <LinkStyled to="/ratingresult" onClick={countRating}>
          Bewertung abschicken!
        </LinkStyled>
      </div>
    </>
  )
}

const LinkStyled = styled(NavLink)`
  color: black;
  padding: 16px;
  border: solid var(--primary-brown) 2px;
  border-radius: 24px;
  background: var(--secondary-pink);
  opacity: 0.9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  width: 180px;
  font-size: 1.2em;
  line-height: 1.2;
  margin-top: 16px;
  margin-bottom: 16px;
`
