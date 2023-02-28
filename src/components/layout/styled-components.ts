import styled from "styled-components"
import media from "styled-media-query"

export const LayoutContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px 12px 0px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  margin: auto;
  width: 1100px;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px 12px 0px 0px;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  box-sizing: border-box;
  padding: 14px 28px;
  height: 52px;
  display: flex;
  align-items: center;
`

export const Main = styled.main`
  flex-grow: 1;
  padding: 20px 28px 28px 28px;
`

export const FooterContainer = styled.footer`
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  height: 80px;
  display: flex;
  align-items: center;
`
