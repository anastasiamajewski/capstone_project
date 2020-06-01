import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { readRating } from '../components/Localstorage'
import { db } from '../services/firebase'
import Button from '../components/Button'

export default function AddTopic({ countRating }) {
  const [addedDiaryEntry, setAddedDiaryEntry] = useState('')
  const finalRatingValue = countRating()
  const timestamp = new Date()
  const today = timestamp.toLocaleDateString('de-DE')

  const [entry, setEntry] = useState({
    date: today,
    rating: finalRatingValue,
    text: '',
  })

  return (
    <>
      <FormStyled onSubmit={addNewEntry}>
        <label htmlFor="text">Was war heute los?</label>
        <ContentInputStyled
          id="text"
          name="text"
          type="textarea"
          placeholder="..."
          required
          onChange={updateDiaryEntry}
          value={entry.text}
        />

        <Button type="submit">Hinzufügen!</Button>
        {addedDiaryEntry}
      </FormStyled>
    </>
  )
  function updateDiaryEntry(e) {
    setEntry({ ...entry, [e.target.name]: e.target.value })
  }

  function addNewEntry(e) {
    e.preventDefault()
    db.collection('diary').add(entry)
    setEntry({
      date: '',
      rating: '',
      text: '',
    })
    setAddedDiaryEntry(
      <SubmitTextStyled>
        Dein Tagebucheintrag wurde hinzugefügt!
      </SubmitTextStyled>
    )
  }

  function countRating() {
    const questions = readRating('setQuestion')
    const sum = questions.reduce((last, item) => last + item.rating, 0)
    const divided = sum / questions.length
    return Math.round(divided * 10) / 10
  }
}

AddTopic.propTypes = {
  entry: PropTypes.object,
  date: PropTypes.string,
  rating: PropTypes.string,
  text: PropTypes.string,
  updateDiaryEntry: PropTypes.func,
  addNewEntry: PropTypes.func,
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
