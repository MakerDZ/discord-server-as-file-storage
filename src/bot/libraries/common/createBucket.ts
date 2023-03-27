import client from '../../bot';
import { ChannelType } from 'discord.js';

export default async function createNewBucket(bucket_name : string){
    const guild_id = process.env.GUILD_ID as string;
    const guild = await client.guilds.fetch(guild_id);
    const created_bucket = await guild.channels.create({
        name: bucket_name,
        type: ChannelType.GuildText,
    });
    return created_bucket;
}