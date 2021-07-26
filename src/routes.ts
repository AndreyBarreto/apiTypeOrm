import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTarefaController } from "./controllers/CreateTarefasController";
import {AuthenticaUserController} from "./controllers/AuthenticateUserController"
import {authBasic} from "./middlewares/authBasic"
import {authAdmin} from "./middlewares/authAdmin"

const router = Router();
const createUserController = new CreateUserController();
const createTarefaController = new CreateTarefaController();
const AuthenticateUserController = new AuthenticaUserController()


router.post("/users",authBasic,authAdmin, createUserController.handle);
router.post("/tarefas", createTarefaController.handle);
router.post("/auth", AuthenticateUserController.handle);

export { router };
