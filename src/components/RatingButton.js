import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import Button from '../components/Button'

export default function RatingButton() {
  return (
    <>
      <div>
        <Button>
          <LinkStyled to="/ratingresult">Rate it!</LinkStyled>
        </Button>
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
