import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { FaSquare } from 'react-icons/fa'

export default function RatingSystem({ ratingId, rating, setRating }) {
  return (
    <RatingStyled>
      {[...Array(5)].map((buttons, i) => {
        const ratingValue = i + 1
        return (
          <LabelStyled>
            <RadioButtonHidden
              type="radio"
              name="rating"
              value={ratingValue}
              onChange={() => setRating(ratingId, ratingValue)}
            />
            <FaSquare
              size={30}
              color={
                ratingValue <= rating
                  ? 'var(--secondary-pink)'
                  : 'var(--quaternary-grey)'
              }
            />
          </LabelStyled>
        )
      })}
    </RatingStyled>
  )
}

const RatingStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: solid white 3px;
  border-radius: 24px;
  background: white;
  width: 190px;
  margin-top: 12px;
`

const RadioButtonHidden = styled.input.attrs({ type: 'radio' })`
  display: none;
`
const LabelStyled = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
`
