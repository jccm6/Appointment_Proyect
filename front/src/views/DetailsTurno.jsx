import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const URLTurn = "http://localhost:3000/appointment/";

export function DetailsTurno () {
        
    const navigate = useNavigate();

    let [myTurn, setMyTurno] = useState({})

    let {id} = useParams();

    // console.log(id);

    useEffect( () => {
        axios.get(URLTurn + id)
        .then(response => {
            setMyTurno(response.data);
        })
        .catch(error => {
            console.error(error.message);
        });
    },[])
    
    console.log(myTurn);

    // console.log(setMyTurno);
    
    return (
        <>
            <div className="container mt-4 mb-4">
                <div className="text-center">
                    <h2>Detalles del turno</h2>
                    <h3>Turno ID: {myTurn.id}</h3>
                </div>
                <div className="row align-items-start mt-4">
                <div className="col">
                <ul className="text-start">
                    <h3>Datos de la cita</h3>
                    <li>Usuario ID: {myTurn.userIdId}</li>
                    <li>Fecha de la cita: {myTurn.date}</li>
                    <li>Hora: {myTurn.time}</li>
                    <li>Descripción: {myTurn.description}</li>
                    <li className={myTurn.status === "active" ? "text-success" : "text-danger" }>Estado: {myTurn.status === "active" ? "Activa" : "Cancelada"}</li>
                </ul>
                </div>
                <div className="col">
                <ul className="text-start">
                    <h3>Datos del cliente</h3>
                    <li>Nombre: {myTurn.userId?.name}</li>
                    <li>Correo electronico: {myTurn.userId?.email}</li>
                    <li>Fecha de nacimiento: {myTurn.userId?.birthdate}</li>
                    <li>Numero de DNI: {myTurn.userId?.nDni}</li>
                </ul>
                </div>
                </div>
                <div className="text-center">
                    <div className="gap-2 d-md-inline-flex">
                        {/* <Link to={`/turnos`} className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                        </svg> Regresar</Link> */}
                        <button onClick={() => navigate(-1)} className="btn btn-primary"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                        </svg> Regresar</button>
                        <a href="#" className={myTurn.status === "active" ? "btn btn-warning" : "d-none" }>Cancelar cita</a>
                    </div>
                </div>
            </div>
        </>
    )
}