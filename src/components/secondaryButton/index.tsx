import Text from "../text"
import { ButtonContainer } from "./styled-components"

const SecondaryButton = ({
  onClick,
  value,
  color,
  icon,
}: SecondaryButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      {icon}
      <Text underline color={color ? color : "grey900"}>
        {value}
      </Text>
    </ButtonContainer>
  )
}

export default SecondaryButton
