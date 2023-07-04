//Carrito de compra de productos SaaS 


// Defino primero mis constantes de precios para cada producto.
const preciooffice365 = 5550
const preciogoogleworkspace = 2340
const preciosamsungknox = 1240


//Guardar información de los inputs.

let input_nombre = document.getElementById("name")
let input_email = document.getElementById("email")
let input_cantidad = document.getElementById("cantidad")
let input_cantidad_microsoft = document.getElementById("cantidad_microsoft")
let input_cantidad_google = document.getElementById("cantidad_google")
let input_cantidad_knox = document.getElementById("cantidad_knox")
let input_cuotas = document.getElementById("cuotas")
let input_observacion = document.getElementById("mensaje")

//Calculo de subtotales automaticamente. Modificaición del DOM.
cantidad_guardar_microsoft = 0;
input_cantidad_microsoft.addEventListener("input", () => {
    cantidad_guardar_microsoft = input_cantidad_microsoft.value;
    calculo_subtotal_microsoft(cantidad_guardar_microsoft);
    calculo_total(cantidad_guardar_microsoft, cantidad_guardar_google, cantidad_guardar_knox);
    calculo_cuota(cuotas_guardar);
    })
function calculo_subtotal_microsoft(cantidad_guardar_microsoft){
    if (cantidad_guardar_microsoft > 0){
        subtotal_microsoft = preciooffice365*cantidad_guardar_microsoft;
        let adicional_microsoft = document.getElementById("contenedor_microsoft");
        adicional_microsoft.innerHTML = "<h6> Subtotal: $</h6>" + subtotal_microsoft;
    }else{
        let adicional_microsoft = document.getElementById("contenedor_microsoft");
        adicional_microsoft.innerHTML = ""; 
    }
    }

cantidad_guardar_google = 0;
input_cantidad_google.addEventListener("input", () => {
    cantidad_guardar_google = input_cantidad_google.value;
    calculo_subtotal_google(cantidad_guardar_google);
    calculo_total(cantidad_guardar_microsoft, cantidad_guardar_google, cantidad_guardar_knox)
    calculo_cuota(cuotas_guardar)
    })
function calculo_subtotal_google(cantidad_guardar_google){
    if (cantidad_guardar_google > 0){
        subtotal_google = preciogoogleworkspace*cantidad_guardar_google;
        let adicional_google = document.getElementById("contenedor_google");
        adicional_google.innerHTML = "<h6> Subtotal: $</h6>" + subtotal_google;
    }else{
        let adicional_google = document.getElementById("contenedor_google");
        adicional_google.innerHTML = ""; 
    }
    }
    
cantidad_guardar_knox = 0;
input_cantidad_knox.addEventListener("input", () => {
    cantidad_guardar_knox = input_cantidad_knox.value;
    calculo_subtotal_knox(cantidad_guardar_knox);   
    calculo_total(cantidad_guardar_microsoft, cantidad_guardar_google, cantidad_guardar_knox);
    calculo_cuota(cuotas_guardar)
    })
function calculo_subtotal_knox(cantidad_guardar_knox){
    if (cantidad_guardar_knox > 0){
        subtotal_knox = preciosamsungknox*cantidad_guardar_knox;
        let adicional_knox = document.getElementById("contenedor_knox");
        adicional_knox.innerHTML = "<h6> Subtotal: $</h6>" + subtotal_knox;
    }else{
        let adicional_knox = document.getElementById("contenedor_knox");
        adicional_knox.innerHTML = ""; 
    }
    }   
    
//Cálculo del total de la compra. Modifica en DOM.
function calculo_total(cantidad_guardar_microsoft, cantidad_guardar_google, cantidad_guardar_knox){
    if (cantidad_guardar_microsoft >= 0 && cantidad_guardar_google >= 0 && cantidad_guardar_knox >= 0){
        total_compra_carrito = preciooffice365*cantidad_guardar_microsoft + preciogoogleworkspace*cantidad_guardar_google + preciosamsungknox*cantidad_guardar_knox;
        let adicional_carrito = document.getElementById("contenedor_total_compra");
        adicional_carrito.innerHTML = "<h6> Total de compra: $</h6>" + total_compra_carrito;
    }else{
        let adicional_carrito = document.getElementById("contenedor_total_compra");
        adicional_carrito.innerHTML = ""; 
    }
    return total_compra_carrito;
    }


//Cálculo de cuotas. Modifica el DOM.
cuotas_guardar = 0;
input_cuotas.addEventListener("input", () => {
    cuotas_guardar = input_cuotas.value;
    //console.log(cuotas_guardar);
    calculo_cuota(cuotas_guardar);
    })

