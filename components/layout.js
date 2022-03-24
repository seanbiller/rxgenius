import Header from './header'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div className="container mx-auto ">
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
