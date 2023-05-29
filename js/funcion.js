//Calcular costo total de productos seleccionados por el usuario.
//Que seleccione (plazo de pago, segun habilitado) y calcule cuotas.
//->funcion sumar, función cuota.


// defino primero mis constantes de precios para cada producto.
const preciooffice365 = 550
const preciogoogleworkspace = 234
const preciosamsungknox = 124
const precioclarodrive = 45

//Defino nuevos arrays
const productos = []
const cantidades = []

//Defino las variables contadores a utilizar a posterior
let contador1 = 0
let contador2 = 0

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
       
productoria(productos,cantidades)



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
