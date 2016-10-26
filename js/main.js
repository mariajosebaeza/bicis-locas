//Todos los campos son obligatorios, excepto los dos últimos.
//Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
//Para los campos nombre y apellido la primera letra debe ser mayúscula
//Validar que el campo email tenga un formato válido. Ej: name@domain.com
//El campo password debe tener al menos 6 caracteres
//El campo password no puede ser igual a "password" ó "123456" ó "098754"
//El valor seleccionado de bicis, debe ser una de las opciones presentadas
//Si algún campo presenta error debe informarse al usuario por medio de un alert.

var nombre = document.getElementById("name").value;


function validateForm(){
	valor = document.getElementById("name").value;
	if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
  	return false;                                                      // si el largo es igual a 0, si el valor es igual a null, o si no es una frase regular)
  	alert("Ingrese Nombre");
}
	if(!soloLetras.test(nombre)){
		alert("Ingrese solo letras");     
		return false;                                                  //hasta aca solo se valida el nombre 
	}

var apellido = document.getElementById("lastname").value;
if (apellido == ""){
	alert ("Debe ingresar apellido");
	return false;
}
if(!soloLetras.test(apellido)){
		alert("Ingrese solo letras");                                   //valida apellido, que solo tenga letras, y que no sea espacio en blanco 
		return false;    


	



/* valor = document.getElementById("input-email").value;
if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
  return false;
}   validacion correo */

