import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { userEntity } from "./userEntity";

@Entity({name: "appointments"})
export class appointmentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    time: string;

    @Column()
    userIdId: number;

    @Column({nullable: true})
    description?: string;

    @ManyToOne( () => userEntity, (user) => user.appointmentsId)
    userId: userEntity;

    @Column()
    status: "active" | "cancelled";

}