import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function RatingButton() {
  return (
    <>
      <div>
        <ButtonStyled>
          <LinkStyled to="/ratingresult">Rate it!</LinkStyled>
        </ButtonStyled>
      </div>
    </>
  )
}

const LinkStyled = styled(NavLink)`
  line-height: 1.2;
  font-size: 18pt;
  text-decoration: none;
  color: var(--primary);
  justify-content: center;
`

const ButtonStyled = styled.button`
  border-radius: 12px;
  background: var(--quaternary);
  opacity: 0.9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 40px;
  line-height: 1.2;
  font-size: 18pt;
  margin-top: 16px;
  margin-bottom: 16px;
`
