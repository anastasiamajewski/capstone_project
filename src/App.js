import React from 'react';
import GlobalStyles from './GlobalStyles'
import styled from 'styled-components'
import Home from './Home'
import Header from './Header'


export function App() {
  return (
<BodyStyled>
<GlobalStyles/>
<Header/>
<Home/>
</BodyStyled>
  );
}

export default App;


const BodyStyled = styled.div`
  display: grid;
  grid-template-rows: 48px auto 48px;
  height: 100vh;
`