import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
require('dotenv').config()




export async function authAdmin(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authToken = request.headers.authorization.split(" ")[1]
    const email: string = verify(authToken, process.env.SECRET_KEY).toString()
    const usersRepository = getCustomRepository(UsersRepositories)
    const userAlreadyExists = await usersRepository.findOne({
        email,
    });
    if (!userAlreadyExists.admin) {
        return response.status(401).json({ "message": "Not allowed for not admin users" }).end()
    }
    next()

}