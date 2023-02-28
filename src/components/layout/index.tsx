import {
  HeaderContainer,
  FooterContainer,
  LayoutContainer,
  Main,
} from "./styled-components"
import Header from "../header"
import Footer from "../footer"
import Text from "../text"

const Layout = ({ children, price }: LayoutProps) => {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Main>{children}</Main>
      <FooterContainer>
        <Footer price={price} />
      </FooterContainer>
    </LayoutContainer>
  )
}
export default Layout
