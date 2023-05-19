import { keys, options } from "@Config";
import load from "../load";
import { Client } from "tmi.js";
import Commands from "./commands";

export default class BaseClient extends Client {
    public keys = keys;
    public events = new load(this).all();
    public commands = new Map<string, Commands>()

    constructor(){
        super(options);
    };

    login(){
        this.connect().catch((e)=>{
            console.log(e)
        });
    };
};