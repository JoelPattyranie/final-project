import foto6 from "../Source/service1.png"
import foto7 from "../Source/service2.png"
import foto8 from "../Source/service3.png"
export default function Service()
{
    return(
    <section id="services">
            <div className="container text-center">
            <h1>Pelayanan Kami</h1>
            <div className="row text-center">
                <div className="col-md-4">
                <img src={foto6} className="service-img" />
                <h4>Desain Sesuai Keinginan</h4>
                <p>Kami membuat desain sesuai dengan Keinginan pelanggan demi kepuasan pelanggan kami.</p>
                </div>
                <div className="col-md-4">
                <img src={foto7} className="service-img" />
                <h4>Berkomunikasi Dengan Pelanggan</h4>
                <p>Kami selalu berkomunikasi dengan pelanggan agar desain bisa sesuai.</p>
                </div>
                <div className="col-md-4">
                <img src={foto8} className="service-img" />
                <h4>Desain Menarik</h4>
                <p>Kami membuat desain yang memikat agar dapat menarik hati.</p>
                </div>
            </div>
            <button type="button" className="btn btn-primary">Lihat Semua</button>
            </div>
        </section>
    )
}