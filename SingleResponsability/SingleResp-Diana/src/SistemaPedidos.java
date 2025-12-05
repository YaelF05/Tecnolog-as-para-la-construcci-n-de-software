public class SistemaPedidos {
    private String cliente;
    private String cafe;

    public SistemaPedidos(String cliente, String cafe) {
        this.cliente = cliente;
        this.cafe = cafe;
    }

    public void tomarPedido(){
        System.out.println("Pedido para: " + cliente + "cafe: " + cafe);
    }
}
