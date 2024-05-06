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
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-position: center;
  background-attachment: fixed;

  @media (min-width: 680px) {
    background-repeat: repeat;
    background-size: 670px;
  }


`
