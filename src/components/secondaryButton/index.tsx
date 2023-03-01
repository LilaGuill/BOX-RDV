import Text from "../text"
import { ButtonContainer } from "./styled-components"

const SecondaryButton = ({
  background,
  color,
  gap,
  icon,
  onClick,
  optionalText,
  padding,
  value,
}: SecondaryButtonProps) => {
  return (
    <ButtonContainer
      gap={gap}
      onClick={onClick}
      background={background}
      padding={padding}
    >
      {icon}
      <Text
        underline={!background && true}
        color={color ? color : background ? "white" : "grey900"}
      >
        {value}
      </Text>
      <Text weight={400} color="grey800">
        {optionalText}
      </Text>
    </ButtonContainer>
  )
}

export default SecondaryButton
