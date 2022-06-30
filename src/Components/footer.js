import foto14 from "../Source/wave2.png"
export default function Footer ()
{
    return(
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
    )
}
