//Definiciones de acceso a la página web.
//Logeo de ususario para poder acceder a las funcionalidades del carrito de compra
//Submit, compara el usuario y contraseña ingresado con lo almacenado en el console log.
//Al hacer match debe permitirle acceder a la pestaña de pedidos.



let input_email_loging = document.getElementById("email_loging");
let input_password_loging = document.getElementById("password_loging")


//Guardar infromación de datos para relizar el login.
guardar_email = 0;
input_email_loging.addEventListener("input", () => {
    guardar_email = input_email_loging.value;
})
guardar_password = 0;
input_password_loging.addEventListener("input", () => {
    password_email = input_password_loging.value;
})


//Declarar usuario y password que está habilitado.

const acceso_log = 0;
const usuario_acceso = {
    email: "Lytton@gmail.com",
    password: "Lytton1234"
}

//Validar ususario y contraseña. En caso incorrecto, se comunicará un error.
let formulario_loging = document.querySelector("#contactForm_loging");
formulario_loging.addEventListener("submit", (e)=> {
    console.log("hola tarola")
    validar_formulario_loging(e);
       
});

function validar_formulario_loging(e){
    e.preventDefault();
    console.log(e.target);
    const input_emailform_log = e.target[0];
    const input_userform_log = e.target[1];    
    const loging_guardar = {
        email_in: input_emailform_log.value,
        password_in: input_userform_log.value
    };
    console.log(input_emailform_log.value)

    if(loging_guardar.email_in == usuario_acceso.email && loging_guardar.password_in == usuario_acceso.password){
        console.log("hola tarola"); 
        const acceso_log = 1;
        window.location.href = "/html/pedido.html";

    }else{
        console.log("error"); 
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresaste mal tu contraseña!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    
    return acceso_log      
    }

}

