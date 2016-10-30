//Todos los campos son obligatorios, excepto los dos últimos.
//Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
//Para los campos nombre y apellido la primera letra debe ser mayúscula
//Validar que el campo email tenga un formato válido. Ej: name@domain.com
//El campo password debe tener al menos 6 caracteres
//El campo password no puede ser igual a "password" ó "123456" ó "098754"
//El valor seleccionado de bicis, debe ser una de las opciones presentadas
//Si algún campo presenta error debe informarse al usuario por medio de un alert.

var nombre = document.getElementById("name").value;
var soloLetras = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
var correo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;

function validateForm(){

function nombre(){
	var nombre = document.getElementById("name").value;
	if(nombre.length == 0) {
  	alert("Ingrese Nombre");
  	return false;                                                      // si el largo es igual a 0, si el valor es igual a null, o si no es una frase regular	
	}
	if(!soloLetras.test(nombre)){
		alert("Ingrese solo letras");     
		return false;                                                  //hasta aca solo se valida el nombre 
	}else if(nombre.substring(0,1) !== nombre.substring(0,1).toUpperCase()){
		alert("Ingrese la inicial con mayúscula");
		return false;
	}
}
nombre();

function apellido(){
	var apellido = document.getElementById("lastname").value;
	if(apellido.length == 0){
		alert("Ingrese su apellido");
		return false;
	}
	if(!soloLetras.test(apellido)){
		alert("Debe ingresar solo letras");
		return false;
	}else if(apellido.substring(0,1) !== apellido.substring(0,1).toUpperCase()){
		alert("Ingrese Su inicial con mayúscula");
		return false;
	}
}
apellido();

function correo(){
	var correo = document.getElementById('input-email')value;
	if (correo.length == 0){
		alert("Correo ingresado no Valido");
		return false;
	}
}
correo();

function contraseña(){
	var password = document.getElementById('input-password')value;
	if(password.length == 0){
		alert("Debe su password");
		return false;
	}else if(password.length<6){
		alert("La contraseña debe tener más de 6 caracteres");
		return false;
	}else{
		alert("Su contraseña es segura");
		return true;
	}
}
contraseña();

function selecionBici(){
	var bicicleta = document.getElementByTagName('select');
	for(var i = 0; i < bicicleta.length; i++){
		if (bicicleta[i].value ==="0"){
			alert("Debes seleccionar una bicicleta");
			return false;
		}
	}
		return false,
}
selecionBici();
