import { Request, Response} from "express"
import { AuthenticateUserService } from "../services/AuthenticateUserService"


export interface IAuthUser{
    email:string
    password:string
}

class AuthenticaUserController{
    async handle (request:Request, response:Response){
        const {email, password}:IAuthUser = request.body

        const authUserService = new AuthenticateUserService()

        const token = await authUserService.execute({email,password})

        return response.json(token)

    }
}

export {AuthenticaUserController}