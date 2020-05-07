import React, { useState } from 'react'
import RatingSystem from './RatingSystem'
import styled from 'styled-components/macro'
import questionList from './questions.json'
import { saveRating, readRating } from './Localstorage'

export default function Home() {
  const [questions, setQuestion] = useState(
    readRating('setQuestion') || questionList
  )

  return (
    <StyledMain>
      {questionList.map((question) => (
        <QuestionCard key={question.id}>
          <p>{question.question}</p>
          <RatingSystem
            rating={question.rating}
            ratingId={question.id}
            setRating={setRating}
          />
        </QuestionCard>
      ))}
    </StyledMain>
  )
  function setRating(id, newRating) {
    const index = questionList.findIndex((question) => question.id === id)
    const question = questionList[index]
    question.rating = newRating
    //
    setQuestion([
      ...questionList.slice(0, index, -1),
      ...questionList.slice(index, questions.length),
    ])
    saveRating(question.id, question.rating)
  }
}

const StyledMain = styled.main`
  display: grid;
  justify-content: center;
  text-align: center;
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
