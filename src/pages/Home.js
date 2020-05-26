import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <StyledMain>
      <HeadingStyled>Schön, dass du da bist!</HeadingStyled>
      <TextArea>
        <SubHeadingStyled>Wie war dein Tag bisher?</SubHeadingStyled>
        <TextStyled>
          Oft haben wir das Gefühl, dass unser Tag nicht gut verlaufen ist aber
          hinterfragen nicht wieso. Vielleicht war der Tag gar nicht so schlecht
          aber ein unbedeutsames Ereignis hat uns die Laune vermiest?
        </TextStyled>
      </TextArea>
      <Quote>
        <BlockquoteStyled>
          {' '}
          "Achtsamkeit kann uns dabei helfen, wieder zu kommunizieren, vor allem
          mit uns selbst." <br />
          <AuthorStyled>-Thich Nhat Hanh </AuthorStyled>
        </BlockquoteStyled>
      </Quote>
      <TextArea>
        <TextStyled>
          Was gehört zu einem guten Tag? Ich habe 33 Personen gefragt, wie ein
          perfekter Tag aussieht und anhand der Antworten einige Fragen
          formuliert. Bewerte die Fragen auf einer 5-Sterne-Skala (1 Stern =
          negativ, 5 Sterne = positiv). Das Ratingergebnis gibt dir den
          Gesamtwert deines Tages wieder. Du kannst dir zum Ratingergebnis
          Notizen machen, um die Besonderheiten oder Schwierigkeiten deines
          Tages zu dokumentieren.
          <br />
          <br />
          Bewerte deinen Tag und bekomme so ein Bewusstsein dafür, ob dein Tag
          wirklich so gut oder schlecht ist, wie du glaubst.
          <br />
          <br />
          Auf los geht's los! Klicke hier, um deinen Tag zu bewerten:
        </TextStyled>
      </TextArea>
      <Button>
        <LinkStyled to="/ratingpage">Rate your day!</LinkStyled>
      </Button>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const HeadingStyled = styled.h1`
  font-size: 24px;
  margin-top: 20px;
  line-height: 20px;
`

const SubHeadingStyled = styled.h2`
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 12px;
`

const TextStyled = styled.p`
  line-height: 1.2em;
`
const BlockquoteStyled = styled.blockquote`
  font-style: italic;
  font-size: 16px;
`

const AuthorStyled = styled.p`
  font-style: italic;
  font-size: 10px;
`

const Quote = styled.div`
  padding: 36px;
  border-radius: 24px;
  background: var(--primary);
  color: var(--secondary);
  opacity: 0.9;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 120px;
  font-size: 1.2em;
  line-height: 1.2;
  margin-top: 16px;
  margin-bottom: 10px;
`
const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  margin-left: 36px;
  margin-right: 36px;
`

const LinkStyled = styled(NavLink)`
  line-height: 1.2;
  font-size: 18pt;
  text-decoration: none;
  color: var(--primary);
  justify-content: center;
`
