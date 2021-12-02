
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	apellido: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	pais: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // 4 a 40 digitos.
    provincia: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // 4 a 40 digitos.
    ciudad: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // 4 a 40 digitos.
	dni: /^.{7,8}$/ // 7 a 8 digitos.
}

const campos = {
	apellido: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false,
	dni: false,
	pais: false,
    provincia: false,
    ciudad: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		case "dni":
			validarCampo(expresiones.dni, e.target, 'dni');
		break;
		case "pais":
			validarCampo(expresiones.pais, e.target, 'pais');
		break;
        case "provincia":
			validarCampo(expresiones.provincia, e.target, 'provincia');
		break;
        case "ciudad":
			validarCampo(expresiones.ciudad, e.target, 'ciudad');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

/*
formulario.addEventListener('submit', (e) => {
	

	const terminos = document.getElementById('terminos');
	if(campos.apellido && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
	});
*/
//Redirect

function delayRedirect(){
	document.getElementById('delayMsg').innerHTML = 'Se redireccionara en: <span id="countDown">5</span> segundos....';
	var count = 5;
	setInterval(function(){
		count--;
		document.getElementById('countDown').innerHTML = count;
		if (count == 0) {
			window.location = 'http://localhost/voto_electronico/index.html'; 
		}
	},1000);
  };
  

//Hero del contacto

var imgRefreshBtn = document.getElementById("hero__img-refresh");

// Actualice la fuente de la imagen de picsum en btn click
imgRefreshBtn.onclick = function () {
  document.getElementById("hero__image").src =
    "https://picsum.photos/1280/720?rand=" + new Date().getTime();
};


// Final validacion del formulario

//Funciones para fecha:

//Función que obtiene la fecha actual
function fechaActual(){
  var fecha = new Date();
  var dd = fecha.getDate();
  var mm = fecha.getMonth() + 1; //Enero es 0!
  var yyyy = fecha.getFullYear();
  
  if (dd < 10) {
    dd = '0' + dd;
  }
  
  if (mm < 10) {
    mm = '0' + mm;
  }
  
  fecha = mm + '/' + dd + '/' + yyyy;
  return fecha
  }

//Funcion que calcula la edad dada la fecha de nacimiento
function calculaEdad () {
  var nacimiento= document.getElementById("fechanacimiento");
  
  nacimiento = new Date(nacimiento.value);
  actualidad = new Date(fechaActual());

  var edad = (actualidad.getFullYear() - nacimiento.getFullYear());
  
  if (actualidad.getMonth() < nacimiento.getMonth() || actualidad.getMonth() == nacimiento.getMonth() && actualidad.getDate() < nacimiento.getDate()) {
      edad--;
  }
  localStorage.setItem("edad", edad);
  if (edad>=16){
    document.getElementById("aviso1").innerHTML = "Genial, tienes "+edad+ " años, puedes participar en votaciones!"
    document.getElementById("aviso1").style.backgroundColor = "Green"
  }
  else{
    document.getElementById("aviso1").innerHTML = "Lo sentimos, debes ser mayor";
    document.getElementById("aviso1").style.backgroundColor = "Yellow"
  }


  return edad;
}

//Validar si la fecha introducida es real

function existeFecha(){
  let fecha = document.getElementById('fechanacimiento').value;
  nacimiento = new Date(fecha);
  

  if (nacimiento.getMonth() > 12 || nacimiento.getMonth() <= 0 || nacimiento.getDate <= 0 || nacimiento > 31 || nacimiento.getFullYear <= 0) {
      return false
  }
  return true;
}

function habilita(){
  document.getElementById("botonC").disabled=false;
}

let nombreContacto,apellidoContacto,emailContacto,descripcionContacto;


/* tomar datos del form registro */

function tomarDatos(){

  nombreContacto = document.getElementById ('nombreContacto').value;
  apellidoContacto = document.getElementById ('apellidoContacto').value;
  emailContacto = document.getElementById ('emailContacto').value;
  descripcionContacto = document.getElementById ('descripcion-contacto').value;

  //filtros
  
  let filtroNombreyApellido= /\d/;
  if(filtroNombreyApellido.test(nombreContacto) ===true){
    alert("ERROR , corrija el nombre")
    return false
  }

  if(filtroNombreyApellido.test(apellidoContacto) ===true){
    alert("ERROR , corrija el apellido")
    return false
  }

  let filtroMail=/[\w]+@{1}[\w]+\.[a-z]{2,3}/;

  if(filtroMail.test(emailContacto) === false){
    alert("Mail incorrecto")
    return false
  }
  
  //array


  var datosForm = new Array(nombreContacto,apellidoContacto,emailContacto,descripcionContacto);

  //filtroLongitud

for (f=0;datosForm.length>f;f++){
  console.log("Entro al for " + datosForm[f])
    
  if(datosForm[f].length>2 && datosForm[f].length<100){
    console.log( " el dato ingresado " + datosForm[f] + " es correcto")
    let c = 0;
    c++;}
  



    else { alert (" el dato ingresado " + datosForm[f] + " debe tener entre 2 y 100 caracteres" )
      console.log(" el dato ingresado " + datosForm[f] + "debe tener entre 2 y 100 caracteres" )
        return false;
        }              
      }

      


//punto 3 IEV : 3.Uno de los formularios debe tener funcionalidad en el botón Enviar, mostrando un Alert de operación exitosa.

if (c=4){
  alert(" Su consulta a sido enviada, responderemos a la brevedad ")

}}


