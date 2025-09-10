import {PaymentMethod} from "./PaymentMethod.js";

export class PayPalMent extends PaymentMethod{
    pay(amount) {
        console.log('Pago procesado por paypal ' + amount);
    }
}