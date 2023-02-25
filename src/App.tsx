import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./theme/styled-components"
import theme from "./theme/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      Hello Rendez-vous!
    </ThemeProvider>
  )
}

export default App
