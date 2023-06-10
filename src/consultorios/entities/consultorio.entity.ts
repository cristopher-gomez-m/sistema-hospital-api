import { User } from "../../user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Consultorio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45})
  especialidad: string;

  @OneToOne(() => User,{ cascade: false })
  @JoinColumn({ name: 'id_medico'})
  medico: User;
}
