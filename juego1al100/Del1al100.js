function adivinarNumero() {
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  let intentos = 6;
  let numeroUsuario;

  while (intentos > 0) {
    numeroUsuario = parseInt(prompt("Ingresa un número entre 1 y 100:"));

    if (isNaN(numeroUsuario)) {
      console.log("Por favor, ingresa un número válido.");
      continue; // Vuelve al inicio del bucle
    }

    if (numeroUsuario === numeroAleatorio) {
      console.log("¡Felicidades! Adivinaste el número en " + (6 - intentos + 1) + " intentos.");
      break; // Sale del bucle
    } else if (numeroUsuario < numeroAleatorio) {
      console.log("El número es mayor.");
    } else {
      console.log("El número es menor.");
    }

    intentos--;
  }

  if (intentos === 0) {
    console.log("Lo siento, se te acabaron los intentos. El número era: " + numeroAleatorio);
  }
}

adivinarNumero();