using Producto;
using ProductosConcretos;

namespace Factory
{
    public static class PagoFactory
    {
        public static IPago CrearPago(TipoPago tipoPago)
        {
            return tipoPago switch
            {
                TipoPago.TarjetaCredito => new TarjetaCreditoPago(),
                TipoPago.PayPal => new PayPalPago(),
                TipoPago.Transferencia => new TransferenciaPago(),
                _ => throw new ArgumentException("Tipo de pago no soportado")
            };
        }
    }
}