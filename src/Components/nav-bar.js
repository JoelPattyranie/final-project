import Home from "./nav-bar component/Home"
import Product from "./nav-bar component/product"
import Servicenb from "./nav-bar component/servicenb"
import Aboutus from "./nav-bar component/Aboutus"
import Contact from "./nav-bar component/contact"
import LAbutton from "./nav-bar component/luxadbutton"
import BrandLogo from "./nav-bar component/brandlogo"
export default function Navbar ()
{
 return(
    <section id="nav-bar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <BrandLogo/>
            <LAbutton/>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <Home/>
                <Product/>
                <Servicenb/>
                <Aboutus/> 
                <Contact/>
                </ul>
            </div>
            </nav>
        </section>
 )
}
