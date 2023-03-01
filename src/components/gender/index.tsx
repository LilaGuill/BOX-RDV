import { useState } from "react"
import Text from "../text"
import { Container, GenderButton } from "./styled-component"

const Gender = () => {
  const [selectedValue, setSelectedValue] = useState("man")

  const options = [
    { value: "man", label: "Homme" },
    { value: "wooman", label: "Femme" },
    { value: "child", label: "Enfant" },
  ]

  return (
    <Container>
      {options.map(({ value, label }, index) => (
        <GenderButton
          key={index}
          isSelected={selectedValue === value}
          onClick={() => setSelectedValue(value)}
        >
          <Text
            weight={400}
            color={selectedValue === value ? "grey900" : "grey700"}
          >
            {label}
          </Text>
        </GenderButton>
      ))}
    </Container>
  )
}

export default Gender
