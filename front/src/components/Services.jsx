export function Services () {
    return (
        <>
            <section id="services" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Nuestros Servicios</h2>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <div className="card services-card">
                            <img src="https://i.imgur.com/7Vz9fI1.png" className="card-img-top" alt="General Dentistry"/>
                            <div className="card-body">
                            <h5 className="card-title">Odontología general</h5>
                            <p className="card-text">Atención integral, desde limpiezas hasta empastes, para mantener tu sonrisa saludable.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card services-card">
                            <img src="https://i.imgur.com/7lD6zGp.png" className="card-img-top" alt="Cosmetic Dentistry"/>
                            <div className="card-body">
                            <h5 className="card-title">Odontología cosmetica</h5>
                            <p className="card-text">Mejora tu sonrisa con nuestros tratamientos cosméticos, incluidos blanqueamientos y carillas.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card services-card">
                            <img src="https://i.imgur.com/bYd3Qys.png" className="card-img-top" alt="Orthodontics"/>
                            <div className="card-body">
                            <h5 className="card-title">Ortodoncia</h5>
                            <p className="card-text">Enderezar sus dientes para una sonrisa hermosa y saludable con nuestros servicios de ortodoncia.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}