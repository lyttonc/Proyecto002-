//Calcular costo total de productos seleccionados por el usuario.
//Que seleccione (plazo de pago, segun habilitado) y calcule cuotas.
//->funcion sumar, función cuota.


const preciooffice365 = 550
const preciogoogleworkspace = 234
const preciosamsungknox = 124
const precioclarodrive = 45


let contador1 = 0
let contador2 = 0
while (contador1 == 0) 
{
    producto = prompt("Ingresa el producto que querés comprar\n1-Office 365 (550 ARS) \n2-Google Workspace (234 ARS) \n3-Samsung Knox (124 ARS) \n4-Claro Drive (45 ARS)")

    if(producto == "1" || producto == "2" || producto =="3" || producto =="4") {

        if(producto == "1") {
            alert("seleccionaste Office 365");
            contador1 = 1 
        }
        if(producto == "2") {
            alert("seleccionaste Google Workspace");
            contador1 = 1 
        }
        if(producto == "3") {
            alert("seleccionaste Samsung Knox");
            contador1 = 1 
        }
        if(producto == "4") {
            alert("seleccionaste Claro Drive");
            contador1 = 1 
        }      
    } else { 
        alert("Ingresaste un número incorrecto")
        decision1 = prompt("¿Desea volver a seleccionar el producto?\n1-Ingrese cualquier tecla para continuar \2-Ingrese NO para salir")
        if (decision1 == "NO") {
            contador1 = 1
            contador2 = 1            
        } 
    }
}  
while (contador2 == 0) 
{
    cantidad = prompt("Ingresa la cantidad que desea comprar")

    if( isNaN(cantidad) == false) {
    contador2 = 1
    } else { 
        alert("Ingresaste un número incorrecto")    
        } 
}
   
console.log(cantidad*preciooffice365)

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

productoria(producto,cantidad)


