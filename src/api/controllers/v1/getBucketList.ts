import { Request, Response} from "express";
import fetchBuckets from "../../../bot/libraries/common/fetchBucket";

export default async function getBucketListController(req : Request, res : Response){
    try {
        const bucketList = await fetchBuckets();
        res.json(bucketList);
    } catch (error) {
        console.error(error);
    }
}