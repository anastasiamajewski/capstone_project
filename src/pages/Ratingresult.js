import React from 'react'
import styled from 'styled-components'
import { readRating } from '../components/Localstorage'

export default function Ratingresult() {
  return (
    <StyledMain>
      <ResultStyled>Dein Ergebnis:</ResultStyled>
      <CircleStyled>{countRating()}</CircleStyled>
    </StyledMain>
  )
}

export function countRating() {
  const questions = readRating('setQuestion')
  const sum = questions.reduce((last, item) => last + item.rating, 0)
  const divided = sum / questions.length
  return Math.round(divided * 10) / 10
}

const ResultStyled = styled.div`
  border-radius: 24px;
  background: var(--primary);
  opacity: 0.9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 80px;
  font-size: 1.2em;
  line-height: 1.2;
  margin-top: 16px;
`

const CircleStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32pt;
  background-color: var(--primary);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  width: 200px;
  height: 200px;
  margin-top: 16px;

  &:hover {
    background-color: var(--secondary);
  }
`

const StyledMain = styled.main`
  overflow: scroll;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
`
