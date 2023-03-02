import { useFormContext } from "react-hook-form"
import Button from "../button"
import SecondaryButton from "../secondaryButton"
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

const Footer = ({ price, canCreateUser }: FooterProps) => {
  const { setValue, watch } = useFormContext()

  const chosen = watch("chosen")
  const came = watch("came")

  return (
    <FooterContainer>
      {canCreateUser ? (
        <>
          <LeftButtons>
            <Buttons>
              <SecondaryButton
                value="Choisi(e)"
                background={chosen && "green"}
                padding="10px"
                onClick={() => {
                  setValue("chosen", true)
                }}
              />
              <SecondaryButton
                value="Venu"
                background={came && "blue"}
                padding="10px"
                onClick={() => {
                  setValue("came", true)
                }}
              />
              <SecondaryButton
                value="Pas venu"
                background={!came ? "red" : ""}
                padding="10px"
                onClick={() => {
                  setValue("came", false)
                  setValue("chosen", false)
                }}
              />
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
        </>
      ) : (
        <SecondaryButton value="Choisi(e)" />
      )}
    </FooterContainer>
  )
}

export default Footer
