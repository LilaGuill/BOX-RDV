import Text from "../text"
import { ButtonContainer } from "./styled-components"

const SecondaryButton = ({
  onClick,
  value,
  color,
  background,
  icon,
}: SecondaryButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} background={background}>
      {icon}
      <Text
        underline={!background && true}
        color={color ? color : background ? "white" : "grey900"}
      >
        {value}
      </Text>
    </ButtonContainer>
  )
}

export default SecondaryButton
