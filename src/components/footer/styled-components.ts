import styled from "styled-components"

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 28px;
`

export const RightButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const LeftButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`

export const Separator = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  width: 1px;
  background: ${({ theme }) => theme.colors.grey200};
`
