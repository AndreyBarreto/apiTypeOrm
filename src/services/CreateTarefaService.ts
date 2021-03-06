//import { User } from "../entities/User";
import {getCustomRepository} from "typeorm";
import {TarefaRepositories } from "../repositories/TarefasRepositories";
import {ItarefaRequest} from "../controllers/CreateTarefasController"

class CreateTarefaService{
    async execute( {nome_tarefa,descricao,dificuldade} : ItarefaRequest){
        const usersRepository = getCustomRepository(TarefaRepositories) //new UsersRepositories();

        // if(!nome_tarefa){
        //     throw new Error("Campo nome_tarefa obrigatório");
        // }

        const tarefa = usersRepository.create({
            nome_tarefa,descricao,dificuldade
        })

        await usersRepository.save(tarefa);

        return tarefa;
    }
}

export {CreateTarefaService};