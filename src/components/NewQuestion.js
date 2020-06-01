import React from 'react'
import styled from 'styled-components/macro'
import RatingSystemNewQuestion from '../components/RatingSystemNewQuestion'

export default function NewQuestion({ newquestion }) {
  return (
    <>
      <div>
        <QuestionCard
          key={newquestion.id}
          newquestion={newquestion}
          setNewQuestion={setNewQuestion}
        >
          <p>{newquestion.question}</p>
          <RatingSystemNewQuestion
            key={newquestion.rating}
            setRatingNew={setRatingNew}
          />
        </QuestionCard>
      </div>
    </>
  )
}

const QuestionCard = styled.div`
  padding: 36px;
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
