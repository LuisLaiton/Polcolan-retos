document.getElementById("btn1").addEventListener("click", () => {
    cargarArchivo("Semana-1/reto-1.js");
});

document.getElementById("btn2").addEventListener("click", () => {
    cargarArchivo("Semana-1/reto-2.js");
});

document.getElementById("btn3").addEventListener("click", () => {
    cargarArchivo("Semana-1/reto-3.js");
});

document.getElementById("btn4").addEventListener("click", () => {
    cargarArchivo("Semana-2/reto-4.js");
});

function cargarArchivo(ruta) {
    const scriptExistente = document.querySelector("#script-dinamico");
    if (scriptExistente) {
        scriptExistente.remove();
    }

    const script = document.createElement("script");
    script.src = ruta;
    script.id = "script-dinamico";
    document.body.appendChild(script);
}