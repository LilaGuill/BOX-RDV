import styled from "styled-components"

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & input:first-child {
    border-radius: 6px 0 0 6px;
  }

  & input:last-child {
    border-radius: 0 6px 6px 0;
    border-left: 0;
  }
`

export const StyledInput = styled.input`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  box-shadow: none;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.grey900};
  font-family: Open Sans;
  font-size: 13px;
  font-weight: 400;
  height: 48px;
  width: 48px;
  outline: none;
  padding-left: 12px;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`
