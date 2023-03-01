import React from "react"
import { useFormContext } from "react-hook-form"
import Button from "../button"
import { InputContainer, StyledInput } from "./styled-components"

const InputText = ({
  name,
  label,
  id,
  isDisabled,
  onClick,
}: InputTextProps) => {
  const { register, watch } = useFormContext()

  return (
    <div style={{ display: "flex" }}>
      <InputContainer isFilled={!!watch(name)}>
        <StyledInput
          id={id}
          isFilled={!!watch(name)}
          {...register(name)}
          disabled={isDisabled}
        />
        <label htmlFor={name}>{label}</label>
      </InputContainer>
      {onClick && (
        <Button color="green" onClick={onClick}>
          Créer
        </Button>
      )}
    </div>
  )
}

export default InputText
