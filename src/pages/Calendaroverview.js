import React from 'react'
import Calendarcomponent from '../components/Calendarcomponent'
import styled from 'styled-components'

export default function Calendaroverview() {
  return (
    <StyledMain>
      <Calendarcomponent />
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
