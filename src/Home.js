import React from 'react'
import RatingSystem from './RatingSystem'
import styled from 'styled-components/macro'




export default function Home(){
    return(

<StyledMain>
<QuestionCard>
<p>Hast du jemadnem einen schönen Tag gewünscht?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Hast du Zeit mit deinem Hobby verbracht?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Hast du dich mit einem/er Freund/Freundin unterhalten?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Hast du deine Lieblingsmusik gehört?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Hast du Komplimente verteilt?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Hast du soziale Medien bewusst genutzt?</p>
<RatingSystem/>
</QuestionCard>


<QuestionCard>
<p>Hast du genug geschlafen?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Bist du mit einem positiven Gedanken aus dem Bett gestiegen?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Warst du draußen an der frischen Luft?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Hast du dich genügend bewegt?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Hast du genug Wasser getrunken?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Hast du Sport getrieben?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Konntest du stressige Situationen vermeiden? </p>
<RatingSystem/>
</QuestionCard>


<QuestionCard>
<p>Hast du dir Zeit fürs Frühstück genommen?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Hast du Obst oder Gemüse gegessen?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Konntest du auf Fleisch verzichtet?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Hast du dein Essen bewusst genossen ohne Ablenkungen?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Hast du dir Zeit fürs Kochen genommen?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Konntest du auf süße und fettige Sünden verzichten?</p>
<RatingSystem/>
</QuestionCard>


<QuestionCard>
<p>Hast du dir heute ein Kompliment gemacht?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Hast du heute herzhaft gelacht?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Hast du dir heute irgendetwas schönes gegönnt?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Hast du deinen Ärger im Griff gehabt?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Hast du dich heute gelobt für das, was du geschafft hast?</p>
<RatingSystem/>
</QuestionCard>


<h2>Work</h2>
<QuestionCard>
<p>Warst du rechtzeitig bei der Arbeit?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Hast du deine Kollegen freundlich begrüßt?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Hast du dich mit deinen Kollegen auch über Privates unterhalten?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Hast du es geschafft deine To-dos für den Arbeitstag zu erledigen?</p>
<RatingSystem/>
</QuestionCard>

<QuestionCard>
<p>Wie war deine Laune bei der Arbeit?</p>
<RatingSystem/>
</QuestionCard>

</StyledMain>
)
}


const StyledMain = styled.main `
    display:grid;
    justify-content: center;
    text-align:center;
`

const QuestionCard = styled.div`
  padding:36px;
  border:solid var(--zwei) 2px; 
  border-radius: 24px;
  background: var(--eins);
  opacity: 0.9;
  box-shadow: 0 4px 6px rgba(0, 0, 0,.4);
  display:flex;
  flex-direction:column;
  align-items: center;
  width: 300px;
  height: 200px;
  font-size: 1.2em;
  line-height: 1.2;
  margin-top: 16px;
`