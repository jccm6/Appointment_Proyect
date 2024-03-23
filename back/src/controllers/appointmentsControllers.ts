import { Request, Response } from "express";
import { cancelAppointmentService, createAppointmentService, getAllAppointmentsService, getAppointmentByIdService } from "../services/appointmentServices";

export async function getAllAppointments (req: Request, res: Response) {
    try {
        const appointments = await getAllAppointmentsService();
        res.json(appointments);
    
    } catch (error) {
        res.send(`Error al obtener citas ${error}`)
    }
};

export async function getAppointment (req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const appointment = await getAppointmentByIdService(id);
    if (appointment) {
        res.json(appointment);
    } else {
        res.status(404).send('Cita no encontrada');
    }
};

export async function scheduleAppointment (req: Request, res: Response) {
    try {
        const { date, time, userId, description } = req.body;
        const newAppointment = await createAppointmentService(new Date(date), time, userId, description);
        res.status(201).json(newAppointment);
    
    } catch (error) {
        res.send(`${error}`);
    }
};

export function cancelAppointment (req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const success = cancelAppointmentService(id);
    if (true) {
        res.send('Cita cancelada');
    } else {
        res.status(404).send('Cita no encontrada');
    }
};