import React from 'react'
import GlobalStyles from './GlobalStyles'
import styled from 'styled-components'
import Home from './pages/Home'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom'
import Ratingresult from './pages/Ratingresult'
import CalendarOverview from './pages/CalendarOverview'
import Footer from './components/Footer'
import Login from './pages/Login'
import Registration from './pages/Registration'

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/ratingresult">
          <Ratingresult />
        </Route>
        <Route path="/calendaroverview">
          <CalendarOverview />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App
