import { InputContainer, StyledInput, StyledUnit } from "./styled-components"
import Text from "../text"

const InputNumber = ({ unit, value, onChange }: InputNumberProps) => {
  return (
    <InputContainer>
      <StyledInput value={value} onChange={onChange} type="number" />
      <StyledUnit>
        <Text weight={400}>{unit}</Text>
      </StyledUnit>
    </InputContainer>
  )
}

export default InputNumber
