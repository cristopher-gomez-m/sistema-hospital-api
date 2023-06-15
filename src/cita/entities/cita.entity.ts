import { User } from "src/user/entities/user.entity";
import { Consultorio } from "../../consultorios/entities/consultorio.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cita {
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToMany(() => Consultorio)
    @JoinTable()
    consultorios:Consultorio[]

    @Column({ type: 'varchar' })
    fecha:string

    @Column({ type: 'varchar' })
    hora:string

    
    @ManyToOne(() => User, user => user.citas)
    @JoinColumn({ name: 'user_id' })
    user:User
}
