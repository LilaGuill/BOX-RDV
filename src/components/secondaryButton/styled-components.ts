import styled from "styled-components"

export const ButtonContainer = styled.div<{
  background?: string
  gap?: string
  padding?: string
  selected?: boolean
}>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap || "6px"};
  cursor: pointer;
  background: ${({ background, theme }) =>
    background && theme.colors[background]};
  border-radius: 6px;
  padding: ${({ padding }) => padding || 0};
`
