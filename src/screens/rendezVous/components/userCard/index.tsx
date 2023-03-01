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
  InfoThirdRow,
  InfoSecondRow,
  InfoContainer,
  IconContainer,
  InfoTextContainer,
  InputContainer,
  InfoFirstRow,
  Name,
  Phone,
  Email,
} from "./styled-components"
import { ReactComponent as BinIcon } from "../../../../assets/bin.svg"

const UseCard = () => {
  const [canCreateUser, setCanCreateUser] = useState(false)
  const [isInfoVisible, setIsInfoVisible] = useState(false)

  const { resetField, control } = useFormContext()

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
        <InputContainer>
          <UserIcon />
          <Name>
            <InputText
              label="Choisir un client"
              id="username"
              name="user.username"
              onClick={() => setCanCreateUser(true)}
            />
          </Name>
          <Phone>
            {/*<InputText
              name="user.phone"
              id="phone"
              label="Téléphone"
              isDisabled={!canCreateUser}
  />*/}
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
                />
              )}
            />
          </Phone>
          <Email>
            <InputText
              name="user.email"
              id="email"
              label="email"
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
          <div style={{ width: "100%" }}>
            <InfoFirstRow>
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
          </div>
        )}
      </CardContainer>
    </Card>
  )
}

export default UseCard
