import { Request, Response } from "express";
import createNewBucket from "../../../bot/libraries/common/createBucket";

export default async function createBucketController(req : Request, res : Response){
    try {
        const { name } = req.body
        const new_bucket = await createNewBucket(name)
        console.log(new_bucket.name);
        res.json([
            {
                name : new_bucket.name,
                id : new_bucket.id
            }
        ])
    } catch (error) {
        console.log(error);
    }
}