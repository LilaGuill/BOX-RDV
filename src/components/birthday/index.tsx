import { useFormContext } from "react-hook-form"
import { Container, StyledInput } from "./styled-components"

const Birthday = ({ onChange, value }: any) => {
  const { register } = useFormContext()

  return (
    <Container>
      <StyledInput
        {...register("user.birthay.day")}
        defaultValue={21}
        onChange={onChange}
        id="user.birthay.month"
        value={value}
      />
      <StyledInput
        {...register("user.birthay.month")}
        defaultValue={"Sept"}
        onChange={onChange}
        id="user.birthay.month"
        value={value}
      />
    </Container>
  )
}

export default Birthday
