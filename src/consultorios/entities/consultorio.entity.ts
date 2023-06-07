import { User } from "../../user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Consultorio {
@PrimaryColumn()
  id: number;

  @Column({ length: 45})
  especialidad: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'id_medico' })
  medico: User;
}
