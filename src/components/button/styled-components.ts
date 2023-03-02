import styled from "styled-components"
import { Colors } from "../../theme/type"

export const StyledButton = styled.button<{
  color?: string
  size?: "large" | "medium" | "small"
  buttonType?: "secondary" | "primary"
}>`
  align-items: center;
  background: ${({ theme, color }) =>
    color ? theme.colors[color as keyof Colors] : theme.colors.background};
  border-radius: 6px;
  border: ${({ buttonType, theme }) =>
    buttonType === "secondary" && `1px solid ${theme.colors.grey800}`};
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: flex;
  height: ${({ size }) =>
    size === "small" ? "40px" : size === "medium" ? "48px" : "auto"};
  justify-content: center;
  padding: ${({ size }) =>
    size === "small" || size === "medium" ? "10px 10px" : "18px 16px"};
  transition: all 0.3s ease;
  width: ${({ size }) =>
    size === "small" ? "40px" : size === "medium" ? "48px" : "auto"};

  &:hover {
    box-shadow: 0 0 5px rgba(33, 33, 33, 0.3);
  }
`
