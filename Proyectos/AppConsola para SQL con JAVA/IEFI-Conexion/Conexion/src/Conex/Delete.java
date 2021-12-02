package Conex;

import javax.swing.*;
import java.sql.Statement;

public class Delete {

    Conexion cn = new Conexion();

    public void ejecutarDelete(){

        String donde = JOptionPane.showInputDialog(
                "Inserte el id del alumno que quiere ELIMINAR");
        int donden = Integer.parseInt(donde);

        try {
            Statement st = cn.con.createStatement();
            String query = "DELETE FROM alumnos WHERE idalumno=" + donden +";";
            st.executeUpdate(query);
            System.out.println("¡ HECHO !,La fila ha sido borrada");
        } catch (Exception e) {
            System.out.println("¡¡ERROR ejecutarINSERT!!");
        }
    }
}
