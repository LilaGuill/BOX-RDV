import "styled-components"

type Colors = {
  background: string
  blue: string
  blueLight: string
  green: string
  grey000: string
  grey100: string
  grey200: string
  grey800: string
  grey900: string
  red: string
  white: string
}

type Typography = {
  fontFamilies: {
    openSans: string
  }
}

type Theme = {
  name: string
  colors: Colors
  typography: Typography
}
