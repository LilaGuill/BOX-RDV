import styled from "styled-components"

export const ButtonContainer = styled.div<{
  selected?: boolean
  background?: string
  padding?: string
}>`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  background: ${({ background, theme }) =>
    background && theme.colors[background]};
  border-radius: 6px;
  padding: ${({ padding }) => padding || 0};
`
