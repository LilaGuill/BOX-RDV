import React from "react"
import { StyledCard } from "./styled-components"

const Card = ({ children }: CardProps) => {
  return <StyledCard>{children}</StyledCard>
}

export default Card
