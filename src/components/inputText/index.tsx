import React, { useMemo } from "react"
import { useFormContext } from "react-hook-form"
import Text from "../text"
import {
  Container,
  ButtonContainer,
  InputContainer,
  StyledInput,
} from "./styled-components"

const InputText = ({
  name,
  label,
  id,
  isDisabled,
  onClick,
}: InputTextProps) => {
  const { watch, register } = useFormContext()

  const isButtonVisible = useMemo(() => watch(name)?.length > 1, [watch(name)])

  return (
    <Container isFilled={!!watch(name)}>
      <InputContainer isFilled={!!watch(name)}>
        <StyledInput
          {...register(name)}
          id={id}
          isFilled={!!watch(name)}
          disabled={isDisabled}
        />
        <label htmlFor={name}>{label}</label>
      </InputContainer>
      {onClick && (
        <ButtonContainer isVisible={isButtonVisible} onClick={onClick}>
          <Text color="white">Créer</Text>
        </ButtonContainer>
      )}
    </Container>
  )
}

export default InputText
