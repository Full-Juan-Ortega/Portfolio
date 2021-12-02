package Conex;
import javax.swing.*;

public class Menu {


    public void menuInicio1(){
        int repetidorn;
        do{
            //MENU
            String rtalista = JOptionPane.showInputDialog(
                    "Marque 1 para SELECT \n" + "Marque 2 para INSERT \n" + "Marque 3 para UPDATE \n" + "Marque 4 para DELETE \n" + "Marque 5 para INSERT manual");
            int rtalistan = Integer.parseInt(rtalista);


            //LISTA DE OPCIONES

            switch (rtalistan){

                case 1:
                    Select S1= new Select();
                    S1.ejecutarSelect();
                    break;
                case 2:
                    Insert I1 = new Insert();
                    I1.ejecutarInsertIntegrantes();
                    break;
                case 3:
                    Update U1= new Update();
                    U1.ejecutarUpdate();
                    break;
                case 4:
                    Delete D1 = new Delete();
                    D1.ejecutarDelete();
                    break;
                case 5:
                    Insert I2 = new Insert();
                    I2.ejecutarInsertManual();
                    break;
            }

            String repetidor = JOptionPane.showInputDialog(
                    "Marque 1 para hacer otra consulta \n" + "Marque 2 para salir");
            repetidorn = Integer.parseInt(repetidor);

        } while(repetidorn == 1);

        JOptionPane.showMessageDialog( null ,"Gracias por utilizar la aplicacion de consultas \n Saludos");

    }

}
