export abstract class Animal {
    constructor(public name: string) {}

    abstract hacerSonido(): void;

    dormir(): void{
        console.log("Dormir");
    }

    getNombre(): string{
        return this.name;
    }
}