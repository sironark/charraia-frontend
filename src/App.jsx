import styled from "styled-components"
import backgroundImage from './assets/backgroundimage.png'
import { Route, Routes } from "react-router-dom"
import Timeline from "./pages/TimelinePage"

function App() {

  return (
    <AppContainer>
      <Routes>
            <Route path="/" element={<Timeline/>} />
          </Routes>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 680px) {
    background-repeat: repeat;
    background-size: 680px;
  }


`
