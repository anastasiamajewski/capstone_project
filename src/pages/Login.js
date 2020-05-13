import React, { useState } from 'react'
import { object, string } from 'yup'
import { auth } from './firebase'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

export function UserProfile({ user }) {
  return (
    <div>
      <h1>user profile: {user.uid}</h1>
    </div>
  )
}

export default function Login() {
  const [user, setUser] = useState({})
  const [loginStatus, setLoginStatus] = useState()

  const validationSchema = object().shape({
    email: string().required().email(),
    password: string().required().min(8),
  })

  function onSubmit(formData) {
    console.log(formData)
    auth
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then((response) => {
        console.log(response)
        setUser(response.user)
        setLoginStatus(true)
      })
      .catch((response) => {
        console.log(response)
        setUser({})
        setLoginStatus(false)
      })
  }

  return (
    <>
      <StyledMain>
        <h1>Login</h1>
        {loginStatus && <UserProfile user={user} />}
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <FormStyled>
              <FieldStyled type="email" name="email" placeholder="E-Mail" />
              <ErrorMessage name="email" component="div" className="error" />
              <FieldStyled
                type="password"
                name="password"
                placeholder="Passwort"
              />
              <ErrorMessage name="password" component="div" className="error" />
              <ButtonStyled type="submit" to="/home" disabled={isSubmitting}>
                Login
              </ButtonStyled>
              <LinkStyled to="/registration">
                Du hast dich noch nicht registriert? Dann hier entlang!
              </LinkStyled>
            </FormStyled>
          )}
        </Formik>
      </StyledMain>
    </>
  )
}

const StyledMain = styled.main`
  overflow: scroll;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormStyled = styled.form`
  border-radius: 24px;
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`
const FieldStyled = styled.input`
  outline: 0;
  background: #f2f2f2;
  border-radius: 24px;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
`

const ButtonStyled = styled.button`
  text-transform: uppercase;
  outline: 0;
  border-radius: 24px;
  background: var(--secondary);
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;

  &:hover {
    background: #077dde;
  }
`
// beim hover nimmt er meinevar(--quatenary) nicht

const LinkStyled = styled(NavLink)`
  color: var(--quatenary);
  justify-content: center;
  align-content: center;

  &:active {
    background: var(--primary);
    color: var(--secondary);
  }
`
