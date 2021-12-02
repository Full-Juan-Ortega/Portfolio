package Conex;

import javax.swing.*;
import java.sql.Statement;

public class Insert {

    Conexion cn = new Conexion();

    public void ejecutarInsertManual() {

        Alumno alumn = new Alumno();

        String DNI = JOptionPane.showInputDialog(
                "Inserte el DNI del alumno que quiere agregar");
        int DNIn = Integer.parseInt(DNI);
        alumn.setDNI(DNIn);
        int dniFinal= alumn.getDNI();


        String nombre = JOptionPane.showInputDialog(
                "Inserte el nombre del alumno que quiere agregar");
        alumn.setNombre(nombre);
        String nombreFinal = alumn.getNombre();


        String apellido = JOptionPane.showInputDialog(
                "Inserte el apellido del alumno que quiere agregar");
        alumn.setApellido(apellido);
        String apellidoFinal = alumn.getApellido();

        try {
            Statement st = cn.con.createStatement();
            String query = "INSERT INTO Alumnos (nombre,apellido,DNI) VALUES ("+"'"+nombreFinal+"','"+apellidoFinal+"',"+dniFinal+");";
            st.executeUpdate(query);
            System.out.println("¡ HECHO ! , El insert ha sido ejecutado");

        } catch (Exception e) {
            System.out.println("¡¡ERROR ejecutarINSERT!!");
        }
    }

        public void ejecutarInsertIntegrantes () {
            try {
                Statement st = cn.con.createStatement();
                String query = "INSERT INTO Alumnos (nombre,apellido,DNI) VALUES  ('Juan','Ortega','38518932')," +
                        "('Florencia','Bravo','40750065'), " +
                        "('Rosario','Gabbarini','38410158'), " +
                        "('Hilario','Menendez','36430662'), " +
                        "('Marcos','Gomez','32035158')";
                st.executeUpdate(query);
                System.out.println("¡ HECHO ! , El insert ha sido ejecutado");

            } catch (Exception e) {
                System.out.println("¡¡ERROR ejecutarINSERT!!");
            }
        }
    }

