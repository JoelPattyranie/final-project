





import Navbar from "./Components/nav-bar"
import Banner from "./Components/banner"
import Products from "./Components/products"
import Service from "./Components/service"
import About from "./Components/about"
import Social from "./Components/social"
import Footer from "./Components/footer"

export default function Main () {

    return(
        <div>
        {/* Navbar */}
        <Navbar/>
        {/*banner section*/}
        <Banner/>
        {/*Products*/}
        <Products/>
        {/*Service Section*/}
        <Service/>
        {/*About Us*/}
        <About/>
        {/*Social Media*/}
        <Social/>
        {/*footer*/}
        <Footer/>
        </div>
    )
}