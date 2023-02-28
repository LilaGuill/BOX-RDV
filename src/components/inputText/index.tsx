import React from "react"
import { useFormContext } from "react-hook-form"
import { InputContainer, StyledInput } from "./styled-components"

const InputText = ({ name, label, id, isDisabled }: InputTextProps) => {
  const { register, watch } = useFormContext()

  return (
    <InputContainer isFilled={!!watch(name)}>
      <StyledInput
        id={id}
        isFilled={!!watch(name)}
        {...register(name)}
        disabled={isDisabled}
      />
      <label htmlFor={name}>{label}</label>
    </InputContainer>
  )
}

export default InputText
