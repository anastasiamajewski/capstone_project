import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function RatingButton({ countRating }) {
  return (
    <>
      <div>
        <LinkStyled to="/ratingresult" onClick={countRating}>
          Rate it!
        </LinkStyled>
      </div>
    </>
  )
}

const LinkStyled = styled(NavLink)`
  color: var(--primary);
  padding: 16px;
  border-radius: 12px;
  background: var(--secondary);
  opacity: 0.9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-content: center;
  width: 180px;
  height: 60px;
  line-height: 1.2;
  font-size: 18pt;
  margin-top: 16px;
  margin-bottom: 16px;
  text-decoration: none;

  &:active {
    background: var(--primary);
    color: var(--secondary);
  }
`
