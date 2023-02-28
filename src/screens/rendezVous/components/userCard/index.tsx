import { useState } from "react"
import { useFormContext } from "react-hook-form"
import {
  Button,
  Card,
  Gender,
  InputText,
  Text,
  Birthday,
  Toggle,
  SecondaryButton,
} from "../../../../components"
import { ReactComponent as BirthdayIcon } from "../../../../assets/birthday.svg"
import { ReactComponent as UserIcon } from "../../../../assets/user.svg"
import { ReactComponent as GenderIcon } from "../../../../assets/gender.svg"
import { ReactComponent as InfoIcon } from "../../../../assets/info.svg"
import { ReactComponent as CopyIcon } from "../../../../assets/copy.svg"
import { ReactComponent as FidelityIcon } from "../../../../assets/fidelity.svg"
import {
  CardContainer,
  Container,
  FidelityContainer,
  InfoClient,
  InfoContainer,
  InfoTextContainer,
  InputContainer,
  UserContainer,
  UserInfoContainer,
} from "./styled-components"
import { ReactComponent as BinIcon } from "../../../../assets/bin.svg"

const UseCard = () => {
  const [canCreateUser, setCanCreateUser] = useState(false)
  const [isInfoVisible, setIsInfoVisible] = useState(false)

  const { resetField } = useFormContext()

  const onRemove = () => {
    resetField("user.username")
    resetField("user.phone")
    resetField("user.email")
    setCanCreateUser(false)
    setIsInfoVisible(false)
  }

  return (
    <Card>
      <CardContainer>
        <UserIcon />
        <Container>
          <InputContainer>
            <InputText
              label="Choisir un client"
              id="username"
              name="user.username"
            />
            <Button color="green" onClick={() => setCanCreateUser(true)}>
              Créer
            </Button>
            <InputText
              name="user.phone"
              id="phone"
              label="phone"
              isDisabled={!canCreateUser}
            />
            <InputText
              name="user.email"
              id="email"
              label="email"
              isDisabled={!canCreateUser}
            />

            {canCreateUser && (
              <Button
                buttonType="secondary"
                color="white"
                size="small"
                onClick={onRemove}
              >
                <BinIcon />
              </Button>
            )}
          </InputContainer>
          {canCreateUser && (
            <UserContainer>
              <UserInfoContainer>
                <InfoContainer>
                  <GenderIcon />
                  <Gender />
                </InfoContainer>
                <InfoContainer>
                  <BirthdayIcon />
                  <Birthday />
                </InfoContainer>
                <InfoContainer>
                  <Toggle
                    label="SMS de rappel"
                    isToggled={true}
                    onClick={() => null}
                  />
                  <Toggle
                    label="SMS marketing"
                    isToggled={false}
                    onClick={() => null}
                  />
                </InfoContainer>
              </UserInfoContainer>
              <InfoClient>
                <div onClick={() => setIsInfoVisible(!isInfoVisible)}>
                  <InfoIcon />
                </div>
                <InfoTextContainer isInfoVisible={isInfoVisible}>
                  <Text
                    size={isInfoVisible ? "12px" : "13px"}
                    color={isInfoVisible ? "grey700" : "grey900"}
                    weight={isInfoVisible ? 400 : 600}
                    underline={isInfoVisible ? false : true}
                  >
                    Info client
                  </Text>
                  {isInfoVisible && (
                    <Text weight={400}>
                      Quam inposita tranquillis pleraeque sunt primigenia eis
                      quae institutores ad.
                    </Text>
                  )}
                </InfoTextContainer>
              </InfoClient>
              <FidelityContainer>
                <SecondaryButton
                  value="Carte de fidélité"
                  optionalText=": Points : 42 - Gains : 10,00€ (+)"
                  icon={<FidelityIcon />}
                />
                <SecondaryButton
                  value="Forfait brushing par 5 - cheveux courts"
                  optionalText="(4)"
                  icon={<CopyIcon width={14} height={14} />}
                />
              </FidelityContainer>
            </UserContainer>
          )}
        </Container>
      </CardContainer>
    </Card>
  )
}

export default UseCard
