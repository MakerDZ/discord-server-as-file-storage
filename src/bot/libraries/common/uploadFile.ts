import { Request } from "express";
import client from "../../bot";
import { AttachmentBuilder, TextChannel} from 'discord.js';


export default async function uploadFile(req : Request){
    const { id } = req.body;
    const fileData = req.file;
    if (!fileData?.buffer) {
        return;
    }
    const attachment = new AttachmentBuilder(fileData?.buffer , {name : fileData.originalname});
    const guild_id = process.env.GUILD_ID as string;
    const guild = await client.guilds.fetch(guild_id);
    const channel = await guild.channels.fetch(id) as TextChannel
    const uploaded = await channel.send({ files: [attachment] });
    return uploaded;
}