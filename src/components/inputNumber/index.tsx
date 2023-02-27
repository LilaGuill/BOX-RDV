import { InputContainer, StyledInput, StyledUnit } from "./styled-components"
import Text from "../text"

const InputNumber = ({ unit, value }: InputNumberProps) => {
  return (
    <InputContainer>
      <StyledInput id="number" value={value} />
      <StyledUnit>
        <Text weight={400}>{unit}</Text>
      </StyledUnit>
    </InputContainer>
  )
}

export default InputNumber
