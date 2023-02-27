import { Container } from "./styled-components"
import { Text } from "../../../../components"
import { ReactComponent as AddIcon } from "../../../../assets/add.svg"

const AddPrestation = () => {
  return (
    <Container>
      <AddIcon />
      <Text color="grey800">Ajouter une prestation à la suite</Text>
    </Container>
  )
}

export default AddPrestation
