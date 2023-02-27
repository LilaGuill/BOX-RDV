import styled from "styled-components"

export const StyledCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  border: ${({ theme }) => `1px solid ${theme.colors.grey200}`};
  box-sizing: border-box;
  padding: 20px 20px 20px 10px;
  width: 100%;
`
