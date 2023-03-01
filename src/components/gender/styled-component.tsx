import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  & div:first-child {
    border-radius: 6px 0 0 6px;
    border-right: none;
  }

  & div:nth-child(2) {
    border-right: none;
  }

  & div:last-child {
    border-radius: 0 6px 6px 0;
  }
`

export const GenderButton = styled.div<{ isSelected?: boolean }>`
  width: 100px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.white : theme.colors.grey100};
`
