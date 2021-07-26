import { Request, Response} from "express"
import { CreateTarefaService} from "../services/CreateTarefaService";


export interface ItarefaRequest{
    nome_tarefa:string,
    descricao:string,
    dificuldade:number
}

class CreateTarefaController{


    async handle( request: Request, response: Response){
        const { nome_tarefa , descricao , dificuldade}:ItarefaRequest = request.body;

        const createTarefaService = new CreateTarefaService();

        const user = await createTarefaService.execute({nome_tarefa,descricao,dificuldade});

        return response.json(user);
    }
}

export {CreateTarefaController}