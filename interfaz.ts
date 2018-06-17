// Cree una interfaz que sirva para validar el siguiente objeto
interface JusticeLeague {
    nombre:string,
    artesMarciales:string[]
}

let batman:JusticeLeague = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
  }

function enviarNombre(heroe:JusticeLeague)
{
    console.log(heroe.nombre);
    console.log(heroe.artesMarciales);
}

enviarNombre(batman);
