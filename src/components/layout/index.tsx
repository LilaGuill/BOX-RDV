import {
  HeaderContainer,
  FooterContainer,
  LayoutContainer,
  Main,
} from "./styled-components"
import Header from "../header"
import Footer from "../footer"

const Layout = ({ children, price, canCreateUser }: LayoutProps) => {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Main>{children}</Main>
      <FooterContainer>
        <Footer price={price} canCreateUser={canCreateUser} />
      </FooterContainer>
    </LayoutContainer>
  )
}
export default Layout
