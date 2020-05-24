import React, { useState } from 'react'
import RatingSystem from '../components/RatingSystem'
import styled from 'styled-components/macro'
import questionList from '../components/questions.json'
import { saveRating, readRating } from '../components/Localstorage'
import RatingButton from '../components/RatingButton'

export default function Home({ profile = {} }) {
  const [questions, setQuestion] = useState(
    readRating('setQuestion') || questionList
  )

  return (
    <StyledMain>
      {questions.map((question) => (
        <QuestionCard key={question.id} profile={profile}>
          <p>{question.question}</p>
          <RatingSystem
            rating={question.rating}
            ratingId={question.id}
            setRating={setRating}
          />
        </QuestionCard>
      ))}
      <RatingButton />
    </StyledMain>
  )
  function setRating(id, newRating) {
    const index = questions.findIndex((question) => question.id === id)
    const question = questions[index]
    question.rating = newRating
    //
    setQuestion([
      ...questions.slice(0, index),
      question,
      ...questions.slice(index + 1, questions.length),
    ])
    // sollte durch ein useEffect ersetzt werden
    saveRating('setQuestion', questions)
  }
}

const StyledMain = styled.main`
  overflow: scroll;
  display: grid;
  text-align: center;
  justify-items: center;
`

const QuestionCard = styled.div`
  padding: 36px;
  /* border: solid var(--secondary) 2px; */
  border-radius: 24px;
  background: var(--primary);
  color: var(--secondary);
  opacity: 0.9;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 200px;
  font-size: 1.2em;
  line-height: 1.2;
  margin-top: 16px;
`
