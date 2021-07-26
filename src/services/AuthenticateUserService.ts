import { IAuthUser } from "../controllers/AuthenticateUserController"
import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
require('dotenv').config()


class AuthenticateUserService{
    async execute({ email, password }: IAuthUser){
        const usersRepository = getCustomRepository(UsersRepositories)

        const user = await usersRepository.findOne({
            email
        })
        if (!user) {
            throw new Error("Email incorrect")
        }

        const auth = await compare(password, user.password)
        if (auth){
            const token = sign(email,process.env.SECRET_KEY,
                )
            return {"token":token}  
        }
        
        throw new Error("Password incorrect")

       
    }



}

export { AuthenticateUserService }