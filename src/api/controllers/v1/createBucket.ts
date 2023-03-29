import { Request, Response } from "express";
import createNewBucket from "../../../bot/libraries/common/createBucket";

export default async function createBucketController(req : Request, res : Response){
    try {
        const { name } = req.body
        const new_bucket = await createNewBucket(name);
        res.status(200).json([
            {
                name : new_bucket.name,
                id : new_bucket.id
            }
        ])
    } catch (error) {
        console.error("Error occurred while creating new bucket : ", error);
        res.status(500).json({ error: "Failed to create new bucket." });
    }
}