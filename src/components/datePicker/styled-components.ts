import styled from "styled-components"

export const InputDate = styled.input`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  box-shadow: none;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.grey900};
  font-family: Open Sans;
  font-size: 13px;
  font-weight: 400;
  height: 48px;
  outline: none;
  padding-left: 12px;
  text-transform: capitalize;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  width: 100%;
`
