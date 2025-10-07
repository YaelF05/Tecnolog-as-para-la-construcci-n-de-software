namespace Producto
{
    public interface IPago
    {
        void ProcesoPago(decimal monto);
        bool ValidarPago();
    }
}