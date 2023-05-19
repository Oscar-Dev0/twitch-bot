import BaseClient from "@Client";
import Base from "./base/baseload";

export default class load extends Base{
    constructor(client: BaseClient){
        super(client);
    };

    all(){
        this.load("./../../app/events");
        this.load("./../../app/commands");
    };
};