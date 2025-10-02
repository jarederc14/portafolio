document.addEventListener("DOMContentLoaded", () => {
    //Almacenamos los id a trabajar dentro de sus variables modal - modalImg
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    const cerrar = document.querySelector(".cerrar");

    const imagenes = document.querySelectorAll(".flip-card-back img");

    imagenes.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    cerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});



/*
let nombres = "Jared Rosales";
let datos = ["Jared Rosales", "SENATI", "Estudiante"];

console.log(nombres);
console.log(datos[2]);

//let edad = prompt ("ingresa tu edad");

console.log("Tu edad es: " + edad);

//Trabajando con funciones

function mostrarMensaje(){
    alert("Hola Mundo");
}

function sumar(){
    let n1 = parseInt (prompt("ingresa tu primer número: "));
    let n2 = parseInt (prompt("ingresa tu primer número: "));
    let resultado = n1 + n2;
    alert("El resultado de la suma es: " + resultado);
}

//function cambiarColor(){
    let texto = document.getElementById("texto");
    texto.style.color= "red";
}
*/
