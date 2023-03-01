import { InputContainer, StyledInput } from "./styled-components"

const InputTime = ({ onChange, minutes, hours }: InputTimeProps) => {
  return (
    <InputContainer>
      <StyledInput
        name={"hours"}
        id={"hours"}
        type="number"
        min="0"
        max="23"
        value={hours}
        onChange={(event) => onChange(event?.target.value)}
      />
      <StyledInput
        name={"minutes"}
        id={"minutes"}
        type="number"
        min="0"
        max="59"
        value={minutes}
        onChange={(event) => onChange(event?.target.value)}
      />
    </InputContainer>
  )
}

export default InputTime
