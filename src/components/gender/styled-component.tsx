import styled from "styled-components"

export const Container = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  align-items: center;
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.white : theme.colors.grey100};
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  display: flex;
  height: 48px;
  justify-content: center;
  width: 100px;
`
