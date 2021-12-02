package Conex;
import java.sql.Connection;
import java.sql.DriverManager;

public class Conexion {
    Connection con;
    // cargo driver
    public Conexion(){
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/IEFI","root","tupassword");
            System.out.println ("-----------Base de Datos conectada----------- \n" );
        } catch (Exception e) {
            System.err.println("Error:" +e);
        }
    }

}



