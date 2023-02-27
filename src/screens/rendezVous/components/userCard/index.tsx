import { Card, Toggle, Layout, Select, InputText } from "../../../../components"
import { ReactComponent as UserIcon } from "../../../../assets/user.svg"
import { CardContainer, InputContainer } from "./styled-components"

const UseCard = () => {
  return (
    <Card>
      <CardContainer>
        <UserIcon />
        <InputContainer>
          <InputText
            label="Choisir un client"
            name="userName"
            onChange={() => null}
          />
          <InputText label="phone" name="phone" onChange={() => onchange} />
          <InputText label="email" name="email" onChange={() => onchange} />
        </InputContainer>
      </CardContainer>
    </Card>
  )
}

export default UseCard