function calculo_cuota(cuotas_guardar){
    if (cuotas_guardar > 0){
        calculo = (preciooffice365*cantidad_guardar_microsoft + preciogoogleworkspace*cantidad_guardar_google + preciosamsungknox*cantidad_guardar_knox)/cuotas_guardar;
        let adicional = document.getElementById("contenedor");
        adicional.innerHTML = "<h6> Valor de cada cuota: $</h6>" + calculo;        
        //console.log("hola");
    }else{
        let adicional = document.getElementById("contenedor");
        adicional.innerHTML = "";
    }
    return calculo_cuota
}

//Función adicionar imagen dependiente de si se deja observación o no. Se muestra una imagen distinta. Se modifica el DOM.
function mostrar_carafeliz(contadorpalabra){
    if (contadorpalabra != ""){
        let adicional = document.getElementById("contenedor_imagen");
        adicional.innerHTML = 
        `<div class="bg-light p-4 rounded-4">
                <img class="profile-img" src="/assets/feliz.png" alt="..." width="80px" height="80px"/>
            </div>`;
                
    }else{
        let adicional = document.getElementById("contenedor_imagen");
        adicional.innerHTML = 
        `<div class="bg-light p-4 rounded-4">
                <img class="profile-img" src="/assets/caratriste.jpeg" alt="..." width="80px" height="80px"/>
            </div>` ;
    }   
    return mostrar_carafeliz
    }

//Función contar palabra dentro del input observación.
function contar_palabras(){
	//Obtenemos el texto del campo
	var texto = document.getElementById("mensaje").value;
	//Reemplazamos los saltos de linea por espacios
	texto = texto.replace (/\r?\n/g," ");
	//Reemplazamos los espacios seguidos por uno solo
	texto = texto.replace (/[ ]+/g," ");
	//Quitarmos los espacios del principio y del final
	texto = texto.replace (/^ /,"");
	texto = texto.replace (/ $/,"");
	//Troceamos el texto por los espacios
	var textoTroceado = texto.split (" ");
	//Contamos todos los trozos de cadenas que existen
	var numeroPalabras = textoTroceado.length;
	//Mostramos el número de palabras
	console.log(numeroPalabras)
    //Valor a retornar
    return numeroPalabras
}

input_observacion.addEventListener("input", () => {
    observacion_guardar = input_observacion.value;
    let contadorpalabra = contar_palabras();    
    mostrar_carafeliz(observacion_guardar)
    })


// Cuando se de submit al formulario se enviará la información al local storage y se mostrará un pop up (sweetalert)
//agradeciendo por la compra. En caso que no esté completa la información del fomrulario, se generará alerta de error.

let formulario = document.querySelector("#contactForm");
formulario.addEventListener("submit", (e)=> {
    validar_formulario(e);
    
});


function validar_formulario(e){
    e.preventDefault();
    console.log(e.target);
    const input_nombreform = e.target[0];
    const input_emailform = e.target[1];
    const input_cantidadform = e.target[2];
    const input_obsform = e.target[3];
    const compra_guardar = {
        producto: `Tu compra de:  Microsoft-> ${input_cantidad_microsoft.value} licencias | 
        Google Workspace-> ${input_cantidad_google.value} licencias |
        Knox-> ${input_cantidad_google.value} licencias`,
        nombre: input_nombreform.value,
        email: input_emailform.value,
        cantidad: input_cantidadform.value,
        observacion: input_obsform.value,
    };

    
    if(input_cantidad_google.value > 0 || input_cantidad_knox.value > 0 || input_cantidad_microsoft.value > 0) {
        if(input_nombreform.value != '' && input_emailform.value != '' && input_cantidadform.value > 0){
            console.log(input_nombreform.value)                      
            
            console.log(`Tu compra de:  Microsoft-> ${input_cantidad_microsoft.value} licencias | 
             Google Workspace-> ${input_cantidad_google.value} licencias |
             Knox-> ${input_cantidad_google.value} licencias`);
            localStorage.setItem("hola","tarola");
            
            const compra_guardar_enJSON = JSON.stringify(compra_guardar);
            console.log(compra_guardar_enJSON);
            localStorage.setItem("producto1",compra_guardar_enJSON);

            const compra_desde_enJason = JSON.parse(localStorage.getItem("producto1"));
            console.log(compra_desde_enJason.nombre);

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Gracias por tu compra',
                showConfirmButton: false,
                timer: 3000
            });  
            setTimeout( function() { window.location.href = "/html/pedido.html"; }, 3000 );

        }else{
            console.log("error"); 
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Complete el formulario!',
                footer: '<a href="">Why do I have this issue?</a>'
                });
        }
    }else{
        console.log("error"); 
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Complete el fomrulario!',
            footer: '<a href="">Why do I have this issue?</a>'
            });
    }
}