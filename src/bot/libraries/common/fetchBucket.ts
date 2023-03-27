import client from "../../bot";

export default async function fetchBuckets(){
    const guild_id = process.env.GUILD_ID as string;
    const guild = await client.guilds.fetch(guild_id);
    const channels = guild.channels.cache;
    const text_channel = channels.map(channel => {
        return {
            type : channel.type,
            name : channel.name,
            id : channel.id,
        }
    }).filter(channel => {
        if(channel.type == 0){
            return channel
        }
    })
    return text_channel
}