import { Request, Response } from "express";

export default async function uploadFileController(req : Request, res : Response ){
    const { channel_id } = req.body;
    const fileData = req.file;
    
    res.status(200).json({ message: 'Data received and processed successfully' });
}