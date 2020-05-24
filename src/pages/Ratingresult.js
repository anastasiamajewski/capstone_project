import React from 'react'
import styled from 'styled-components'
import { readRating } from '../components/Localstorage'
import DiaryForm from '../components/DiaryForm'

export default function Ratingresult() {
  return (
    <StyledMain>
      <HeadingStyled>Dein Ergebnis</HeadingStyled>
      <CircleStyled>{countRating()}</CircleStyled>

      <DiaryForm />
    </StyledMain>
  )
}

export function countRating() {
  const questions = readRating('setQuestion')
  const sum = questions.reduce((last, item) => last + item.rating, 0)
  const divided = sum / questions.length
  return Math.round(divided * 10) / 10
}

const HeadingStyled = styled.h1`
  font-size: 18px;
  margin-top: 12px;
`

const CircleStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  background-color: var(--primary);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  width: 200px;
  height: 200px;
  margin-top: 16px;

  &:hover {
    background-color: var(--quaternary);
  }
`

const StyledMain = styled.main`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`
