const cuenta = 10;

// CON IF ELSE
/* let mensaje;

if (cuenta < 0) mensaje = "No Tienes Saldo";
else mensaje = "Tienes Saldo";
*/

// USANDO OPERADOR TERNARIO
const mensaje =
  cuenta < 0 ? "No Tienes Saldo, lo siento" : "Tienes Saldo Positivo";

document.write(mensaje);
