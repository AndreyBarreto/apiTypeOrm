import {EntityRepository, Repository} from "typeorm";
import {Tarefa} from "../entities/Tarefas";

@EntityRepository(Tarefa)
class TarefaRepositories extends Repository<Tarefa>{}

export {TarefaRepositories};