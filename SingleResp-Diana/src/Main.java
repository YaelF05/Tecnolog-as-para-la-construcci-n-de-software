public class Main {
    public static void main(String[] args) {

        SistemaPedidos pedidos = new SistemaPedidos("a","b");
        MaquinaCafe cafe = new MaquinaCafe("b");
        Factura factura = new Factura("a", 82.50);
        Notificacion notificacion = new Notificacion("a","c");

        pedidos.tomarPedido();
        cafe.prepararCafe();
        factura.generarFactura();
        notificacion.enviarMensaje();

    }
}