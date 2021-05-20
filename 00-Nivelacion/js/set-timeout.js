const evaluar = () => {
  const edad = prompt("Cual es tu edad?");
  if (edad < 18) {
    alert("Eres Menor de Edad");
    return;
  }

  alert("Eres Mayor de Edad - Puedes Continuar");
};

setTimeout(evaluar, 4000);
