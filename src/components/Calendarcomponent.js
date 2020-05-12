import React, { useState } from 'react'
import Calendar from 'react-calendar'
import styled from 'styled-components'
import { countRating } from '../pages/Ratingresult'

export default function Calendarcomponent() {
  const [date, setDate] = useState(new Date())

  const onChange = (date) => {
    setDate(date)
  }

  return (
    <CalendarAreaStyled>
      <Calendar
        showWeekNumbers
        showNavigation
        onChange={onChange}
        value={date}
      />
      {console.log(date)}
      {countRating()}
    </CalendarAreaStyled>
  )
}

const CalendarAreaStyled = styled.div`
  background-color: black;
  color: white;
`
