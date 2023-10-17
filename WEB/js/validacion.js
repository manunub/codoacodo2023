const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const mensaje = document.getElementById('mensaje');
function validarEnviar(){
     if (nombre.value.length < 3) {
          alert("Debe escribir su nombre");
          document.fvalida.nombre.focus();
          return;
     }
     if (apellido.value.length < 3) {
          alert("Debe escribir su apellido");
          document.fvalida.apellido.focus();
          return;  
     } 
     var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	
	if( !(validEmail.test(correo.value) )){
		alert('El formato del correo es invalido');
          document.fvalida.correo.focus();
		return ;
	}
     if (mensaje.value.length < 20) {
          alert("Debe escribir un mensaje");
          document.fvalida.mensaje.focus();
          return;
     }


     alert("Gracias por comunicarse con nosotros, nos contactaremos a la brevedad");
     document.fvalida.submit();  
}


