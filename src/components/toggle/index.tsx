import { Label, Input, Span, ToggleContainer } from "./styled-components"
import Text from "../text"

const Toggle = ({ label, isToggled, onClick }: ToggleProps) => {
  return (
    <ToggleContainer>
      <Label>
        <Input type="checkbox" defaultChecked={isToggled} onClick={onClick} />
        <Span />
      </Label>
      <Text weight={400}>{label}</Text>
    </ToggleContainer>
  )
}

export default Toggle
