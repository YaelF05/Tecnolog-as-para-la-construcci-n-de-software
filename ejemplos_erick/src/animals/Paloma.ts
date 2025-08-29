import {Animal} from "./Animal.ts";
import {Volar} from "../skills/Volar.ts";

export class Paloma extends Animal implements Volar{

    constructor(name: string) {
        super(name);
    }

    hacerSonido(): void {
        console.log("Paloma");
    }

    volar(): void {
        console.log("La paloma vuela");
    }

}