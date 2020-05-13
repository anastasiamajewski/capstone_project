import React from 'react'
import { auth } from './firebase'
import { object, string } from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import styled from 'styled-components'

export default function Registration() {
  const validationSchema = object().shape({
    email: string().required().email(),
    password: string().required().min(8),
  })

  function onSubmit(formData) {
    console.log(formData)
    auth
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then((response) => {
        console.log(response)
      })
  }
  return (
    <>
      <StyledMain>
        <h1>Registriere dich hier:</h1>
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
                placeholder="Passwort (min. 8 Zeichen)"
              />
              <ErrorMessage name="password" component="div" className="error" />
              <ButtonStyled type="submit" to="/" disabled={isSubmitting}>
                Registrieren
              </ButtonStyled>
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
