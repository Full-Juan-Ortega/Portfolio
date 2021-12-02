package Conex;

import javax.swing.*;
import java.sql.Statement;

public class Update {

    Conexion cn = new Conexion();

    public void ejecutarUpdate(){


        try {

            String donde = JOptionPane.showInputDialog(
                    "Inserte el id del alumno que quiere modificar");
            int donden = Integer.parseInt(donde);
            String opcion = JOptionPane.showInputDialog(
                    "¿ Que dato quiere modificar ?\n 1.Nombre\n 2.Apellido\n 3.DNI" );
            int opcionn = Integer.parseInt(opcion);


            Statement st = cn.con.createStatement();

            switch(opcionn){
                case 1:
                    String nombre = JOptionPane.showInputDialog(
                            "Inserte el Nombre del alumno que quiere modificar");
                    String query1 = ("UPDATE alumnos SET nombre=" + "'"+nombre+"'" + "  WHERE idalumno=" +donden+";");
                    st.executeUpdate(query1);
                    break;
                case 2:
                    String apellido = JOptionPane.showInputDialog(
                            "Inserte el Nombre del alumno que quiere modificar");
                    String query2 = ("UPDATE alumnos SET apellido=" + "'"+apellido+"'" + "  WHERE idalumno=" +donden+";");
                    st.executeUpdate(query2);
                    break;

                case 3:
                    String DNIn = JOptionPane.showInputDialog(
                            "Inserte el Nombre del alumno que quiere modificar");
                    String query3 = ("UPDATE alumnos SET DNIn=" + "'"+DNIn+"'" + "  WHERE idalumno=" +donden+";");
                    st.executeUpdate(query3);
                    break;
            }

            System.out.println(" ¡ HECHO ! , El update ha sido ejecutado");

        } catch (Exception e) {
            System.out.println("¡¡ERROR ejecutarUPDATE!!");
        }
    }
}
