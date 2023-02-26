import { Theme } from "./type"

const colors = {
  background: "#F6F7F8",
  blue: "#2C5282",
  blueLight: "##63B3ED",
  green: "#48BB78",
  grey000: "#F9F9F9",
  grey100: "##F6F7F8",
  grey200: "#ECEEED",
  grey700: "#7F8C88",
  grey800: "#5F706A",
  grey900: "#34423E",
  red: "#F56565",
  white: "#FFFFFF",
}

const typography = {
  fontFamilies: {
    openSans: "Open Sans",
  },
}

const theme: Theme = {
  name: "Default theme",
  colors,
  typography,
}

export default theme
