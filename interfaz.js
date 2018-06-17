"use strict";
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
function enviarNombre(heroe) {
    console.log(heroe.nombre);
    console.log(heroe.artesMarciales);
}
enviarNombre(batman);
