import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

export function Login () {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const handleChange = (cambio) => {
        const { name, value } = cambio.target;
        setForm({
            ...form,
            [name]: value
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validación de los datos del formulario
        if (!form.username || !form.password) {
            setMessage('<span class="text-danger">Por favor, complete todos los campos.</span>');
            return;
        }
    
        // try {
        //     const response = await axios.post('http://localhost:3000/user/login', form);
        //     setMessage('<span class="text-success">Inicio de sesión exitoso. Bienvenido/a ' + response.user.name + '</span>');
        // } catch (error) {
        //     setMessage('<span class="text-danger">Error al iniciar sesión: ' + (error.response.data || 'Error desconocido') + '</span>');
        // }

        axios.post('http://localhost:3000/user/login', form)
        .then(response => {
            dispatch(setUser(response.data));
            setMessage(`<span class="text-success">Inicio de sesión exitoso. Bienvenido/a ` + response.data.user.name + `</span> </br> Serás redirigido en 2 segundos a tus turnos`)
            // console.log(response);
            setForm({
                username: "",
                password: ""
            })
            setTimeout(() => {
                navigate("/misturnos");
            }, 2000);
        })
        .catch(error => {
            setMessage(`<span class="text-danger">` + (error.response.data || 'Error desconocido') + `</span>`);
            // console.log(error);
        });
    };
    

    return (
        <>
            <div className="text-center">
            <h2>Iniciar sesión</h2>
            <p>Inicia sesión para ver tus turnos y registrar nuevos</p>
                <div className="container text-start">
                    <form onSubmit={handleSubmit}>
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
                        <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                    </div>
                    </form>
                    {message && <div dangerouslySetInnerHTML={{ __html: message }} />}
                </div>
            </div>
        </>
    );
};