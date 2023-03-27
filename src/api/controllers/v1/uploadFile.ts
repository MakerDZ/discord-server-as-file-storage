import { Request, Response } from "express";

export default function uploadFileController(req : Request, res : Response ){
    const jsonData = req.body;
    const fileData = req.file;
    console.log(fileData);
    console.log(jsonData);
    res.status(200).json({ message: 'Data received and processed successfully' });
}