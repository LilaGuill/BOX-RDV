import Button from "../button"
import Text from "../text"
import {
  FooterContainer,
  RightButtons,
  LeftButtons,
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
        <SecondaryButton value="Choisi(e)" background="green" padding="10px" />
        <SecondaryButton value="Venu(e)" background="blue" padding="10px" />
        <SecondaryButton value="Pas venu(e)" background="red" padding="10px" />
        <Separator />
        <SecondaryButton value="Copier" icon={<CopyIcon />} padding="10px" />
        <SecondaryButton value="Couper" icon={<CutIcon />} padding="10px" />
        <SecondaryButton
          value="Supprimer"
          icon={<FillBinIcon />}
          padding="10px"
        />
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
