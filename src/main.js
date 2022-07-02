



import foto14 from "./Source/wave2.png"

import Navbar from "./Components/nav-bar"
import Banner from "./Components/banner"
import Products from "./Components/products"
import Service from "./Components/service"
import About from "./Components/about"
import Social from "./Components/social"

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
        </div>
    )
}