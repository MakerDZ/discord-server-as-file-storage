import { Client, GatewayIntentBits, ActivityType } from "discord.js"; 

//Initializing Intents
const client = new Client({
    intents : [ 
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ],
    presence: {
        status: 'online',
        afk: false,
        activities: [{
            name: "Uploaded Files 👀",
            type: ActivityType.Watching,
        }],
    },
})

export default client;