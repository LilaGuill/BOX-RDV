import DatePicker, { registerLocale } from "react-datepicker"
import { InputDate } from "./styled-components"
import "react-datepicker/dist/react-datepicker.css"
import fr from "date-fns/locale/fr"
registerLocale("fr", fr)

const DatePickerComponent = ({ onChange, value }: any) => {
  return (
    <DatePicker
      selected={value}
      onChange={onChange}
      locale="fr"
      dateFormat={["EEEE dd LLL"]}
      customInput={<InputDate />}
    />
  )
}

export default DatePickerComponent
