import React from "react"
import { StyledButton } from "./styled-components"

const Button = ({
  children,
  size,
  buttonType,
  color,
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <StyledButton
      size={size}
      buttonType={buttonType}
      color={color}
      onClick={onClick}
      type={type}
    >
      {children}
    </StyledButton>
  )
}

export default Button
