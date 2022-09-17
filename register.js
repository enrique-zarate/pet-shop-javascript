
var contenedor_login_register = document.querySelector(".contenedor_login_register");
var formulario_login = document.querySelector(".fomulario_login");
var formulario_register = document.querySelector(".formulario_register");
var caja_trasera_login = document.querySelector(".caja_trasera_login");
var caja_trasera_register = document.querySelector(".caja_trasera_register");
function register(){
    formulario_register.style.display = "block";
    contenedor_login_register.style.left="410px";
    formulario_login.style.display="none";
    caja_trasera_register.style.opacity="0";
    caja_trasera_login.style.opacity="1";
}
function InicioSesion(){
    formulario_register.style.display = "none";
    contenedor_login_register.style.left="10px";
    formulario_login.style.display="block";
    caja_trasera_register.style.opacity="1";
    caja_trasera_login.style.opacity="0";
}

var contrasenha = document.getElementById("contrasenha_register").value;
var verificarcontrasenha=document.getElementById("confirmarcontraenha").value;
function verificar(){
    if(contrasenha != verificarcontrasenha ){
        alert("Las contrasenhas no se parecen")
    
    }else{
        /*poner aqui el codigo de redireccion*/
    }
}