import { Request, Response } from "express";
import uploadFile from "../../../bot/libraries/common/uploadFile";
import { url } from "inspector";

export default async function uploadFileController(req : Request, res : Response ){
    try{
        const uploaded  = await uploadFile(req);
        const urls = uploaded?.attachments.map(data => {
            return {url : data.url, proxy_url : data.proxyURL}
        })
        res.status(200).json({ bucket_id : uploaded?.channelId , file_id : uploaded?.id, urls : urls });
    }catch(error){
        console.error("Error occurred while uploading file: ", error);
        res.status(500).json({ error: "File upload failed" });
    }
}