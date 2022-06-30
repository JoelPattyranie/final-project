import foto3 from "../Source/Contoh desain poster promosi 8.png"
import foto4 from "../Source/reuni-STM-Argomulyo-2019.jpg"
import foto5 from "../Source/Desain-Poster-Festival-2.jpg"
export default function Products()
{
    return(
        <section id="products">
            <div className="container text-center">
            <h1 />
            <div className="row text-center">
                <div className="col-md-4">
                <img src={foto3} className="products-img" />
                <h4>Poster Promosi</h4>
                <p>Kami menyediakan lebih dari 100 desain.</p>
                </div>
                <div className="col-md-4">
                <img src={foto4} className="products-img" />
                <h4>Poster Reuni</h4>
                <p>Di design oleh designer profesional.</p>
                </div>
                <div className="col-md-4">
                <img src={foto5} className="products-img" />
                <h4>Poster Event</h4>
                <p>Kami memberikan desain yang simpel tapi menarik.</p>
                </div>
            </div>
            <button type="button" className="btn btn-primary">Pesan disini</button>
            </div>
        </section>
    )
}