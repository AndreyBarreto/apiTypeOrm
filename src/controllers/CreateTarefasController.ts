import { Request, Response} from "express"
import { CreateTarefaService} from "../services/CreateTarefaService";


class CreateTarefaController{


    async handle( request: Request, response: Response){
        const { nome_tarefa , descricao , dificuldade} = request.body;

        const createUserService = new CreateTarefaService();

        const user = await createUserService.execute({nome_tarefa,descricao,dificuldade});

        return response.json(user);
    }
}

export {CreateTarefaController}