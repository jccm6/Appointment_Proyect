import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { cancelUserAppointment, setUserAppointments } from "../redux/userAppointments";

export function Turno ({ id, date, time, userId, userName, userDNI, status, description, onCancel }) {    
    
    const isCancellationAllowed = (appointmentDate) => {
        const currentDate = new Date();
        const appointmentDateObject = new Date(appointmentDate);

        appointmentDateObject.setDate(appointmentDateObject.getDate() - 1);
        
        return currentDate < appointmentDateObject;
    };    

    return (
        <>
        {/* <div className="turno">
            <h3>Turno ID: {id}</h3>
            <p>Fecha: {date}</p>
            <p>Hora: {time}</p>
            <p>Usuario ID: {userId}</p>
            <p>Estado: {status}</p>
        </div> */}
        <div className="col mb-3">
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">Turno ID: {id}</h5>
            <p className="text-start">Información de la cita:</p>
            <ul className="text-start">
                <li>Usuario ID: {userId}</li>
                <li>Fecha de la cita: {date}</li>
                <li>Hora: {time}</li>
                <li className={status === "active" ? "text-success" : "text-danger" }>Estado: {status === "active" ? "Activa" : "Cancelada"}</li>
            </ul>
            <hr/>
            <p className="text-start">Información del paciente:</p>
            <ul className="text-start">
                <li>Nombre del paciente: {userName}</li>
                <li>Numero de DNI: {userDNI}</li>
            </ul>
            <p className="card-text text-start">{description}</p>
            <div className="gap-2 d-md-inline-flex">
                <Link to={`/turno/${id}`} className="btn btn-primary">Más Información</Link>
                <button href="#" onClick={onCancel} className={status === "active" ? "btn btn-warning" : "d-none"} disabled={!isCancellationAllowed(date)}>Cancelar cita</button>
            </div>
        </div>
        </div>
        </div>
        </>

    );
};