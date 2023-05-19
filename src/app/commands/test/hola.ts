import BaseClient from "@Client";
import Commands from "structure/clients/commands";
import { ChatUserstate } from "tmi.js";

export class Hola extends Commands{
    constructor(){
        super("hola");
    };

    run(client: BaseClient, data: { channel: string, user: ChatUserstate }, args: string[]) {
        client.say(data.channel, "Hola mundo");
    };
};