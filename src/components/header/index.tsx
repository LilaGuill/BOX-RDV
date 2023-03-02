import Button from "../button"
import Text from "../text"
import { ButtonContainer, HeaderContainer } from "./styled-components"
import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg"
import { ReactComponent as CheckIcon } from "../../assets/check.svg"

const Header = () => {
  return (
    <HeaderContainer>
      <Text size="15px">Rendez-vous</Text>
      <ButtonContainer>
        <Button size="small" color="white" buttonType="secondary">
          <ArrowIcon />
        </Button>
        <Button size="small" color="green">
          <CheckIcon />
        </Button>
      </ButtonContainer>
    </HeaderContainer>
  )
}

export default Header
