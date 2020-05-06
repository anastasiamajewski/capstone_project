import React, { useState } from 'react'
import RatingSystem from './RatingSystem'
import styled from 'styled-components/macro'

export default function Home() {
  const [questions, setQuestion] = useState([
    {
      id: '1',
      question: 'Hast du jemandem einen schönen Tag gewünscht?',
      rating: 0,
    },
    {
      id: '2',
      question: 'Hast du Zeit mit deinem Hobby verbracht?',
      rating: 0,
    },
    {
      id: '3',
      question: 'Hast du dich mit einem/er Freund/Freundin unterhalten?',
      rating: 0,
    },
    {
      id: '4',
      question: 'Hast du deine Lieblingsmusik gehört?',
      rating: 0,
    },
    {
      id: '5',
      question: 'Hast du Komplimente verteilt?',
      rating: 0,
    },
    {
      id: '6',
      question: 'Hast du soziale Medien bewusst genutzt?',
      rating: 5,
    },
    {
      id: '7',
      question: 'Hast du genug geschlafen?',
      rating: 5,
    },
    {
      id: '8',
      question: 'Bist du mit einem positiven Gedanken aus dem Bett gestiegen?',
      rating: 5,
    },
    {
      id: '9',
      question: 'Warst du draußen an der frischen Luft?',
      rating: 5,
    },
    {
      id: '10',
      question: 'Hast du dich genügend bewegt?',
      rating: 5,
    },
    {
      id: '11',
      question: 'Hast du genug Wasser getrunken?',
      rating: 5,
    },
    {
      id: '12',
      question: 'Hast du Sport getrieben?',
      rating: 5,
    },
    {
      id: '13',
      question: 'Konntest du stressige Situationen vermeiden?',
      rating: 5,
    },
    {
      id: '14',
      question: 'Hast du dir Zeit fürs Frühstück genommen?',
      rating: 5,
    },
    {
      id: '15',
      question: 'Hast du Obst oder Gemüse gegessen?',
      rating: 5,
    },
    {
      id: '16',
      question: 'Konntest du auf Fleisch verzichten?',
      rating: 5,
    },
    {
      id: '17',
      question: 'Hast du dein Essen bewusst genossen ohne Ablenkungen?',
      rating: 5,
    },
    {
      id: '18',
      question: 'Hast du dir Zeit fürs Kochen genommen?',
      rating: 5,
    },
    {
      id: '19',
      question: 'Konntest du auf süße und fettige Sünden verzichten?',
      rating: 5,
    },
    {
      id: '20',
      question: 'Hast du dir heute ein Kompliment gemacht?',
      rating: 5,
    },
    {
      id: '21',
      question: 'Hast du heute herzhaft gelacht?',
      rating: 5,
    },
    {
      id: '22',
      question: 'Hast du dir heute irgendetwas schönes gegönnt?',
      rating: 5,
    },
    {
      id: '23',
      question: 'Hast du deinen Ärger im Griff gehabt?',
      rating: 5,
    },
    {
      id: '24',
      question: 'Hast du dich heute gelobt für das, was du geschafft hast?',
      rating: 5,
    },
    {
      id: '25',
      question: 'Warst du rechtzeitig bei der Arbeit?',
      rating: 5,
    },
    {
      id: '26',
      question: 'Hast du deine Kollegen freundlich begrüßt?',
      rating: 5,
    },
    {
      id: '27',
      question:
        'Hast du dich mit deinen Kollegen auch über Privates unterhalten?',
      rating: 5,
    },
    {
      id: '28',
      question:
        'Hast du es geschafft deine To-dos für den Arbeitstag zu erledigen?',
      rating: 5,
    },
    {
      id: '29',
      question: 'War deine Laune bei der Arbeit gut?',
      rating: 5,
    },
  ])

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
    </StyledMain>
  )
  function setRating(id, newRating) {
    const index = questions.findIndex((question) => question.id === id)
    const question = questions[index]
    question.rating = newRating
    //
    setQuestion([
      ...questions.slice(0, index, -1),
      ...questions.slice(index, questions.length),
    ])
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
