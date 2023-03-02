import { useFormContext } from "react-hook-form"
import { Container, StyledInput } from "./styled-components"

const Birthday = () => {
  const { register } = useFormContext()

  return (
    <Container>
      <StyledInput
        {...register("user.birthay.day")}
        id="user.birthay.month"
        type="number"
      />
      <StyledInput
        {...register("user.birthay.month")}
        id="user.birthay.month"
      />
    </Container>
  )
}

export default Birthday
