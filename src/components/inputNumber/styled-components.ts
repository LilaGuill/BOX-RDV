import styled from "styled-components"
import { Colors } from "../../theme/type"

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledInput = styled.input`
  border-radius: 5px 0px 0px 5px;
  border: ${({ theme }) => `1px solid ${theme.colors.grey200}`};
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.grey900};
  cursor: pointer;
  display: flex;
  font-family: ${({ theme }) => theme.typography.fontFamilies.openSans};
  font-weight: 400;
  height: 48px;
  padding: 16px 8px;
  text-align: center;
  width: 71px;
`

export const StyledUnit = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.grey000};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.grey200}`};
  border-radius: 0px 5px 5px 0px;
  border-right: ${({ theme }) => `1px solid ${theme.colors.grey200}`};
  border-top: ${({ theme }) => `1px solid ${theme.colors.grey200}`};
  box-sizing: border-box;
  display: flex;
  height: 48px;
  justify-content: center;
  text-align: center;
  width: 48px;
`
