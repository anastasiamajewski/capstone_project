import React from 'react'
import { authentication } from '../services/firebase'
import { object, string } from 'yup'
import { Formik, ErrorMessage } from 'formik'
import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export default function Registration() {
  const validationSchema = object().shape({
    email: string().required().email(),
    password: string().required().min(8),
  })

  function onSubmit(formData) {
    console.log(formData)
    authentication
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then((firebaseResponse) => {
        console.log(firebaseResponse)
      })
  }
  return (
    <>
      <StyledMain>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, values, handleSubmit, handleChange }) => (
            <FormStyled onSubmit={handleSubmit}>
              <WelcomeText>Registriere dich hier:</WelcomeText>
              <FieldStyled
                onChange={handleChange}
                value={values.email}
                type="email"
                name="email"
                placeholder="E-Mail"
              />
              <ErrorMessage name="email" component="div" className="error" />
              <FieldStyled
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                placeholder="Passwort (min. 8 Zeichen)"
              />
              <ErrorMessage name="password" component="div" className="error" />
              <ButtonStyled type="submit" disabled={isSubmitting}>
                <ButtonLinkStyled name="registration" to={'/ratingpage'}>
                  Registrieren
                </ButtonLinkStyled>
              </ButtonStyled>

              <LinkStyled name="login" to={'/'}>
                Zurück zum Login
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
  margin-top: 18px;
`
const FormStyled = styled.form`
  border-radius: 24px;
  background: var(--primary);
  max-width: 300px;
  margin: 0 auto 100px;
  margin-top: 36px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
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
  background: var(--quaternary);
  width: 100%;
  border: 0;
  padding: 15px;
  color: var(--primary);
  font-size: 14px;
  margin-bottom: 12px;
  cursor: pointer;

  &:hover {
    background: var(--secondary);
  }
`

const ButtonLinkStyled = styled(NavLink)`
  color: var(--quatenary);
  justify-content: center;
  align-content: center;
  font-size: 12px;

  &:active {
    background: var(--primary);
    color: var(--secondary);
  }
`
const WelcomeText = styled.h1`
  font-size: 16px;
  margin-bottom: 12px;
`
const LinkStyled = styled(NavLink)`
  color: var(--quatenary);
  justify-content: center;
  align-content: center;
  font-size: 10px;

  &:active {
    background: var(--primary);
    color: var(--secondary);
  }
`
