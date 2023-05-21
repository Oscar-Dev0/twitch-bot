import { Options } from "tmi.js";
import { config } from "dotenv";
config();
const { env } = process;

const options: Options = {
    options: {
        debug: true,
    },
    identity: {
        username: env.User,
        password: env.ClientSecret
    },
    channels: [env.User],
};

const keys = {
    prefix: env.Prefix ?? "!",
};

const TwitchApi = () => {
    
}

export {
    options,
    keys
};