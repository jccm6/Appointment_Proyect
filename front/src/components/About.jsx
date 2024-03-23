export function About () {
    return (
        <>
            <section id="about" className="py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Nosotros</h2>
                    <div className="row">
                        <div className="col-md-6">
                        <img src="https://i.imgur.com/xEvJkzF.png" alt="Dentist" className="img-fluid mb-3"/>
                            <h3>Dr. Jane Doe</h3>
                            <p>Con más de 20 años de experiencia, la Dra. Doe se compromete a brindar la mejor atención posible.</p>
                        </div>
                        <div className="col-md-6">
                        <img src="https://i.imgur.com/BCdtH0n.png" alt="Dentist" className="img-fluid mb-3"/>
                            <p>Nuestra práctica está dedicada a mejorar la salud dental de nuestros pacientes. Utilizamos la última tecnología y técnicas para brindar tratamientos efectivos en un ambiente confortable.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}