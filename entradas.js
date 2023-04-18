
//muentra las ubicaciones compradas 
const precio = {
"12000": "AR$ es el valor de cada ubicacion en el sector General",
"22000": "AR$ es el valor de cada ubicacion en el sector Sívori/Centenario Alta",
"35000": "AR$ es el valor de cada ubicacion en el sector San Martín/Belgrano Baja",
"55000": "AR$ es el valor de cada ubicacion en el sector San Martín/Belgrano Media",
};

const precio2 = document.getElementById("price");
const precio3 = document.getElementById("price1");

function mostrarPrecio() {
    let lista = document.getElementById("miLista");
    let seleccion = lista.options[lista.selectedIndex].value;
    let precios = precio[seleccion];
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

 }
         

//muestra/oculta el menu para poner los datos de la tarjeta

     let boton_exp= document.getElementById("finish");

     let tarjeta= document.getElementById("tarjeta");
     
     boton_exp.addEventListener("click", llamar );
     
     function llamar(){
        tarjeta.classList.toggle("show");

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
          let boton5= document.getElementById("terminartodo");

          let confirmarcompra= document.getElementById("confirmarcompra");
          
          boton5.addEventListener("click", llamar2 );
          
          function llamar2(){
            confirmarcompra.classList.toggle("show2");
             };
            }
        else {
          alert("Por favor, completa todos los campos correctamente.");
        }
      }
 


  

     

        const lista = document.getElementById("miLista");
        const btn = document.getElementById("terminartodo2");
        const opciones = lista.options;
        for (let i = 0; i < opciones.length; i++) {
          opciones[i].value = i + 1;
          break
        }
        
        
       btn.addEventListener("click", () => {
          let valorSeleccionado = parseInt(lista.value);
        const valor1 = valorSeleccionado * cantidad.value
          alert("El total a pagar es: " + valor1);
        });
      
      



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