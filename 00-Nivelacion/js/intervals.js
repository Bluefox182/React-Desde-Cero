const saludo = () => {
  document.write("<li>Hola Mundo</li>");
};

document.write("<ol>");
setInterval(saludo, 5000);
document.write("</ol>");
