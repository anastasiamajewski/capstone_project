import React from 'react'
import RatingSystem from './RatingSystem'
import styled from 'styled-components/macro'



export default function Home(){
    return(

<StyledMain>
<h1>Rate your day!</h1>
<QuestionCard>
<p>Hast du genug geschlafen?</p>
<RatingSystem/>
</QuestionCard>
</StyledMain>
)
}

const QuestionCard = styled.section`
  padding:36px;
  border:solid var(--zwei) 3px; 
  border-radius:24px;
  background: var(--eins);
  box-shadow: 0 2px 4px rgba(0, 0, 0,.4);
  margin-top: 12px;
`
const StyledMain = styled.main `
    display:grid;
    justify-content: center;  
    text-align:center;
`