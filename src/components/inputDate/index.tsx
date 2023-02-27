import { StyledInputDate } from "./styled-components"

const InputDate = () => {
  return (
    <StyledInputDate
      datetime-locatype="datetime-local"
      data-date-format="ddd mmmm yyy"
      value="Lundi 21 mars"
    />
  )
}

export default InputDate
