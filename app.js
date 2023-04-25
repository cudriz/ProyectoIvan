const frasesPoema = [
    "La luna brilla en el cielo",
    "Las estrellas cantan su canción",
    "El viento sopla suave en la noche",
    "Y en mi corazón siento tu amor"
  ];
  
  function obtenerFraseAleatoria() {
    const indiceFrase = Math.floor(Math.random() * frasesPoema.length);
    return frasesPoema[indiceFrase];
  }
  
  function encenderPantalla() {
    document.getElementById("poema-container").style.display = "flex";
  }
  
  function apagarPantalla() {
    document.getElementById("poema-container").style.display = "none";
  }
  
  if (window.DeviceProximityEvent) {
    window.addEventListener("deviceproximity", function(event) {
      if (event.value === 0) {
        // Si el valor de proximidad es 0, se apaga la pantalla
        apagarPantalla();
      } else {
        // Si el valor de proximidad no es 0, se enciende la pantalla y se muestra una frase aleatoria
        encenderPantalla();
        document.getElementById("poema-frase").textContent = obtenerFraseAleatoria();
      }
    });
  } else {
    // Si el dispositivo no tiene sensor de proximidad, se muestra un mensaje de error
    document.getElementById("poema-frase").textContent = "Este dispositivo no tiene sensor de proximidad :(";
  }
  