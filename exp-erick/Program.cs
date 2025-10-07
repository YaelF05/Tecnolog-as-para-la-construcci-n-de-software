using Factory;
using Producto;

class Program
{
    static void Main()
    {
        ProcesarPago(TipoPago.TarjetaCredito(100.50));
        ProcesarPago(TipoPago.PayPal(100.50));
        ProcesarPago(TipoPago.Transferencia(100.50));
    }

    static void ProcesarPago(TipoPago tipo, decimal monto)
    {
        IPago pago = PagoFactory.crearPago(tipo);

        if (pago.ValidarPago)
        {
            pago.ProcesarPago(monto);
        }
    }
}