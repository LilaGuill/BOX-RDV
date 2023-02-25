import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./theme/styled-components"
import { RendezVous } from "./screens"
import theme from "./theme/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<RendezVous />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
