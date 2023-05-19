import BaseClient from "@Client";
import { ChatUserstate } from "tmi.js";

export default class  Commands {
    public name: string;

    constructor(options: string) {
        this.name = options;
    };

    run(client: BaseClient, data: { channel: string, user: ChatUserstate }, args: string[] ): any { } 
}