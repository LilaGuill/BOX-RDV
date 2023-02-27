import React from "react"
import { InputContainer, StyledInput } from "./styled-components"

const InputText = ({ value, onChange, name, label }: InputTextProps) => {
  return (
    <InputContainer isFilled={!!value}>
      <StyledInput
        name={name}
        value={value}
        isFilled={!!value}
        onChange={(event) => {
          event.preventDefault()
          onChange(event.target.value)
        }}
      />
      <label htmlFor={name}>{label}</label>
    </InputContainer>
  )
}

export default InputText
