import styled from "styled-components"

export const ButtonContainer = styled.div<{
  background?: string
  gap?: string
  padding?: string
  selected?: boolean
}>`
  align-items: center;
  background: ${({ background, theme }) =>
    background && theme.colors[background]};
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  gap: ${({ gap }) => gap || "6px"};
  padding: ${({ padding }) => padding || 0};
`
