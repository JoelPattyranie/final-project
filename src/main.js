


import foto9 from "./Source/facebook-icon.png"
import foto10 from "./Source/instagram-icon.png"
import foto11 from "./Source/linkedin-icon.png"
import foto12 from "./Source/whatsapp-icon.png"
import foto13 from "./Source/snapchat-icon.png"
import foto14 from "./Source/wave2.png"

import Navbar from "./Components/nav-bar"
import Banner from "./Components/banner"
import Products from "./Components/products"
import Service from "./Components/service"

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
        <section id="about-us">
            <div className="container">
            <h1 className="title text-center">Nama &amp; NIM</h1>
            <div className="row">
                <div className="col-md-6 about-us">
                <ul>
                    <li>Yeskris Dio Lahope. NIM 692021080</li>
                    <li>Danar Wicaksono. NIM 692021137</li>
                    <li>Diaz Wahyu Agung Pambudi. NIM 692021118</li>
                </ul>
                </div>
                <div className="col-md-6">
                </div>
            </div> 
            </div>
        </section>
        {/*Social Media*/}
        <section id="social-media">
            <div className="container text-center">
            <p>Find Us On Social Media</p>
            <div className="social-icons" />
            <a href="https://www.facebook.com/"><img src={foto9} alt /></a>
            <a href="https://www.instagram.com/plm.qazplm/"><img src={foto10} alt /></a>
            <a href="https://www.linkedin.com/"><img src={foto11} alt /></a>
            <a href="https://www.whatsapp.com/"><img src={foto12} alt /></a>
            <a href="https://www.snapchat.com/"><img src={foto13} alt /></a>
            </div>
        </section>
        {/*footer*/}
        <section id="footer">
            <img src={foto14} alt = "" />
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                <h1>LuxAd.id</h1>
                <p>Desain iklan profesional, cepat dan hemat.</p>
                </div>
                <div className="col-md-4 footer-box" />
                <p><b /></p>
                <br /><br />
                <p><i className="fa fa-map-marker" />Kawasan Megamas blok.C No.201, Manado</p>
            </div>
            <div className="col -md-4 footer-box">
                <p>Saran atau Tambahan</p>
                <input type="text" className="form-control" placeholder="Saran & Tambahan....." />
                <button type="button" className="btn btn-primary">Submit</button>
            </div>
            <div>
                <hr />
                <p>LuxAd.id</p>
            </div>
            </div>
        </section>
        </div>
    )
}