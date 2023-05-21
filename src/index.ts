import BaseClient from "@Client";

const client = new BaseClient();

setTimeout(()=>{
    client.login();
}, 20000)
