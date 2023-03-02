import styled from "styled-components"

export const Buttons = styled.div`
  display: flex;
  gap: 8px;
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 28px;
`

export const LeftButtons = styled.div`
  display: flex;
  align-items: center;
`

export const Links = styled.div`
  display: flex;
  gap: 20px;
`

export const RightButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const Separator = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  width: 1px;
  background: ${({ theme }) => theme.colors.grey200};
  margin: 0 28px;
`
