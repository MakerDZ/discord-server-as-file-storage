import { Request, Response } from "express";
import deleteBucket from "../../../bot/libraries/common/deleteBucket";

export default async function deleteBucketController(req : Request, res : Response){
    try{
       const { id } = req.body;
       const is_deleted = await deleteBucket(id);
       if(!is_deleted){
            res.status(400).send({ message: 'Invalid Bucket ID'});
       }
       res.status(200).send({ message: 'Bucket deleted successfully'});
    }catch(error){
        console.error("Error occurred while deleting bucket : ", error);
        res.status(500).json({ error: "Failed to delete bucket" });
    }
}