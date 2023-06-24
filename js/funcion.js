//Carrito de compra de 1 producto.
//Datos mínimos de nombre y apellido.
//Denerá msotrar el costo del mismo, canitdad de cuotas disponibles y el calculo final a pagar.


// defino primero mis constantes de precios para cada producto.
const preciooffice365 = 550
const preciogoogleworkspace = 234
const preciosamsungknox = 124
const precioclarodrive = 45



//Automaticamente sin submit mostrar lo que tiene que pagar en cada cuota

let input_nombre = document.getElementById("name")
let input_email = document.getElementById("email")
let input_cantidad = document.getElementById("cantidad")
let input_cuotas = document.getElementById("cuotas")
let input_observacion = document.getElementById("mensaje")

function calculo_cuota(cantidad_guardar, cuotas_guardar){
    if (cantidad_guardar>0 && cuotas_guardar>0){
        calculo = (preciooffice365*cantidad_guardar)/cuotas_guardar;
        let adicional = document.getElementById("contenedor");
        adicional.innerHTML = "<h6> Valor de cada cuota: </h6>" + calculo;        
        //console.log("hola");
    }else{
        let adicional = document.getElementById("contenedor");
        adicional.innerHTML = "";
    }
    return calculo_cuota
}

cuotas_guardar = 0;
cantidad_guardar = 0;
input_cantidad.addEventListener("input", () => {
    cantidad_guardar = input_cantidad.value;
    //console.log(cantidad_guardar);
    calculo_cuota(cantidad_guardar, cuotas_guardar)
    })

input_cuotas.addEventListener("input", () => {
    cuotas_guardar = input_cuotas.value;
    //console.log(cuotas_guardar);
    calculo_cuota(cantidad_guardar, cuotas_guardar)
    })

//Función adicionar imagen dependiente de si se deja observación o no
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

//Función contar palabra dentro del input observación
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
//agradeciendo por la compra

let formulario = document.querySelector("#contactForm");
formulario.addEventListener("submit", (e)=> {
    console.log("hola tarola")
    validar_formulario(e);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Gracias por tu compra',
        showConfirmButton: false,
        timer: 3000
      });  
    
});


function validar_formulario(e){
    e.preventDefault();
    console.log(e.target);
    const input_nombreform = e.target[0];
    const input_emailform = e.target[1];
    const input_cantidadform = e.target[2];
    const input_cuotasform = e.target[3];
    const input_obsform = e.target[4];
    const compra_guardar = {
        producto: "Microsoft",
        nombre: input_nombreform.value,
        email: input_emailform.value,
        cantidad: input_cantidadform.value,
        cuotas: input_cuotasform.value,
        observacion: input_obsform.value,
    };
    console.log(`Tu compra microsoft: ${input_cantidadform.value}`);
    localStorage.setItem("hola","tarola");

    
    const compra_guardar_enJSON = JSON.stringify(compra_guardar);
    console.log(compra_guardar_enJSON);
    localStorage.setItem("producto1",compra_guardar_enJSON);

    const compra_desde_enJason = JSON.parse(localStorage.getItem("producto1"));
    console.log(compra_desde_enJason.nombre);
}






//------------------------------------------------------------------------------------------------

/*
//Defino nuevos arrays
const productos = []
const cantidades = []

//Defino las variables contadores a utilizar a posterior
let contador1 = 0
let contador2 = 0
let contador3 = 0
*/


//Todo lo de abajo es histórico
/*
//Defino función para comprobar que la cantidad de un producto ingresado sea numérico
function cantidad_compra(contador2){
    while (contador2 == 0) //ciclo para que el dato ingresado sea numérico
    {
    cantidad = prompt("Ingresa la cantidad que desea comprar")

    if( isNaN(cantidad) == false) {
    contador2 = 1;
    cantidades.push(cantidad)
    } else { 
        alert("Ingresaste un número incorrecto")    
        } 
    }    
}

//sintaxis a ejecutarse ni bien se apertura la página
while (contador1 == 0) //ciclo para seleccionar el o los productos. Los mismos se almacnarán en el array correspondiente.
{
    producto = prompt("Ingresa el producto que querés comprar\n1-Office 365 (550 ARS) \n2-Google Workspace (234 ARS) \n3-Samsung Knox (124 ARS) \n4-Claro Drive (45 ARS)")
    
    if(producto == "1" || producto == "2" || producto =="3" || producto =="4") {

        if(producto == "1") {
            alert("seleccionaste Office 365");
            productos.push(preciooffice365);
            cantidad_compra(0)
            
        }
        if(producto == "2") {
            alert("seleccionaste Google Workspace");
            productos.push(preciogoogleworkspace);
            cantidad_compra(0)
            
        }
        if(producto == "3") {
            alert("seleccionaste Samsung Knox");
            productos.push(preciosamsungknox);
            cantidad_compra(0)
             
        }
        if(producto == "4") {
            alert("seleccionaste Claro Drive");
            productos.push(precioclarodrive);
            cantidad_compra(0)
        }      
    } else { 
        alert("Ingresaste un número incorrecto")
        decision1 = prompt("¿Desea volver a seleccionar el producto?\n1-Ingrese cualquier tecla para continuar \2-Ingrese NO para salir")
        if (decision1 == "NO") {
            contador1 = 1;
            contador2 = 1            
        } 
    }
    pregunta = prompt("¿Desea seguir comprado? Escribir SI para seguir comprando. Para salir presione ingrese cualquier palabra")
    if(pregunta == "SI"){
        contador1 = 0   
    } else {
        contador1 = 1

    }
}  
   
let resultadototal = 0

//función a ejecutar para conocer el total del importe.
function productoria(productos, cantidades) {

    for (let i = 0; i <productos.length; i++){
        resultado = productos[i]*cantidades[i]
        resultadototal += resultado
        }
        
    alert("El total de su compra es " + resultadototal )
}
       

//función a ejecutar para calcular las cuotas
function cuota(productoria){
    cantidad_cuota = prompt("Ingrese la cantidad de cuotas. Solo permitido 1, 2 o 3 sin interés");
    total_cuota = resultadototal/cantidad_cuota
    while (contador3 == 0)
    {
        if(cantidad_cuota == "1" || cantidad_cuota == "2" || cantidad_cuota =="3") {
            alert("Pagarás " + total_cuota + " en " + cantidad_cuota + " cuota(s)");
            contador3 = 1
        } else {    
            alert("Ingresaste un número incorrecto");
            cantidad_cuota = prompt("Ingrese la cantidad de cuotas. Solo permitido 1, 2 o 3 sin interés");
            contador3 = 0
        }
    }
}

productoria(productos,cantidades)
cuota(productoria)
*/




//A partir de acá es código obsoleto
/*

function productoria(producto, cantidad) {
    
    if (producto =="1") {
        resultado = cantidad*preciooffice365
    }
    if (producto =="2") {
        resultado = cantidad*preciogoogleworkspace
    }
    if (producto =="3") {
        resultado = cantidad*preciosamsungknox
    }
    if (producto =="4") {
        resultado = cantidad*precioclarodrive
    }
    alert("El total de su compra es " + resultado )
}


while (contador2 == 0) //ciclo para que el dato ingresado sea
{
    cantidad = prompt("Ingresa la cantidad que desea comprar")

    if( isNaN(cantidad) == false) {
    contador2 = 1;
    cantidades.push(cantidad)
    } else { 
        alert("Ingresaste un número incorrecto")    
        } 
}

productoria(producto,cantidad)

*/
