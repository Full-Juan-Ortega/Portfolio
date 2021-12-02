<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />

    <meta
      name="viewport"
      content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=3.0, minimum-scale=1.0"
    />
    <meta
      name="description"
      content="Como primer paso el usuario debe registrarse cargando su nombre, apellido, teléfono, email y clave."
    />
    <meta
      name="keywords"
      content="VotoElectronico, EstadisticasVoto, VotaRemoto, voto"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
    />
    <link
      rel="shortcut icon"
      href="img/logos/icono_Mesa_de_trabajo1.png"
      type="image/x-icon"
    />
    <link rel="stylesheet" href="css/estilo_lyr.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
      rel="stylesheet"
    />

    <title>Voto Electronico - Resumen Registro</title>
    
    <link href="bootstrap-5.0.1-dist/css/bootstrap.min.css" rel="stylesheet" />
  </head>
  <body>
    <header>
     <!-- <nav aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-pos">
          <li class="breadcrumb-item"><a href="index.html" class="text-decoration-none">Inicio</a></li>
          <li class="breadcrumb-item active" aria-current="page">Registro</li>
          <li class="breadcrumb-item"><a href="loginvista.html" class="text-decoration-none">Acceso</a></li>
          <li class="breadcrumb-item"><a href="contacto.html" class="text-decoration-none">Contacto</a></li> 
          <li class="breadcrumb-item"><a href="sobrenosotros.html" class="text-decoration-none">Sobre nosotros</a></li> 
        </ol>-->
      <a href="#"
        ><img
          src="img/logos/logotipo_Mesa_de_trabajo1.png"
          alt="logo_inicio"
          class="logo"
      /></a> 
    </header>

<!-- Inicio de datos del formulario -->
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-6 com-md-4 mx-auto pt-5 card">
    <div class= "text-left ms-4" style="font-size: 24px;">

<?php
include('db.php');
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$fecha_nacimiento = $_POST['fecha_nacimiento'];
$dni = $_POST['dni'];
$correo = $_POST['correo'];
$password = $_POST['password'];
$telefono = $_POST['telefono'];
$pais = $_POST['pais'];
$provincia = $_POST['provincia'];
$ciudad = $_POST['ciudad'];

print " <p> Su nombre es: <strong>$nombre</strong>.</p>\n";
print "\n";
print " <p> Su apellido es: <strong>$apellido</strong>.</p>\n";
print "\n";
print " <p> Su fecha de nacimiento es: <strong>$fecha_nacimiento</strong>.</p>\n";
print "\n";
print " <p> Su dni es: <strong>$dni</strong>.</p>\n";
print "\n";
print " <p> Su correo es: <strong>$correo</strong>.</p>\n";
print "\n";
print " <p> Su contraseña es: <strong>$password</strong>.</p>\n";
print "\n";
print " <p> Su teléfono es: <strong>$telefono</strong>.</p>\n";
print "\n";
print " <p> Su país es: <strong>$pais</strong>.</p>\n";
print "\n";
print " <p> Su provincia es: <strong>$provincia</strong>.</p>\n";
print "\n";
print " <p> Su ciudad es: <strong>$ciudad</strong>.</p>\n";
print "\n";

// Datos conexion y funciones.


$conexion=mysqli_connect("localhost","Marcos","1234","voto_electronico");

//INSERT DATOS

$consulta = "INSERT INTO usuario (nombre, apellido, DNI, telefono) VALUES ('$nombre', '$apellido', '$dni' ,'$telefono')";

$ejecutado = mysqli_query($conexion, $consulta);

if ($ejecutado == 1){
  echo "<p><strong>-->Registro completo.<--</strong></p>";
}
else {
  echo "<p><strong>-->Error de registro.<--</strong></p>";
}

mysqli_close($conexion);


?>


<!-- Fin de datos del formulario -->
</div>
</div>
</div>
</div>
<br>
<div id="delayMsg" style="text-align: center;">
<button type="button" onclick="delayRedirect()" class="btn btn-danger">Click para salir</button>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="js/funcionesGrupo06.js"></script>

    <h2 class="titulo-final">
      &copy; Voto electronico 2021 | Todos los derechos reservados.
    </h2>
  </body>
</html>
