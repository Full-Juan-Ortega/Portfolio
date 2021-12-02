package Conex;

public class Alumno {
    private String Nombre;
    private String Apellido;
    private int DNI;

    public Alumno() {

    }

    public Alumno(String nombre, String apellido, int dni) {
        this.Nombre = nombre;
        this.Apellido = apellido;
        this.DNI = dni;
    }

    public String getNombre() {
        return this.Nombre;
    }
    public void setNombre(String nombre) {
        this.Nombre = nombre;
    }

    public String getApellido() {
        return this.Apellido;
    }
    public void setApellido(String apellido) {
        this.Apellido = apellido;
    }

    public int getDNI() {
        return this.DNI;
    }
    public void setDNI(int dni) {
        this.DNI = dni;
    }
}
