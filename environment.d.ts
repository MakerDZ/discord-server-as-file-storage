declare namespace NodeJS {
    export interface ProcessEnv {
        BOT_TOKEN ?: string,
        CLIENT_ID ?: string,
        GUILD_ID ?: string,
        PORT ?: string,
        API_KEY ?: string
    }
}