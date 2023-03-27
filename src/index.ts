import 'dotenv/config';
import createServer from "./api/server";
import client from './bot/bot';
import loadEvents from "./bot/libraries/eventHandling";

// Express Server
const server = createServer();
server.listen(process.env.PORT, () => {
    console.log(`API is listening on port ${process.env.PORT}`);
})

// Login Into Bot and Loading Events, Commands
client.login(process.env.BOT_TOKEN).then(()=>{
    loadEvents(client, process.env.BOT_TOKEN, process.env.CLIENT_ID, process.env.GUILD_ID);
}).catch(err => {
    console.log(`There is error : ${err}`);
})