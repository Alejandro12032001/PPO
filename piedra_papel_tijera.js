function obtenerJugadaUsuario() {
  let jugadaUsuario;
  do {
    jugadaUsuario = prompt("Elige: piedra, papel o tijera").toLowerCase();
  } while (jugadaUsuario !== 'piedra' && jugadaUsuario !== 'papel' && jugadaUsuario !== 'tijera');
  return jugadaUsuario;
}

function obtenerJugadaMaquina() {
  const opciones = ['piedra', 'papel', 'tijera'];
  const indiceAleatorio = Math.floor(Math.random() * opciones.length);
  return opciones[indiceAleatorio];
}

function determinarGanador(jugadaUsuario, jugadaMaquina) {
  if (jugadaUsuario === jugadaUsuario) {
    return 'Empate';
  } else if (
    (jugadaUsuario === 'piedra' && jugadaMaquina === 'tijera') ||
    (jugadaUsuario === 'papel' && jugadaMaquina === 'piedra') ||
    (jugadaUsuario === 'tijera' && jugadaMaquina === 'papel')
  ) {
    return '¡Ganaste!';
  } else {
    return '¡Perdiste!';
  }
}

function jugarPartida() {
  let partidasJugadas = 0;
  let victoriasUsuario = 0;
  let victoriasMaquina = 0;

  let jugarDeNuevo = 'si';
  while (jugarDeNuevo === 'si') {
    partidasJugadas++;

    const jugadaUsuario = obtenerJugadaUsuario();
    const jugadaMaquina = obtenerJugadaMaquina();
    const resultado = determinarGanador(jugadaUsuario, jugadaMaquina);

    if (resultado === '¡Ganaste!') {
      victoriasUsuario++;
    } else if (resultado === '¡Perdiste!') {
      victoriasMaquina++;
    }

    console.log(`Tu elegiste: ${jugadaUsuario}`);
    console.log(`La máquina eligió: ${jugadaMaquina}`);
    console.log(resultado);
    console.log(`Partidas jugadas: ${partidasJugadas}`);
    console.log(`Tus victorias: ${victoriasUsuario}`);
    console.log(`Victorias de la máquina: ${victoriasMaquina}`);

    jugarDeNuevo = prompt('¿Quieres jugar otra vez? (si/no)').toLowerCase();
  }
}

jugarPartida();