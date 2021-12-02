package Conex;

import java.sql.ResultSet;
import java.sql.Statement;

public class Select {

    Conexion cn = new Conexion();

    //ejecutar un select

    public void ejecutarSelect(){

        try {
            Statement st = cn.con.createStatement();
            ResultSet rs = st.executeQuery("select * from alumnos");
            while (rs.next()) {
                System.out.println(rs.getInt("idalumno") + " " + rs.getString("nombre") + " " + rs.getString("apellido") + " " + rs.getString("DNI"));
            }
            cn.con.close();
        } catch (Exception e) {
            System.out.println("¡¡ERROR ejecutarSelect!!");
        }
    }
}
