import foto1 from "../Source/home2.png"
import foto2 from "../Source/wave1.png"
export default function Banner()
{
    return(
    <section id="banner">
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                <p className="promo-title">LUXURY ADS DESIGNER</p>
                <p>Desain iklan profesional, cepat dan hemat.</p>
                </div>
                <div className="col-md-6 text-center">
                <img src={foto1} className="img-fluid" />
                </div>
            </div>
            </div>
            <img src={foto2} className="bottom-img" />
        </section>
    )
}