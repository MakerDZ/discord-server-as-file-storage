import { Request, Response} from "express";

export default function getBucketListController(req : Request, res : Response){
    res.send("here is your bucket list");
}