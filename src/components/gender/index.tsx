import { useState } from "react"
import { useFormContext } from "react-hook-form"
import Text from "../text"
import { Container, GenderButton } from "./styled-component"

const Gender = ({ onChange, value }: GenderProps) => {
  const options = [
    { value: "man", label: "Homme" },
    { value: "wooman", label: "Femme" },
    { value: "child", label: "Enfant" },
  ]

  console.log("value", value)

  return (
    <Container>
      {options.map((option, index) => (
        <GenderButton
          key={index}
          isSelected={value === option.value}
          onClick={() => {
            console.log("value", option.value)
            onChange(option.value)
          }}
        >
          <Text
            weight={400}
            color={value === option.value ? "grey900" : "grey700"}
          >
            {option.label}
          </Text>
        </GenderButton>
      ))}
    </Container>
  )
}

export default Gender
