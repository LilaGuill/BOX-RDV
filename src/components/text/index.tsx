import React from "react"
import { StyledText } from "./styled-components"

export default function Text({
  align,
  bold,
  children,
  color,
  lineHeight,
  size,
  underline,
  weight,
}: TextProps) {
  return (
    <StyledText
      align={align}
      bold={bold}
      color={color}
      lineHeight={lineHeight}
      size={size}
      underline={underline}
      weight={weight}
    >
      {children}
    </StyledText>
  )
}
