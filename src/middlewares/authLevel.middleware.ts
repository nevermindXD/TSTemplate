import { RequestHandler } from 'express';
import { HttpException } from '@exceptions/HttpException';

const authLevel = (
    level:String
) => {
    return (req, res, next) => {
        if(res.locals.tokenInformation === level){
            next();
        } else {
            next(new HttpException(401, 'Wrong authentication token'));
        }
    }
}

export default authLevel;