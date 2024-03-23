import { AppDataSource } from "../config/data-source";
import { appointmentEntity } from "../entity/appointmentEntity";
import { userEntity } from "../entity/userEntity";

// let appointments: IAppointment[] = []; // Arreglo de precarga
let appointmentIdCounter = 1;

export async function getAllAppointmentsService(): Promise<appointmentEntity[]> {
    const appointmentRepository = AppDataSource.getRepository(appointmentEntity);
    return await appointmentRepository.find({relations: ['userId']});
}

export async function getAppointmentByIdService(id: number): Promise<appointmentEntity | null> {

    //*Traer el JSON con el ID del cliente
    // const appointmentRepository = AppDataSource.getRepository(appointmentEntity);
    // return await appointmentRepository.findOneBy({ id });

    //*Traer el JSON con los datos del cliente
    const appointmentRepository = AppDataSource.getRepository(appointmentEntity);
    return await appointmentRepository.findOne({
        where: { id },
        relations: ['userId']
    });
}

export async function createAppointmentService(date: Date, time: string, userId: number, description: string, status: 'active' | 'cancelled' = 'active'): Promise<appointmentEntity> {
    const appointmentRepository = AppDataSource.getRepository(appointmentEntity);
    const userRepository = AppDataSource.getRepository(userEntity);

    // Verificar si el usuario existe
    const user = await userRepository.findOneBy({ id: userId });
    if (!user) {
        throw new Error("Usuario no encontrado: N° " + userId);
    }

    // Crear cita
    const newAppointment = new appointmentEntity();
    newAppointment.date = date;
    newAppointment.time = time;
    newAppointment.userId = user;
    newAppointment.status = status;
    newAppointment.description = description;
    await appointmentRepository.save(newAppointment);

    return newAppointment;
}

export async function cancelAppointmentService(id: number): Promise<boolean> {
    const appointmentRepository = AppDataSource.getRepository(appointmentEntity);
    const appointment = await appointmentRepository.findOneBy({ id });

    if (!appointment) {
        return false;
    }

    appointment.status = 'cancelled';
    await appointmentRepository.save(appointment);
    return true;
}