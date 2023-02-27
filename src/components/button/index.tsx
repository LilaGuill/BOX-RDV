import React from "react"
import { StyledButton } from "./styled-components"

const Button = ({ children, size, buttonType, color }: ButtonProps) => {
  return (
    <StyledButton size={size} buttonType={buttonType} color={color}>
      {children}
    </StyledButton>
  )
}

export default Button
