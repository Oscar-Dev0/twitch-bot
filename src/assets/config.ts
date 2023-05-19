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
        password: env.Token
    },
    channels: [env.User],
};

const keys = {
    prefix: env.Prefix ?? "!",
};

export {
    options,
    keys
};