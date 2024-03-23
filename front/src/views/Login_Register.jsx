import { Login } from "../components/Login";
import { Register } from "../components/Register";

export function LoginRegister () {
    return (
        <>
            <div className="container text-center mt-4 mb-5">
                <h1 className="mb-3">Bienvenidos</h1>
                <p>Agenda, revisa y cancela tus citas</p>
                <div className="row align-items-start">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <Register/>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <Login/>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </>
    )
}