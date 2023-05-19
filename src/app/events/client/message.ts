import BaseClient from "@Client";
import BaseEvents from "structure/clients/events";
import { ChatUserstate } from "tmi.js";

export class Message extends BaseEvents{
    constructor(){
        super("message");
    };

    async run(client: BaseClient, channel: string, userstate: ChatUserstate, message: string, self: boolean) {
        if(userstate["display-name"] == client.getUsername()) return;
        if(self || !message.startsWith(client.keys.prefix)) return;
        const [command, ...args] = message.slice(client.keys.prefix.length).trim().split(/ +/g);
        const cmd = client.commands.get(command?.toLowerCase());
        if(!cmd) return;
        cmd.run(client, {channel, user: userstate}, args);
    };
};