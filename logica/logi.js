// Obtenemos el elemento del Pac-Man y su posición inicial

var posX = 135;
var posY = 135;

const pacman = document.querySelector('.pacman');

    
setInterval(() => {
  pacman.classList.toggle('pacman-open');
}, 200);
// Función para mover al Pac-Man
function moverPacman(evento) {
  switch(evento.keyCode) {
    case 37: // flecha izquierda
      posX -= 10;
      pacman.style.transform = "rotate(180deg)";
      break;
    case 38: // flecha arriba
      posY -= 10;
      pacman.style.transform = "rotate(-90deg)";
      break;
    case 39: // flecha derecha
      posX += 10;
      pacman.style.transform = "rotate(0deg)";
      break;
    case 40: // flecha abajo
      posY += 10;
      pacman.style.transform = "rotate(90deg)";
      break;
  }

  // Verificamos que el Pac-Man no se salga del juego
  if (posX < 0) {
    posX = 0;
  } else if (posX > 700) {// para determinar los limites por los cuales se mueve pacman en el eje x
    posX = 700;
  }

  if (posY < 0) {
    posY = 0;
  } else if (posY > 700) {// para determinar los limites por los cuales se mueve pacman en el eje y 
    posY = 700;
  }

  // Movemos al Pac-Man a su nueva posición
  pacman.style.left = posX + "px";
  pacman.style.top = posY + "px";
}

// Escuchamos los eventos de teclado para mover al Pac-Man
document.addEventListener("keydown", moverPacman);
