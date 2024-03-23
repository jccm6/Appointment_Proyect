import { useNavigate } from "react-router-dom";
import { FormAppointment } from "../components/FormAppointment";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export function NewAppointment () {

    const user = useSelector((state) => state.user.user);
    // const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect( () => {
        if (!user) {
            navigate("/login");
        } else {
            
        }
    },[user])

    // console.log("Esto es en el NewAppointment");

    return (
        <>
            <div className="container text-center mt-4 mb-5">
                <div className="text-center">
                    <h2>Crear nuevo turno</h2>
                    <p>Puedes crear tu nueva cita aquí</p>
                </div>
                
                <div className="row align-items-start">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                            <FormAppointment/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}