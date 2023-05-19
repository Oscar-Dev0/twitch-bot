import { lstat, readdirSync } from "fs";
import { join } from "path";
import Client from '@Client';
import { promisify } from 'util';
import BaseEvents from "structure/clients/events";
import Commands from "structure/clients/commands";
const lstatAsync = promisify(lstat);

export default class Base {

    public client: Client;
    constructor(client: Client){
        this.client = client;
    };

    async load(dir: string) {
        const files = await this.getFiles(dir);
        for (const value of files) {
            const file = join(dir, value);
            
            try {
                const arch = await import(file);
                let archivo: any;
                if (arch.default) {
                    archivo = new arch.default();
                } else {
                    const s = Object.values<any>(arch)[0];
                    archivo = new s();
                };
                if(archivo instanceof BaseEvents){
                    this.client.on(archivo.name, (...args: any)=> archivo?.run(this.client, ...args));
                } else if(archivo instanceof Commands){
                    this.client.commands.set(archivo.name, archivo);
                }

            } catch (e){
               
            }
        }
    };

    async getFiles(dir: string): Promise<string[]> {
        let files_array: string[] = [];
        if (dir.includes('../')) dir = __dirname + dir;
        const dir_folder = join(dir);
        const files = readdirSync(dir_folder);
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            try {
                const stats = await lstatAsync(join(dir_folder, file));
                if (stats.isDirectory()) {
                     this.load(join(dir_folder, file));
                } else if (stats.isFile() && (file.endsWith('.js') || file.endsWith('.ts'))) {
                    files_array.push(file);
                }
            } catch (err) {
                console.error(err);
            }
        }
        return files_array;
    };
};