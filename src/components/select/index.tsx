import { components, DropdownIndicatorProps, GroupBase } from "react-select"
import {
  IconContainer,
  SelectComponent,
  StyledValueContainer,
  StyledIcon,
  SelectContainer,
} from "./styled-components"
import { ReactComponent as CaretDownIcon } from "../../assets/caret-down.svg"
import { useMemo, useState } from "react"

const Select = ({ label, color, options, value, onChange }: SelectProps) => {
  const isFilled = useMemo(() => !!value.value, [value])

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
    <SelectContainer isFilled={isFilled} color={color}>
      <label>{label}</label>
      <SelectComponent
        components={{ DropdownIndicator, ValueContainer }}
        options={options}
        placeholder=""
        value={value}
        onChange={(value) => onChange(value)}
      />
    </SelectContainer>
  )
}

export default Select
