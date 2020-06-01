import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { FaStar } from 'react-icons/fa'

export default function RatingSystem({ ratingIdNew, setRatingNew, ratingNew }) {
  //const [ratingNew, setRatingNew] = useState(null)
  return (
    <RatingStyled>
      {[...Array(5)].map((stars, i) => {
        const ratingValueNew = i + 1
        return (
          <LabelStyled key={ratingIdNew + i}>
            <RadioButtonHidden
              type="radio"
              name="ratingNew"
              value={ratingValueNew}
              onChange={() => setRatingNew(ratingIdNew, ratingValueNew)}
            />
            <FaStar
              size={30}
              cursor="pointer"
              color={
                ratingValueNew <= ratingNew ? 'var(--quaternary)' : 'white'
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
  border: solid var(--quaternary) 3px;
  border-radius: 24px;
  background: var(--tertiary);
  width: 190px;
  height: 40px;
  margin-top: 18px;
`

const RadioButtonHidden = styled.input.attrs({ type: 'radio' })`
  display: none;
`
const LabelStyled = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
`
