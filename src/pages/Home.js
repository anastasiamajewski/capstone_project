import React, { useState } from 'react'
import RatingSystem from '../components/RatingSystem'
import styled from 'styled-components/macro'
import questionList from '../components/questions.json'
import { saveRating, readRating } from '../components/Localstorage'
import Button from '../components/RatingButton'

export default function Home() {
  const [questions, setQuestion] = useState(
    readRating('setQuestion') || questionList
  )

  return (
    <StyledMain>
      {questions.map((question) => (
        <QuestionCard key={question.id}>
          <p>{question.question}</p>
          <RatingSystem
            rating={question.rating}
            ratingId={question.id}
            setRating={setRating}
          />
        </QuestionCard>
      ))}
      <Button />
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
  border: solid var(--secondary-pink) 2px;
  border-radius: 24px;
  background: var(--primary-brown);
  opacity: 0.9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 200px;
  font-size: 1.2em;
  line-height: 1.2;
  margin-top: 16px;
`
