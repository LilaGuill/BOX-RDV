import styled, { css } from "styled-components"

export const Container = styled.div<{ isFilled?: boolean }>`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  border-radius: 6px;

  ${({ isFilled }) =>
    isFilled &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.green};
      box-shadow: 0 0 5px 0 rgba(72, 187, 120, 0.3);
    `}

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.green};
    box-shadow: 0 0 5px 0 rgba(72, 187, 120, 0.3);
  }
`

export const InputContainer = styled.div<{ isFilled: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

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
      padding-top: 20px;
    `}

  :focus {
    padding-top: 20px;
  }
`

export const ButtonContainer = styled.div<{ isVisible?: boolean }>`
  height: 20px;
  background: ${({ theme }) => theme.colors.green};
  margin: 8px 8px 8px 0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 51px;
  padding: 8px;
  box-sizing: border-box;
  cursor: pointer;

  ${({ isVisible }) =>
    !isVisible &&
    css`
      display: none;
    `}
`
