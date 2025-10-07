using Producto;

namespace ProductosConcretos
{
    public class TransferenciaPago : IPago
    {
        public void ProcesarPago(decimal monto)
        {
            Console.WriteLine($"Procesando transferencia bancaria: ${monto}");
        }

        public void ValidarPago()
        {
            Console.WriteLine("Validando datos de transferencia...");
            return true;
        }
    }
}