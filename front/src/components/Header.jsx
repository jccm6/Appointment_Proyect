import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../redux/userSlice";

export function Header () {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    const userAuth = useSelector((state) => state.user.user);

    return (
        // <header>
        //     <h1>este es el header</h1>
        // </header>

        <header className="mt-3">
            <div className="container">
            <div className="row align-items-center">
                <div className="col">
                {/* <a className="navbar-brand" href="/"> */}
                <Link to="/" className="nav-link text-uppercase">
                    <img src="https://i.imgur.com/sQfZS2i.png" width="auto" height="auto" alt="Logo"/>
                </Link>
                {/* </a> */}
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col">
                    <nav className="nav justify-content-center">
                        <Link to="/" className="nav-link text-uppercase" >Inicio</Link>
                        { userAuth && <Link to="/misturnos" className="nav-link text-uppercase" >Mis Cita</Link> }
                        <Link to="/nuevoturno" className="nav-link text-uppercase" >Agendar nueva cita</Link>
                        <Link to="/turnos" className="nav-link text-uppercase" >Todos los Cita</Link>
                        { !userAuth && <Link to="/login" className="nav-link text-uppercase" >Iniciar sesión / Registro</Link> }
                        { userAuth && <button onClick={handleLogout} className="nav-link text-uppercase" >Cerrar sesión</button> }
                    </nav>
                </div>
            </div>
            </div>
        </header>
    )
}