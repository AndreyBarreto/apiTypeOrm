import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"
require('dotenv').config()


export function authBasic(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authToken = request.headers.authorization.split(" ")[1]
    if (!authToken) {
        return response.status(401).json({ "message": "Token missing" }).end()
    }
    try {
        const decode = verify(authToken, process.env.SECRET_KEY)
        console.log(decode)
    }
    catch (err) {
        return response.status(401).json({ "message": "Token invalid" }).end()
    }
    next()
}