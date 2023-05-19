import client from "@Client";
import { Events } from "tmi.js";

export default class BaseEvents{
    public name: keyof Events;

    constructor(name: keyof Events){
        this.name = name
    };
    
    run(client: client , ...args: any): any {};
};
