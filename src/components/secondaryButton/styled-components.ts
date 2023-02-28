import styled from "styled-components"

export const ButtonContainer = styled.div<{
  selected?: boolean
  background?: string
}>`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  background: ${({ background, theme }) =>
    background && theme.colors[background]};
  padding: 10px;
  border-radius: 6px;
`
