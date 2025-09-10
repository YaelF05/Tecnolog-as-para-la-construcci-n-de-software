import {PaymentService} from "./services/PaymentServices.js";
import {PayPalMent} from "./models/PayPalMent.js";
import {CreditCardPayment} from "./models/CreditCardPayment.js";
import {BitcoinMent} from "./models/BitcoinMent.js";

const service = new PaymentService();

const service1 = new PayPalMent();
const service2 = new CreditCardPayment();
const service3 = new BitcoinMent();

service.serviceProcess(service1, 200);
service.serviceProcess(service2, 300);
service.serviceProcess(service3, 400);