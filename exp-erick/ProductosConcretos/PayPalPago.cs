using system;

namespace ProductosConcretos
{
    public class PayPalPago: IPago
    {
        public void ProcesarPago(decimal monto)
        {
            Console.WriteLine($"Procesando pago con paypal: {monto}");
        }

        public bool ValidarPago()
        {
            Console.WriteLine("Validando cuenta de PayPal...");
            return true;
        }
    }
}