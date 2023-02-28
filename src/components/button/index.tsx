import React from "react"
import { StyledButton } from "./styled-components"

const Button = ({
  children,
  size,
  buttonType,
  color,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      size={size}
      buttonType={buttonType}
      color={color}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}

export default Button
