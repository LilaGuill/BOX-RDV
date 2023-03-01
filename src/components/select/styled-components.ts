import styled from "styled-components"
import Select from "react-select"

export const SelectContainer = styled.div<{
  isFilled: boolean
  color: string
}>`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  display: flex;
  flex-direction: column;
  height: 48px;
  position: relative;
  border-left: ${({ theme, isFilled, color }) =>
    isFilled
      ? `4px solid ${theme.colors[color]}`
      : `1px solid ${theme.colors.grey200}`};

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
    z-index: 5;

    ${({ isFilled }) =>
      isFilled &&
      `transform: translate(0, 6px) scale(0.95);
    `};
  }
`

export const StyledValueContainer = styled.div<{ hasValue?: boolean }>`
  align-items: center;
  border-radius: 6px 0 0 6px;
  box-sizing: border-box;
  display: flex;
  padding-left: 9px;
  margin-top: 8px;
  height: 34px;
  line-height: 20px;
  float: left;
`

export const SelectComponent = styled(Select).attrs({
  classNamePrefix: "react-select",
})`
  color: ${({ theme }) => theme.colors.grey900};
  text-align: start;
  width: auto;

  .react-select__control {
    border-radius: 6px;
    border: none;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.grey900};
    cursor: pointer;
    height: 48px;
    justify-content: flex-start;
    position: relative;
    transition: all 0.3s ease;
    s &:hover,
    &--is-focused {
      box-shadow: none;

      &::before {
      }
    }
    .react-select__input-container {
      height: 46px;
      margin: 0;
      padding: 0;
    }
    .react-select__value-container {
      padding: 0;
    }

    .react-select__single-value {
      color: ${({ theme }) => theme.colors.grey900};
      font-weight: 400;
    }
    .react-select__indicators {
      border: none;
    }

    .react-select__indicator-separator {
      display: none;
    }
  }
  .react-select__menu {
    z-index: 10;

    .react-select__menu-list {
      background: white;
      .react-select__option {
        padding: 12px 8px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.grey200};
        cursor: pointer;

        &--is-focused {
          background-color: ${({ theme }) => theme.colors.grey200};
        }

        &--is-selected {
          background-color: ${({ theme }) => theme.colors.grey000};
          color: ${({ theme }) => theme.colors.grey900};
        }
      }
    }
  }
`

export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  height: 40px;
`

export const StyledIcon = styled.div`
  margin-bottom: 8px;
`
