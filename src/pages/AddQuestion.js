import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { db } from '../services/firebase'
import Button from '../components/Button'
import { IoMdArrowBack } from 'react-icons/io'

export default function AddQuestion() {
  const [addedQuestion, setAddedQuestion] = useState('')
  const [newquestion, setNewquestion] = useState({
    question: '',
    rating: '0',
  })

  return (
    <StyledMain>
      <BackStyled href="javascript:history.back()">
        <IoMdArrowBack size={40} color="var(--secondary)" />
      </BackStyled>
      <HeadingStyled>Füge deine deine eigene Frage hinzu!</HeadingStyled>
      <TextArea>
        <FormStyled onSubmit={addNewQuestion}>
          <label htmlFor="text"></label>
          <TextStyled>
            Achte dabei darauf, dass die Frage so formuliert ist, dass sie mit
            der 5-Sterne-Skala bewertet werden kann (1 Stern = negativ, 5 Sterne
            = positiv). <br />
            Zum Beispiel:
            <br />
            "Hattest du heute schlechte Laune?" <br />(<b>falsch</b> formuliert)
            <br /> "Hattest du heute gute Laune?"
            <br /> (<b>richtig</b> formuliert)
          </TextStyled>

          <ContentInputStyled
            id="question"
            name="question"
            type="textarea"
            placeholder="..."
            required
            onChange={updateQuestions}
            value={newquestion.question}
          />

          <Button type="submit">Hinzufügen!</Button>
          {addedQuestion}
        </FormStyled>
      </TextArea>
    </StyledMain>
  )
  function updateQuestions(e) {
    setNewquestion({ ...newquestion, [e.target.name]: e.target.value })
  }

  function addNewQuestion(e) {
    e.preventDefault()
    db.collection('userquestions').add(newquestion)
    setNewquestion({
      question: '',
      rating: '',
    })
    setAddedQuestion(
      <SubmitTextStyled>Dein Frage wurde hinzugefügt!</SubmitTextStyled>
    )
  }
}

AddQuestion.propTypes = {
  newquestion: PropTypes.object,
  question: PropTypes.string,
  rating: PropTypes.string,
  updateQuestions: PropTypes.func,
  addNewQuesiton: PropTypes.func,
}

const SubmitTextStyled = styled.p`
  margin-bottom: 24px;
  font-weight: 500;
`

const ContentInputStyled = styled.textarea`
  font-size: 16px;
  font-weight: 300;
  color: var(--quinary);
  width: 300px;
  height: 150px;
  border-radius: 8px;
  border: solid 8px white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  margin-bottom: 12px;
  margin-top: 12px;
  outline-color: blue;
  background: var(--primary);
  padding: 12px;
  resize: none;
  outline: 0px none transparent;
  ::placeholder {
    color: var(--secondary);
  }
  textarea:focus,
  input:focus {
    outline: 0;
  }
`
const FormStyled = styled.form`
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 36px;
  margin-right: 36px;
`
const TextStyled = styled.p`
  line-height: 1.2em;
`
const StyledMain = styled.main`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 36px;
  margin-right: 36px;
`
const HeadingStyled = styled.h1`
  font-size: 24px;
  margin-top: 20px;
  line-height: 26px;
`
const BackStyled = styled.a`
  display: flex;
  position: absolute;
  padding: 10px;
  height: 48px;
  font-size: 0.9em;
  right: 300px;
  bottom: 60px;
  align-items: center;
`
