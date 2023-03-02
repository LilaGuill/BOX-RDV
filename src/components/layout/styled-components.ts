import styled from "styled-components"
import media from "styled-media-query"

export const LayoutContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px 12px 0px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: auto;
  min-height: 100%;
  width: 1100px;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`

export const HeaderContainer = styled.header`
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px 12px 0px 0px;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  box-sizing: border-box;
  display: flex;
  height: 52px;
  padding: 14px 28px;
`

export const Main = styled.main`
  flex-grow: 1;
  padding: 20px 28px 28px 28px;
`

export const FooterContainer = styled.footer`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  display: flex;
  height: 80px;
`
