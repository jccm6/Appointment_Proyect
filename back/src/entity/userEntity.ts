import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { credentialEntity } from "./credentialsEntity";
import { appointmentEntity } from "./appointmentEntity";

@Entity({name: "users"})
export class userEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    birthdate: Date;

    @Column()
    nDni: string;

    //* User 1:1 Credential
    @OneToOne( ()=> credentialEntity)
    @JoinColumn()
    credentialsId: credentialEntity;

    //* User 1:N Appointments
    @OneToMany ( () => appointmentEntity, (appointment) => appointment.userId)
    @JoinColumn()
    appointmentsId: appointmentEntity []
}