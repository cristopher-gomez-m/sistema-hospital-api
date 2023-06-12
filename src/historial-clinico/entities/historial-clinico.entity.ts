import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class HistorialClinico {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    edad: number;

    @Column({ nullable: true })
    altura: number;

    @Column({ nullable: true })
    peso: number;

    @Column({ nullable: true })
    masa_corporal: number;

    @Column({ nullable: true })
    temperatura: number;

    @Column({ nullable: true })
    frecuencia_respiratoria: number;

    @Column({ nullable: true })
    presion_arterial: number;

    @Column({ nullable: true })
    frecuencia_cardiaca: number;

    @Column({ nullable: true })
    diabetes: boolean;

    @Column({ nullable: true, type: "text" })
    diabetes_descripcion: string;

    @Column({ nullable: true })
    tiroideas: boolean;

    @Column({ nullable: true, type: "text" })
    tiroideas_descripcion: string;

    @Column({ nullable: true })
    hipertension: boolean;

    @Column({ nullable: true, type: "text" })
    hipertension_descripcion: string;

    @Column({ nullable: true })
    cardiopatia: boolean;

    @Column({ nullable: true, type: "text" })
    cardiopatia_descripcion: string;

    @Column({ nullable: true })
    traumatismo: boolean;

    @Column({ nullable: true, type: "text" })
    traumatismo_descripcion: string;

    @Column({ nullable: true })
    cancer: boolean;

    @Column({ nullable: true, type: "text" })
    cancer_descripcion: string;

    @Column({ nullable: true })
    otros: boolean;

    @Column({ nullable: true, type: "text" })
    otros_descripcion: string;
}
