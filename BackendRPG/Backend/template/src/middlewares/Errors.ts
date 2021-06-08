import { NextFunction, Request, Response } from 'express';

const catchErrors = (fn:any)=>{
    return function(req:Request, res:Response, next: NextFunction){
        return fn(req, res, next).catch(next);
    };
};

export {catchErrors};