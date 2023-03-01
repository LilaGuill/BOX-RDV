import React from "react"
import { useFormContext } from "react-hook-form"
import "react-phone-number-input/style.css"
import { ReactComponent as CaretDownIcon } from "../../assets/caret-down.svg"
import {
  InputContainer,
  StyledPhoneInput,
  Container,
} from "./styled-components"

const InputText = ({
  name,
  label,
  id,
  onChange,
  value,
  isDisabled,
}: InputPhoneProps) => {
  const { register, watch } = useFormContext()

  return (
    <Container>
      <InputContainer $isFilled={!!watch(name)}>
        <StyledPhoneInput
          id={id}
          value={value}
          onChange={onChange}
          defaultCountry="FR"
          disabled={isDisabled}
          $isFilled={!!value}
          countryOptionsOrder={["FR", "BE", "DE", "GB", "|", "..."]}
          countrySelectProps={{ arrowComponent: () => <CaretDownIcon /> }}
        />
        <label htmlFor={name}>{label}</label>
      </InputContainer>
    </Container>
  )
}

export default InputText
