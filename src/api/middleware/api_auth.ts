import { Request, Response, NextFunction } from 'express';
const valid_api_key = process.env.API_KEY;

export default function authenticateApiKey(req: Request, res: Response, next: NextFunction) {
    const requested_api_key = req.headers.api_key as string;
    if(requested_api_key == valid_api_key){
        next();
    }else{
        res.status(401).json({ error: 'Unauthorized' });
    }
}