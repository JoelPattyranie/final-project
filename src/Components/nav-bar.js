import Home from "./Home"
import Product from "./product"
export default function Navbar ()
{
 return(
    <section id="nav-bar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#banner">LuxAd.id</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <Home/>
                <Product/>
                <li className="nav-item">
                    <a className="nav-link" href="#services">Service</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about-us">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#footer">Contacts</a>
                </li>
                </ul>
            </div>
            </nav>
        </section>
 )
}
