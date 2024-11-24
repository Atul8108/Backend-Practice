import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";
import userModel from "./userModel";

const createUser =async(req:Request,res: Response,next: NextFunction)=>{
    const {name,email,password} = req.body;
    //1.validation

    if(!name || !email || !password){
        const error = createHttpError(499,"All fields must be provided");
        return next(error);
    }

    // 2.database validations

    const user = await userModel.findOne({email})

    if(user){
        const error = createHttpError(409,"User already exists with this email");
        return next(error);
    }
    //3.process

    const hashedPassword = await bcrypt.hash(password,10); 

    const newUser = new userModel({name,email,password: hashedPassword});

    //jwt token generation

    const token = sign({sub: newUser._id},config.jwtSecret as string,{expiresIn:'7D'})
    //4.response
    res.json({accessToken: token,userId : newUser._id})
}




export {createUser};