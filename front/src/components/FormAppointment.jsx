import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setUserAppointments } from '../redux/userAppointments';
// import dotenv, { config } from "dotenv";
// dotenv.config();

export function FormAppointment () {

    const user = useSelector((state) => state.user.user);
    const userAppointments = useSelector((state) => state.userAppointments.userAppointments);
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const [turno, setTurno] = useState({
        date: '',
        time: '',
        description: ''
    });

    const handleChange = (data) => {
        const { name, value } = data.target;
        setTurno({
            ...turno,
            [name]: value
        });
    };

    const handleSubmit = async (message) => {
        message.preventDefault();
        if (!user) {
            setMessage('<span class="text-danger">Debes estar registrado.</span>');
            return;
        }

        if (!turno.date || !turno.time) {
            setMessage('<span class="text-danger">Debes estar registrado.</span>');
            return;
        }
            
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/appointment/schedule`, {
            ...turno,
            userId: user.user.id
        })
        .then(response => {
            dispatch(setUserAppointments(response.data));
            setMessage(`<span class="text-success">Cita creada. Redirigiendo en 3 segundos a todas tus citas</span>`)
            setTurno({
                date: "",
                description: "",
                time: ""
            })
            setTimeout(() => {
                navigate("/misturnos");
            }, 3000);
        })
        .catch(error => {
            console.error("Error al crear el turno:", error);
        });
        
    };

    const getTodayDateString = () => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // Los meses empiezan en 0
        const dd = String(today.getDate() + 1).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    };

    const get2MonthDateString = () => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 3).padStart(2, '0'); // Los meses empiezan en 0
        const dd = String(today.getDate() + 1).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    };
    
    // console.log(turno);
    // console.log(user.user.id);

    return (
        <>
            <div className="container text-start">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <label >
                                Fecha:
                            </label>
                                <input type="date" className="form-control" name="date" value={turno.date} onChange={handleChange} min={getTodayDateString()} max={get2MonthDateString()} required />
                        </div>
                        <div className="col">
                            <label>
                                Hora:
                            </label>
                                <input step="1800" className="form-control" type="time" name="time" value={turno.time} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>
                                Descripción:
                            </label>
                                <textarea name="description" className="form-control" value={turno.description} onChange={handleChange} required />
                        </div>
                        <button className="btn btn-primary mt-3" type="submit">Crear Turno</button>
                        {message && <div dangerouslySetInnerHTML={{ __html: message }} />}
                    </div>
                </form>
            </div>
        </>
    );
};
