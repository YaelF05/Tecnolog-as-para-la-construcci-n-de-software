import {Animal} from "./Animal.ts";
import {Volar} from "../skills/Volar.ts";
import {Nadar} from "../skills/Nadar.ts";

export class Pato extends Animal implements Volar, Nadar{
    constructor(name: string) {
        super(name);
    }

    hacerSonido(): void {
        console.log(`Cuak`);
    }


    volar(): void {
        console.log("El pato vuela");
    }

    nadar(): void {
        console.log("El pato nada");
    }
}

