import styled, { css } from "styled-components"

export const InputContainer = styled.div<{ isFilled: boolean }>`
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.grey200};

  :focus-within label {
    transform: translate(0, 6px) scale(0.95);
  }

  label {
    color: ${({ theme }) => theme.colors.grey700};
    font-size: 13px;
    font-weight: 400;
    left: 12px;
    pointer-events: none;
    position: absolute;
    transform-origin: top left;
    transform: translate(0, 17px) scale(1);
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

    ${({ isFilled }) =>
      isFilled &&
      `transform: translate(0, 6px) scale(0.95);
    `}
  }
`

export const StyledInput = styled.input<{
  isFilled: boolean
  isDisabled?: boolean
}>`
  background: ${({ disabled, theme }) => disabled && theme.colors.grey200};
  border-radius: 6px;
  border: none;
  box-shadow: none;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.grey900};
  font-family: Open Sans;
  font-size: 13px;
  font-weight: 400;
  height: 48px;
  outline: none;
  padding-left: 12px;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  ${({ isFilled }) =>
    isFilled &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.green};
      padding-top: 20px;
    `}

  :focus {
    border: 1px solid ${({ theme }) => theme.colors.green};
    padding-top: 20px;
  }
`
