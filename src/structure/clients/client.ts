import { Client } from "tmi.js";
import { config } from "dotenv";
config();

export default class BaseClient extends Client{
    constructor(){
        super( 
            {
            options: {
                debug: true,
            },
            identity:{
                username: process.env.User,
                password: process.env.Token
            },
            channels: [ process.env.User ]
        }
        );
    };

    login(){
        this.connect();
    };
};