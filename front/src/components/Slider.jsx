import { Link } from "react-router-dom";

export function Slider () {
    return (
        <>
            <section className="hero-section text-center">
                <div className="container">
                    <h1>Sonrisas brillantes todos los días</h1>
                    <p className="lead">Atención dental de alta calidad para toda la familia</p>
                    <div className="gap-2 d-md-inline-flex">
                        <Link to={"/nuevoturno"} className="btn btn-primary">Agendar consulta</Link>
                        <Link to={"/misturnos"} className="btn btn-primary">Revisar mis citas</Link>
                    </div>
                </div>
            </section>
        </>
    )
}