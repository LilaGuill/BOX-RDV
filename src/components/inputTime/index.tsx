import { InputContainer, StyledInput } from "./styled-components"
import { useFormContext } from "react-hook-form"

const InputTime = ({ name, defaultValue }: InputTimeProps) => {
  const { register } = useFormContext()

  return (
    <InputContainer>
      <StyledInput
        {...register(`${name}.hours`)}
        type="number"
        defaultValue={defaultValue.hours}
      />
      <StyledInput
        {...register(`${name}.minutes`)}
        type="number"
        defaultValue={defaultValue.minutes}
      />
    </InputContainer>
  )
}

export default InputTime
