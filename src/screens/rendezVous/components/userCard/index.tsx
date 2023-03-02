import { useState } from "react"
import { useFormContext, Controller } from "react-hook-form"
import {
  Button,
  Card,
  Gender,
  InputText,
  InputPhone,
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
  Email,
  IconContainer,
  InfoContainer,
  InfoFirstRow,
  InfoSecondRow,
  InfoTextContainer,
  InfoThirdRow,
  InputContainer,
  Name,
  Phone,
} from "./styled-components"
import { ReactComponent as BinIcon } from "../../../../assets/bin.svg"

const UseCard = ({
  onCreateUser,
  canCreateUser,
}: {
  canCreateUser: boolean
  onCreateUser: (value: boolean) => void
}) => {
  const [isInfoVisible, setIsInfoVisible] = useState(false)

  const { resetField, control } = useFormContext()

  const onRemove = () => {
    resetField("user")
    onCreateUser(false)
    setIsInfoVisible(false)
  }

  return (
    <Card>
      <CardContainer>
        <InputContainer>
          <UserIcon />
          <Name>
            <InputText
              label="Choisir un client"
              id="username"
              name="user.username"
              onClick={() => onCreateUser(true)}
            />
          </Name>
          <Phone>
            <Controller
              name="user.phone"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputPhone
                  name="user.phone"
                  label="Téléphone"
                  id="phone"
                  value={value}
                  onChange={onChange}
                  isDisabled={!canCreateUser}
                />
              )}
            />
          </Phone>
          <Email>
            <InputText
              name="user.email"
              id="email"
              label="Email"
              isDisabled={!canCreateUser}
            />
          </Email>
          {canCreateUser && (
            <Button
              buttonType="secondary"
              color="white"
              size="medium"
              onClick={onRemove}
            >
              <BinIcon />
            </Button>
          )}
        </InputContainer>
        {canCreateUser && (
          <Container>
            <InfoFirstRow>
              <InfoContainer>
                <GenderIcon />
                <Controller
                  name="user.gender"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Gender onChange={onChange} value={value} />
                  )}
                />
              </InfoContainer>
              <InfoContainer>
                <BirthdayIcon />
                <Birthday />
              </InfoContainer>
              <InfoContainer>
                <Controller
                  name="user.sms.reminder"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Toggle
                      label="SMS de rappel"
                      isToggled={value}
                      onClick={onChange}
                    />
                  )}
                />
                <Controller
                  name="user.sms.marketing"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Toggle
                      label="SMS marketing"
                      isToggled={value}
                      onClick={onChange}
                    />
                  )}
                />
              </InfoContainer>
            </InfoFirstRow>
            <InfoSecondRow
              isInfoVisible={isInfoVisible}
              onClick={() => setIsInfoVisible(!isInfoVisible)}
            >
              <IconContainer>
                <InfoIcon />
              </IconContainer>
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
                    Quam inposita tranquillis pleraeque sunt primigenia eis quae
                    institutores ad.
                  </Text>
                )}
              </InfoTextContainer>
            </InfoSecondRow>
            <InfoThirdRow>
              <SecondaryButton
                gap="9px"
                value="Carte de fidélité"
                optionalText=": Points : 42 - Gains : 10,00€ (+)"
                icon={<FidelityIcon />}
              />
              <SecondaryButton
                gap="9px"
                value="Forfait brushing par 5 - cheveux courts"
                optionalText="(4)"
                icon={<CopyIcon width={14} height={14} />}
              />
            </InfoThirdRow>
          </Container>
        )}
      </CardContainer>
    </Card>
  )
}

export default UseCard
