import styled from "styled-components"
import { Colors } from "../../theme/type"

export const StyledText = styled.div<TextProps>`
  color: ${({ color, theme }) =>
    color ? theme.colors[color as keyof Colors] : theme.colors.grey900}};
  font-family: ${({ theme }) => theme.typography.fontFamilies.openSans};
  font-size:${({ size }) => (size ? size : "13px")};
  font-weight: ${({ weight }) => (weight ? weight : 600)};
  line-height: ${({ lineHeight }) => lineHeight || "13px"}
  text-align: ${({ align }) => align || "left"};
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
`
