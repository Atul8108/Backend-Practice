import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

const createUser =async(req:Request,res: Response,next: NextFunction)=>{
    const {name,email,password} = req.body;
    //1.validation

    if(!name || !email || !password){
        const error = createHttpError(499,"All fields must be provided");
        return next(error);
    }

    //2.process
    //3.response
    res.json({message: "User created"})
}




export {createUser};