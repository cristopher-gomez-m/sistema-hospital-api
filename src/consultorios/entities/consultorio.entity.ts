import { Cita } from "src/cita/entities/cita.entity";
import { User } from "../../user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Consultorio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45})
  especialidad: string;

  @OneToOne(() => User,{ cascade: false })
  @JoinColumn({ name: 'id_medico'})
  medico: User;

  @ManyToMany(() => Cita, cita => cita.consultorios)
  citas: Cita[];
}
