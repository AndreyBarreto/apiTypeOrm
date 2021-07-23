import {Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, OneToOne} from "typeorm";
import { Tarefa } from "./Tarefas";
@Entity("users")
class User {
    @PrimaryGeneratedColumn("uuid") 
    readonly id: string;
    
    @Column() 
    name: string;
    
    @Column() 
    email: string;
    
    @Column() 
    admin: boolean;

    @Column()
    password:string;
    
    // @OneToOne(type=>Tarefa,users=>User)
    // tarefas: Tarefa;
    
    @CreateDateColumn()
    created_at: Date;
}

export { User };
