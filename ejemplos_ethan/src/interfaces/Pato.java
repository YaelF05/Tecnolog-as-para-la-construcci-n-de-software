package interfaces;

public class Pato extends Animal  implements Volador{

    public Pato(int age) {
        super(age);
    }

    @Override
    public void hacerRuido() {
        System.out.println("ruido");
    }

    @Override
    public void volar() {
        System.out.println("vuela");
    }
}
