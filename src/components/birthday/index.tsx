import { Container, StyledInput } from "./styled-components"

const Birthday = () => {
  return (
    <Container>
      <StyledInput defaultValue={21} />
      <StyledInput defaultValue={"Sept"} />
    </Container>
  )
}

export default Birthday
