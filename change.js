const cambiosTitle = ["Biografía del Coronel José Gálvez Egúsquiza", "La mejor biografía sobre el Coronel José Gálvez Egúsquiza", "El mejor trabajo"];
const cambiosDatos = ["Alumno: Sebastian Paolo Shulla García", "Profesor: Carlos Cuba", "Curso: IPM"];
const elementoTitle = document.getElementById("change-title");
const elementoDatos = document.getElementById("datos");
const velocidadEscritura = 100; // Milisegundos por letra
let currentIndexTitle = 0;
let currentIndexDatos = 0;

function cambiarTexto(elemento, cambios, currentIndex) {
    const textoActual = elemento.textContent;
    const nuevoTexto = cambios[currentIndex];
    const textoLargo = Math.max(textoActual.length, nuevoTexto.length);

    function animacionTexto(i) {
        setTimeout(() => {
            elemento.textContent = nuevoTexto.slice(0, i);
            if (i < textoLargo) {
                animacionTexto(i + 1);
            } else {
                setTimeout(() => {
                    animacionBorrar(textoLargo);
                }, 1000); // Espera 1 segundo antes de borrar
            }
        }, velocidadEscritura);
    }

    function animacionBorrar(i) {
        setTimeout(() => {
            elemento.textContent = nuevoTexto.slice(0, i);
            if (i > 0) {
                animacionBorrar(i - 1);
            } else {
                currentIndex = (currentIndex + 1) % cambios.length;
                setTimeout(() => cambiarTexto(elemento, cambios, currentIndex), 1000); // Espera 1 segundo antes de cambiar al siguiente texto
            }
        }, velocidadEscritura);
    }

    animacionTexto(0);
}

cambiarTexto(elementoTitle, cambiosTitle, currentIndexTitle);
cambiarTexto(elementoDatos, cambiosDatos, currentIndexDatos);
