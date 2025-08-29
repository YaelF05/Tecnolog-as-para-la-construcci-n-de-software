public class Perro {
    String nombre;
    int edad;

    public Perro(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public void comer(){
        System.out.println("Comiendo");
    }

    public void ladrar(){
        System.out.println("Ladrar");
    }
}
