import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { cancelUserAppointment, setUserAppointments } from '../redux/userAppointments';
import { Turno } from "../components/Turno";

export function MisTurnos () {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const userAppointments = useSelector((state) => state.userAppointments.userAppointments);

  // console.log(user);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      axios.get(`http://localhost:3000/user/${user.user?.id}`)
        .then(response => {
          dispatch(setUserAppointments(response.data));
        })
        .catch(error => {
          console.error("Error al cargar los turnos:", error);
        });
    }
  }, [dispatch, navigate, user]);

  
  const handleCancelTurno = (id) => {
    axios.put(`http://localhost:3000/appointment/cancel/${id}`)
    .then(() => {
      axios.get(`http://localhost:3000/user/${user.user?.id}`)
      .then(response => {
        dispatch(setUserAppointments(response.data));
      })
      .catch(error => {
        console.error("Error al cargar los turnos:", error);
      });
    })
    .catch(error => {
      console.error("Error al cancelar el turno:", error);
    });
  };
  
  // console.log("Que es userAppointments:", userAppointments.appointmentsId;

  return (
    <>
      <div className="text-center mt-4">
        <h1>Estos son los turnos del usuario</h1>
        <p>Aquí encontrarás los turnos del usuario</p>
      </div>
      <div className="container text-center">
        {userAppointments.appointmentsId?.length === 0 ? (
          <div className="text-center mt-4">
            <h3>No tienes citas</h3>
          </div>
        ) : (
          <div className="row row-cols-3">
            {userAppointments.appointmentsId?.map((turno) => (
                <Turno
                    key={turno.id}
                    id={turno.id}
                    date={turno.date}
                    time={turno.time}
                    userId={turno.userIdId}
                    userName={userAppointments.name}
                    userDNI={userAppointments.nDni}
                    status={turno.status}
                    description={turno.description}
                    // onCancel={handleCancelTurno(turno.id)}
                    onCancel={() => handleCancelTurno(turno.id)}
                />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
