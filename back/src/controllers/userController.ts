import { NextFunction, Request, Response } from "express";
import { createUserService, getAllUsersService, getUserByIdService, putUserService, loginUserService } from "../services/userServices";

//! Conexion con userServices
export async function getAllUsers (req: Request, res:Response) {
    try {
        const users = await getAllUsersService();
        res.json(users);
    } catch (error) {
        res.send(`Error al obtener los usuarios ${error}`);
    }

};

export async function getUser (req: Request, res:Response) {
    const id = parseInt(req.params.id);
    const user = await getUserByIdService(id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('Usuario no encontrado');
    }
};

export async function signUser (req: Request, res:Response, next: NextFunction) {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body;
        const newUser = await createUserService(name, email, birthdate, nDni, username, password);
        res.json(newUser);    
    } catch (error) {
        // res.send(`${error}`);
        next(error);
        // console.error(error);
        // res.status(500).send(`Error al registrar el usuario: ${error}`);
    }
};

export async function loginUser (req: Request, res:Response) {
    const { username, password } = req.body;

    try {
        const user = await loginUserService (username, password);
        if (user) {
            // Excluir el password y otras propiedades sensibles de la respuesta
            const { credentialsId, ...userData } = user;
            res.json({
                login: true,
                user: userData
            });
        } else {
            res.status(400).send('Datos incorrectos');
        }

    } catch (error) {
        res.status(500).send('Error al iniciar sesión');
    }

};

export async function putUser (req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const updateData = req.body;

    try {
        const updatedUser = await putUserService(id, updateData);
        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(404).send('Usuario no encontrado');
        }
    } catch (error) {
        res.status(500).send('Error al actualizar el usuario');
    }
};

//! Conexion con la DB de prueba (dbExample)
// export function getAllUsers (req: Request, res:Response) {
//     res.send(dbExample)
// };

// export function getUser (req: Request, res:Response) {
//     const person = dbExample.find(person => person.id === parseInt(req.params.id));
//     if (!person) return res.status(404).send('ID no encontrado');
//     res.status(200).send(person);
// };

// export function signUser (req: Request, res:Response) {
//     // console.log(req.body);
//     const newPerson = {
//         id: dbExample.length + 1,
//         Nombre: req.body.Nombre,
//         Apellido: req.body.Apellido,
//         Ciudad: req.body.Ciudad
//     };
//     dbExample.push(newPerson);
//     res.send(newPerson);
// };

// export function putUser (req: Request, res:Response) {
//     const person = dbExample.find(person => person.id === parseInt(req.params.id));
//     if (!person) return res.status(404).send('Persona no encontrada');

//     person.Nombre = req.body.Nombre || person.Nombre;
//     person.Apellido = req.body.Apellido || person.Apellido;
//     person.Ciudad = req.body.Ciudad || person.Ciudad;

//     res.send(person);
// };

// export function deleteUser (req: Request, res:Response) {
//     const index = dbExample.findIndex(p => p.id === parseInt(req.params.id));
//     if (index === -1) return res.status(404).send('Persona no encontrada');

//     const deletedPerson = dbExample.splice(index, 1);
//     res.send(deletedPerson);
// };