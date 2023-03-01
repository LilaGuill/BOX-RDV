import Button from "../button"
import Text from "../text"
import {
  Buttons,
  FooterContainer,
  LeftButtons,
  Links,
  RightButtons,
  Separator,
} from "./styled-components"
import { ReactComponent as CopyIcon } from "../../assets/copy.svg"
import { ReactComponent as CutIcon } from "../../assets/cut.svg"
import { ReactComponent as FillBinIcon } from "../../assets/fill-bin.svg"
import SecondaryButton from "../secondaryButton"

const Footer = ({ price }: FooterProps) => {
  return (
    <FooterContainer>
      <LeftButtons>
        <Buttons>
          <SecondaryButton
            value="Choisi(e)"
            background="green"
            padding="10px"
          />
          <SecondaryButton value="Venu" background="blue" padding="10px" />
          <SecondaryButton value="Pas venu" background="red" padding="10px" />
        </Buttons>
        <Separator />
        <Links>
          <SecondaryButton value="Copier" icon={<CopyIcon />} />
          <SecondaryButton value="Couper" icon={<CutIcon />} />
          <SecondaryButton value="Supprimer" icon={<FillBinIcon />} />
        </Links>
      </LeftButtons>
      <RightButtons>
        <Button size="large" buttonType="secondary">
          <Text>Plus d’options (produits, remises, ...)</Text>
        </Button>
        <Button size="large" color="green" type="submit">
          <Text color="white">{`Encaisser ${price
            .toFixed(2)
            .replace(".", ",")} €`}</Text>
        </Button>
      </RightButtons>
    </FooterContainer>
  )
}

export default Footer
