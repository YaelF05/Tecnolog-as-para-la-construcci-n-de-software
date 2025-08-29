package clasesAbstractas;

public abstract class Carro {
    private String marca;
    private String llantas;
    private String color;

    public Carro(String marca, String llantas, String color) {
        this.marca = marca;
        this.llantas = llantas;
        this.color = color;
    }


    public void encender(){
        System.out.println("Carro encendido");
    }

    public abstract void acelerar();

}
