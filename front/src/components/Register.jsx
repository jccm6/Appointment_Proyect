import axios from "axios"
import { useState } from "react"
import { validateEmail, validatePassword } from "../utilities/validateForm";

export function Register () {

    const [form, setForm] = useState({
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: ""
    })

    const [message, setMessage] = useState('');
    
    function handleChange (e) {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };
    
    const get18yearDateString = () => {
        const today = new Date();
        const yyyy = today.getFullYear() - 18;
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate() - 1).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    };

    const handleSubmit = async (message) => {
        message.preventDefault();
    
        // Validación de los datos del formulario
        if (Object.values(form).some(value => value === '')) {
            setMessage(`<span class="text-danger">Complete todos los campos.</span>`);
            return;
        }

        // Validaciones
        if (!validateEmail(form.email)) {
            setMessage('<span class="text-danger">Ingrese un correo electrónico válido.</span>');
            return;
        }

        if (!validatePassword(form.password)) {
            setMessage('<span class="text-danger">Clave debe tener al menos 8 caracteres, una mayúscula y un carácter especial.</span>');
            return;
        }

        axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/registrar`, form)
        .then(response => {
            setMessage(`<span class="text-success">Registro exitoso. Bienvenido ` + response.data.name + `</span>`)
            setForm({
                name: "",
                email: "",
                birthdate: "",
                nDni: "",
                username: "",
                password: ""
            })
        })
        .catch(error => {
            setMessage((error.response.data || 'Error desconocido'));
            // console.log(error);
        });

    };

    function deleteForm () {
        setForm({
            name: "",
            email: "",
            birthdate: "",
            nDni: "",
            username: "",
            password: ""
        })
    }

    return (
        <>
             <div className="text-center">
                <h2>Registrarse</h2>
                <p>Registrate para empezar a agendar turnos</p>
            </div>

            <div className="container text-start">
                <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col">
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </label>
                    </div>
                    <div className="col">
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </label>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col">
                    <label>
                        Fecha de nacimiento:
                        <input
                            type="date"
                            name="birthdate"
                            className="form-control"
                            value={form.birthdate}
                            max={get18yearDateString()}
                            onChange={handleChange}
                        />
                    </label>
                    </div>
                    <div className="col">
                    <label>
                        Número de DNI:
                        <input
                            type="text"
                            name="nDni"
                            className="form-control"
                            value={form.nDni}
                            onChange={handleChange}
                        />
                    </label>
                    </div>
                    </div>
                    <hr/>
                    <div className="row">
                    <div className="col">
                    <label>
                        Nombre de usuario:
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            value={form.username}
                            onChange={handleChange}
                        />
                    </label>
                    </div>
                    <div className="col">
                    <label>
                        Contraseña:
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            value={form.password}
                            onChange={handleChange}
                        />
                    </label>
                    </div>
                    </div>
                    <div className="text-center mt-3">
                    <div className="gap-2 d-md-inline-flex">
                    <button className="btn btn-primary" type="submit">Registrarse</button>
                    <button className="btn btn-warning" type="reset" onClick={deleteForm}>Borrar</button>
                    </div>
                    </div>
                </form>
                {/* {message && <p>{message}</p>} */}
                <div dangerouslySetInnerHTML={{ __html: message }} />
            </div>

        </>
    )
}