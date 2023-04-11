
//muentra las ubicaciones compradas 
const precio = {
"General": "$12.000",
"Sívori/Centenario Alta": "$22000",
"San Martín/Belgrano Baja": "$35000",
"San Martín/Belgrano Media": "$55000",
};

const claves = Object.keys(precio);

precio2 = document.getElementById("price");

function mostrarPrecio() {
    const lista = document.getElementById("miLista");
    const seleccion = lista.options[lista.selectedIndex].value;
    const precios = precio[seleccion];
    precio2.innerHTML =`${seleccion}: ${precios}`;
    
} 

//controla que la cantidad de entradas no sea cero o mas de 5
const cantidad = document.getElementById("cantidad")
const finish = document.getElementById("finish")

function cero() {
    if(cantidad.value ==0){
        alert("La cantidad de entradas no puede ser cero")
    }
    if(cantidad.value >=6){
            alert("La cantidad de entradas no puede ser mayor a cinco")
         }
     
     };

//muestra/oculta el menu para poner los datos de la tarjeta

     let boton_exp= document.getElementById("finish");

     let tarjeta= document.getElementById("tarjeta");
     
     boton_exp.addEventListener("click", llamar );
     
     function llamar(){
        tarjeta.classList.toggle("show");

        /*if (tarjeta.classList.contains("show")) { 
            boton_exp.innerHTML = "Cancelar compra";
        
        }
        else {
            boton_exp.innerHTML = "Confirmar compra";

     }*/
     }
     



     /*haciendo el ciclo*/

     let boton_validar= document.getElementById("terminartodo");
     boton_validar.addEventListener("click", validarFormulario );


     function validarFormulario() {
        var formulario = document.getElementById("mifomulario");
        var esValido = true;
      
        // Recorrer todos los campos del formulario
        for (var i = 0; i < formulario.elements.length; i++) {
          var campo = formulario.elements[i];
      
          // Validar cada campo
          if (campo.type === "number" && campo.value === "") {
            esValido = false;
            break;
          } else if (campo.type === "date" && campo.value === "") {
            esValido = false;
            break;
          }
        }
      
        // Si el formulario es válido, enviarlo
        if (esValido) {
          formulario.submit();
        } else {
          alert("Por favor, completa todos los campos correctamente.");
        }
      }




  /* alert("El precio de " + seleccion + " es " + precios);
   for (const clave of claves) {
    precio2.innerHTML =`${clave}: $precios{clave}`;
}*/
 







 /*Calcular el monto total de la compra
 function completarCompra(){
    var total = 0;
    for(i=0; i< product_list.length; i++){
    console.log(product_list[i]);
         total+=product_list[i].getTotal();
    }
    alert("Monto total a pagar: "+total);
} */