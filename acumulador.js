var acumulador = 0
//  var contador = 0

for (var contador = 1; contador <= 5; contador++){
  acumulador += Number (prompt ("Precio del articulo " + contador))
}

//do {

//acumulador += Number (prompt ("Precio del articulo " + ( contador + 1)))
//contador++

//} while (contador < 5);


//while (contador < 5){
  //acumulador += Number (prompt ("Precio del articulo " + ( contador + 1)))
  //contador++
//}

// while (contador < 5){
//   var mensaje = "Precio del articulo " + ( contador + 1)
//   var entrada = prompt (mensaje)
//   var precio_articulo = Number (entrada)
//   contador++
//   acumulador = acumulador + precio_articulo
// }


var usuario = prompt ("Inserte su nombre y apellido");
var Subtotal = acumulador
var IVA = Subtotal * 0.21
var A_pagar = Subtotal + IVA
document.write("<p> <strong> Sr(a) </strong>" + usuario + "</p>" )
document.write(" <p> <strong> Subtotal: </strong> " + Subtotal + " EUR </p>")
document.write(" <p> <strong> IVA incluido: </strong>" + IVA + " EUR </p>")
document.write(" <p> <strong> A pagar: </strong>" + A_pagar + " EUR </p>")
