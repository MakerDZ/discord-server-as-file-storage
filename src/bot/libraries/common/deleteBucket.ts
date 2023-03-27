import { GuildChannel } from "discord.js";
import client from "../../bot";

export default async function deleteBucket(bucket_id : string){
    const guild_id = process.env.GUILD_ID as string;
    const guild = await client.guilds.fetch(guild_id);
    if (guild.channels.cache.has(bucket_id)) {
        const channel = await guild.channels.fetch(bucket_id) as GuildChannel;
        await channel.delete();
        return true;
    } else {
        return false;
    }
    
}
