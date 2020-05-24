import React, { useState } from 'react'
import GlobalStyles from './GlobalStyles'
import styled from 'styled-components'
import RatingPage from './pages/RatingPage'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom'
import Ratingresult from './pages/Ratingresult'
import CalendarOverview from './pages/CalendarOverview'
import Footer from './components/Footer'
import Login from './pages/Login'
import Registration from './pages/Registration'
import { initialProfile } from './services/initialProfile'
import Diary from './pages/Diary'
import Home from './pages/Home'

export function App() {
  const [profile, setProfile] = useState(initialProfile)

  return (
    <>
      <GlobalStyles />

      <BodyStyled>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/registration">
            <Registration profile={profile} setProfile={setProfile} />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/ratingpage">
            <RatingPage />
          </Route>
          <Route path="/ratingresult">
            <Ratingresult />
          </Route>
          <Route path="/calendaroverview">
            <CalendarOverview />
          </Route>
          <Route path="/diary">
            <Diary />
          </Route>
        </Switch>
        <Footer />
      </BodyStyled>
    </>
  )
}

export default App

const BodyStyled = styled.main`
  display: grid;
  grid-template-rows: 48px auto 48px;
  height: 100vh;
  overflow: hidden;
`
