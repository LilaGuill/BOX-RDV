import styled, { css } from "styled-components"
import PhoneInput from "react-phone-number-input"

export const Container = styled.div`
  display: flex;
`

export const InputContainer = styled.div<{ $isFilled: boolean }>`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.green};
    box-shadow: 0 0 5px 0 rgba(72, 187, 120, 0.3);
  }

  :focus-within label {
    transform: translate(0, 6px) scale(0.95);
  }

  label {
    color: ${({ theme }) => theme.colors.grey700};
    font-size: 13px;
    font-weight: 400;
    left: 12px;
    margin-left: 52px;
    pointer-events: none;
    position: absolute;
    transform-origin: top left;
    transform: translate(0, 17px) scale(1);
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

    ${({ $isFilled }) =>
      $isFilled &&
      css`
        transform: translate(0, 6px) scale(0.95);
      `}
  }
`

export const StyledPhoneInput = styled(PhoneInput)<{
  $isFilled: boolean
}>`
  border-radius: 6px;
  width: 100%;

  input {
    background: ${({ disabled, theme }) => disabled && theme.colors.grey200};
    border-radius: 0 6px 6px 0;
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

    ${({ $isFilled }) =>
      $isFilled &&
      css`
        padding-top: 20px;
      `}

    :focus {
      padding-top: 20px;
    }
  }

  .PhoneInputCountry {
    border-radius: 6px 0 0 6px;
    margin: 0;
    width: 52px;

    ${({ disabled }) =>
      disabled &&
      css`
        background: ${({ theme }) => theme.colors.grey200};
      `}
  }

  .PhoneInputCountryIcon {
    box-shadow: none;
    margin: 0 8px 0 12px;
  }
`
