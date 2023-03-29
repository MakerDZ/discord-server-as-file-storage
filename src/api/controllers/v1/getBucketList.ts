import { Request, Response} from "express";
import fetchBuckets from "../../../bot/libraries/common/fetchBucket";

export default async function getBucketListController(req : Request, res : Response){
    try {
        const bucketList = await fetchBuckets();
        res.status(200).json(bucketList);
    } catch (error) {
        console.error("Error occurred while fetching bucket list: ", error);
        res.status(500).json({ error: "Failed to fetch bucket list" });
    }
}