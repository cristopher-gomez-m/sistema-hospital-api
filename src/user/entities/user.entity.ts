import { ApiProperty } from '@nestjs/swagger';
import { Cita } from '../../cita/entities/cita.entity';
import { HistorialClinico } from '../../historial-clinico/entities/historial-clinico.entity';
import { Rol } from '../../rol/rol.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  
  id: number;
  @ApiProperty({ description: 'Nombre del usuario', example: 'jon@hotmail.com' })
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => Rol)
  @JoinColumn({ name: 'rol_id' })
  rol: Rol;

  @Column({ length: 50 })
  nombre: string;

  @Column({ length: 50 })
  apellido: string;

  @Column({ length: 10})
  cedula: string;
  @Column({ length: 70 })
  direccion: string;
  @OneToOne(() => HistorialClinico, { cascade: true })
  @JoinColumn()
  historial_clinico:HistorialClinico;

  @OneToMany(() => Cita, cita => cita.user)
  citas:Cita[]
}
