import React from 'react'
import CalendarComponent from '../components/CalendarComponent'
import styled from 'styled-components'

export default function CalendarOverview() {
  return (
    <StyledMain>
      <CalendarComponent />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  overflow: scroll;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
`
