import React from 'react'
import styled from 'styled-components/macro'
import { FaSquare } from 'react-icons/fa'

export default function RatingSystem({ ratingId, rating, setRating }) {
  return (
    <RatingStyled>
      {[...Array(5)].map((buttons, i) => {
        const ratingValue = i + 1
        return (
          <LabelStyled key={ratingId + i}>
            <RadioButtonHidden
              type="radio"
              name="rating"
              value={ratingValue}
              onChange={() => setRating(ratingId, ratingValue)}
            />
            <FaSquare
              size={30}
              color={
                ratingValue <= rating ? 'var(--secondary)' : 'var(--quaternary)'
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
  border: solid var(--tertiary) 3px;
  border-radius: 24px;
  background: var(--tertiary);
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
