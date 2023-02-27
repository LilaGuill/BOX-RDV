import {
  HeaderContainer,
  FooterContainer,
  LayoutContainer,
  Main,
} from "./styled-components"
import Header from "../header"

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Main>{children}</Main>
      <FooterContainer />
    </LayoutContainer>
  )
}
export default Layout
