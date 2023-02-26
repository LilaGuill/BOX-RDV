import { components, DropdownIndicatorProps, GroupBase } from "react-select"
import {
  IconContainer,
  SelectComponent,
  StyledValueContainer,
  StyledIcon,
  SelectContainer,
} from "./styled-components"
import { ReactComponent as CaretDownIcon } from "../../assets/caret-down.svg"
import { useState } from "react"

const Select = () => {
  const [value, setValue] = useState<any>("")

  const options = [
    { value: "manShort", label: "Coupe homme (cheveux courts)" },
    { value: "womanShort", label: "Coupe femme (cheveux courts)" },
  ]

  const DropdownIndicator = (
    props: JSX.IntrinsicAttributes &
      DropdownIndicatorProps<unknown, boolean, GroupBase<unknown>>
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        <IconContainer>
          <StyledIcon>
            <CaretDownIcon />
          </StyledIcon>
        </IconContainer>
      </components.DropdownIndicator>
    )
  }

  const ValueContainer = ({ children, ...props }: any) => {
    return (
      components.ValueContainer && (
        <components.ValueContainer {...props}>
          <StyledValueContainer hasValue={props.hasValue}>
            {children}
          </StyledValueContainer>
        </components.ValueContainer>
      )
    )
  }

  return (
    <SelectContainer isFilled={!!value}>
      <label>Choisir une prestation</label>
      <SelectComponent
        components={{ DropdownIndicator, ValueContainer }}
        options={options}
        placeholder=""
        value={value}
        onChange={(value) => setValue(value)}
      />
    </SelectContainer>
  )
}

export default Select
