var nombreError = document.getElementById("nombre-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateNombre(){
    var nombre = document.getElementById("nombre").value;

    if(nombre.length == 0){
        nombreError.innerHTML = "Escriba su nombre";
        return false;
    }
    if(!nombre.match(/^[a-zA-Z])*s(1)[a-zA-Z]*$/)){
        nombreError.innerHTML = "Escriba su nombre completo";
        return false;
    }
    nombreError.innerHTML = <i class="fa-solid fa-badge-check"></i>;
        return true; 
}

function validateEmail(){
    var email = document.getElementById("email").value;

    if(email.length == 0){
        emailError.innerHTML = "Escriba su correo electrónico"
        return false;
    }
    if(!email.match(/^[a-Za-z\._\-[0-9]*[@][a-Za-z]*[\.][a-z]{2;4}$/)){
    emailError.innerHTML = "Correo electrónico inválido"
        return false;
}
    emailError.innerHTML = <i class="fa-solid fa-badge-check"></i>;
        return true; 
}

function validateMessage(){
    var message = document.getElementById("message").value;
    var required = 30;
    var left = required - message-length;

    if(left>0){
        messageError.innerHTML = left + "Se requieren más caracteres";
        return false;
    }
    messageError.innerHTML = <i class="fa-solid fa-badge-check"></i>;
        return true; 

}

function validateForm(){
    if(!validateNombre() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = "Por favor, corrija los errores";
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}