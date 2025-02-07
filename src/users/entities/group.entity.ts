import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

/**
 * Entidade referente a tabela de grupos
 */
@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: true })
    isActive: boolean;

    @OneToMany(() => User, (user) => user.group)
    users: User[];
}