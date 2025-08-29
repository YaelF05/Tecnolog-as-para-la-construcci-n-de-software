import {Animal} from "./Animal.ts";

export class Gato extends Animal{

    constructor(name: string) {
        super(name);
    }

    hacerSonido(): void {
        console.log("Miau");
    }

}