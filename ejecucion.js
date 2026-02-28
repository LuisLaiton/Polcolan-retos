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

document.getElementById("btn5").addEventListener("click", () => {
    cargarArchivo("Semana-2/reto-5.js");
});

document.getElementById("btn6").addEventListener("click", () => {
    cargarArchivo("Semana-2/reto-6.js");
});

document.getElementById("btn7").addEventListener("click", () => {
    cargarArchivo("Semana-2/reto-7.js");
});

document.getElementById("btn8").addEventListener("click", () => {
    cargarArchivo("Semana-2/reto-8.js");
});

document.getElementById("btn9").addEventListener("click", () => {
    cargarArchivo("Semana-2/reto-9.js");
});

document.getElementById("btn10").addEventListener("click", () => {
    cargarArchivo("Semana-2/reto-10.js");
});

function cargarArchivo(ruta) {
    const scriptExistente = document.querySelector("#script-dinamico");
    if (scriptExistente) {
        scriptExistente.remove();
    }

    const script = document.createElement("script");
    script.src = ruta + "?v=" + new Date().getTime(); 
    script.id = "script-dinamico";
    document.body.appendChild(script);
}