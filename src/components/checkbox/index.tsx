import { CheckboxContainer } from "./styled-component"
import { ReactComponent as CheckboxIcon } from "../../assets/checkbox.svg"
import { ReactComponent as UnCheckedIcon } from "../../assets/unchecked.svg"
import Text from "../text"

const Checkbox = ({ checked, label, onChange }: CheckboxProps) => {
  return (
    <CheckboxContainer onClick={onChange}>
      {checked ? <CheckboxIcon /> : <UnCheckedIcon />}
      <Text>{label}</Text>
    </CheckboxContainer>
  )
}

export default Checkbox
