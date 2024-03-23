import { useEffect, useState } from "react";
import { Turno } from "../components/Turno";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserAppointments } from "../redux/userAppointments";

export function TodosTurnos () {

    const dispatch = useDispatch();
    let [myTurns, setTurnos] = useState([])

    useEffect( () => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/appointment`)
        .then(response => {
            setTurnos(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    },[])
    
    // console.log(myTurns);
    // console.log(setTurnos);

    const handleCancelTurno = (id) => {
        axios.put(`${import.meta.env.VITE_BACKEND_URL}/appointment/cancel/${id}`)
        .then(() => {
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/appointment`)
          .then(response => {
            setTurnos(response.data);
          })
          .catch(error => {
            console.error("Error al cargar los turnos:", error);
          });
        })
        .catch(error => {
          console.error("Error al cancelar el turno:", error);
        });
      };

    return (
        <>
            <div className="text-center mt-4">
                <h1>Estos son todos los turnos</h1>
                <p>Aqui encontraras todos los turnos del sistema</p>
            </div>
            <div className="container text-center">
                <div className="row row-cols-3">
                        {myTurns.map((turno) => (
                            <Turno
                                key={turno.id}
                                id={turno.id}
                                date={turno.date}
                                time={turno.time}
                                userId={turno.userIdId}
                                userName={turno.userId.name}
                                userDNI={turno.userId.nDni}
                                status={turno.status}
                                description={turno.description}
                                onCancel={() => handleCancelTurno(turno.id)}
                            />
                        ))}
                </div>
            </div>
        </>
    )
    
}