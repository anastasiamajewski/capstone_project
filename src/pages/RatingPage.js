import React, { useState, useEffect } from 'react'
import { db } from '../services/firebase'
import RatingSystem from '../components/RatingSystem'
import styled from 'styled-components/macro'
import questionList from '../components/questions.json'
import { saveRating, readRating } from '../components/Localstorage'
import RatingButton from '../components/RatingButton'
import { NavLink } from 'react-router-dom'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import RatingSystemNewQuestion from '../components/RatingSystemNewQuestion'
import swal from 'sweetalert'

export default function RatingPage({ setRatingNew, deleteQuestion }) {
  const [questions, setQuestion] = useState(
    readRating('setQuestion') || questionList
  )

  const [newquestion, setNewQuestion] = useState(
    readRating('setNewQuestion') || []
  )
  useEffect(
    () => {
      const addedQuestions = db
        .collection('userquestions')
        .onSnapshot((snapshot) => {
          const allQuestions = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          setNewQuestion(allQuestions)
        })
      return () => {
        addedQuestions()
      }
    },
    [],
    saveRating('setNewQuestion', newquestion)
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

      {newquestion.map((newquestion) => (
        <QuestionCard
          key={newquestion.id}
          newquestion={newquestion}
          setNewQuestion={setNewQuestion}
        >
          <p>{newquestion.question}</p>
          <RatingSystemNewQuestion
            ratingIdNew={newquestion.id}
            ratingNew={newquestion.rating}
            setRatingNew={setRatingNew}
            onDeleteClick={deleteNewquestion}
          />
          <IconsFooterStyled>
            <RiDeleteBin5Line
              size={30}
              cursor="pointer"
              onClick={() => deleteNewquestion(newquestion)}
            />
          </IconsFooterStyled>
        </QuestionCard>
      ))}
      <ButtonSection>
        <LinkStyled to="/addquestion">
          <BsFillPlusCircleFill
            size={30}
            cursor="pointer"
            color="var(--secondary)"
          />
        </LinkStyled>
        <RatingButton />
      </ButtonSection>
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

  function setRatingNew(id, newQuestionRating) {
    const index = newquestion.findIndex((question) => question.id === id)
    const question = newquestion[index]
    question.rating = newQuestionRating
    setNewQuestion([
      ...newquestion.slice(0, index),
      question,
      ...newquestion.slice(index + 1, newquestion.length),
    ])
    saveRating('setNewQuestion', newquestion)
  }

  function deleteNewquestion(newquestion) {
    swal({
      title: 'Sicher?',
      icon: 'warning',
      buttons: ['Abbrechen', 'Löschen'],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        db.collection('userquestions')
          .doc(newquestion.id)
          .delete()
          .then(
            swal('Deine Frage wurde gelöscht!', {
              icon: 'success',
            })
          )
          .catch((error) => alert('Huch, da ist etwas schief gelaufen', error))
      } else {
        return null
      }
    })
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
  position: relative;
`
const LinkStyled = styled(NavLink)`
  display: flex;
  border-style: none;
  font-size: 0.9em;
  text-decoration: underline;
  align-items: center;
`
const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 12px;
`
const IconsFooterStyled = styled.span`
  right: 20px;
  top: 150px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--secondary);
`
