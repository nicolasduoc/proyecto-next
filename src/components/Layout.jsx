import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children, pagina}) => {
  return (
    <div>
      <Head>
        <title>Proyecto - {pagina} </title>
      </Head>
      <Header />

      {children}

      <Footer>
        
      </Footer>
    </div>
  )
}

export default Layout;