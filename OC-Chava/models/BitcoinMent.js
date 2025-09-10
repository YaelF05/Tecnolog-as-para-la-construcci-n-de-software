import {PaymentMethod} from "./PaymentMethod.js";

export class BitcoinMent extends PaymentMethod{
    pay(amount) {
        console.log('Pago procesado por bitcoin ' + amount);
    }
}