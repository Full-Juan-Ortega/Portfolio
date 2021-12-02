<?php
include('db.php');
$correo=$_POST['correo'];
$contrasena=$_POST['contrasena'];
session_start();
$_SESSION['correo']=$correo;


$conexion=mysqli_connect("localhost","Marcos","1234","voto_electronico");

$consulta="SELECT*FROM login where userName='$correo' and password='$contrasena'";
$resultado=mysqli_query($conexion,$consulta);

$filas=mysqli_num_rows($resultado);

if($filas){
  
    header("location:indexlog.php");

}else{
    ?>
    <?php
    include("loginerror.html");

  ?>
  <h1 class="bad pt-5" style="text-align: center">ERROR DE AUTENTIFICACION</h1>
  <?php
}
mysqli_free_result($resultado);
mysqli_close($conexion);
