import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity("tarefas")
class Tarefa {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    // @OneToOne(type=>User,tarefas=>Tarefa)
    // @JoinColumn()
    // users:User;

    @Column()
    nome_tarefa: string;

    @Column()
    descricao: string;

    @Column()
    dificuldade: number;

    @CreateDateColumn()
    created_at: Date;
}

export { Tarefa };
