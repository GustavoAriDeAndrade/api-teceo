import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Group } from "./group.entity";

/**
 * Entidade referente a tabela de usuários
 */
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: true })
    isActive: boolean;

    @ManyToOne(() => Group, (group) => group.users)
    @JoinColumn({ name: 'groupId' }) 
    group: Group;

    @Column()
    groupId: number;
    
}