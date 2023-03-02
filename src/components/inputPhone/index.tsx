import { useFormContext } from "react-hook-form"
import "react-phone-number-input/style.css"
import {
  Container,
  InputContainer,
  StyledPhoneInput,
} from "./styled-components"
import { ReactComponent as CaretDownIcon } from "../../assets/caret-down.svg"

const InputText = ({
  name,
  label,
  id,
  onChange,
  value,
  isDisabled,
}: InputPhoneProps) => {
  const { watch } = useFormContext()

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
