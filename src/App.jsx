import Aboutus from "./components/Aboutus"
import Footer from "./components/footer"
import { HeroSection } from "./components/HeroSection"
import { Navbar } from "./components/Navbar"
import Products from "./components/products"

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Products/>
      <Aboutus/>
      <Footer/>
    </>
  )
}

export default App