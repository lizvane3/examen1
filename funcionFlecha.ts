// Convertir esta funcion a una funcion de flecha
/*function resultadoDoble( a, b ){
    return (a + b) * 2
  }*/

let resultado = (a:number, b:number) => (a + b)*2;
console.log(resultado(1,2));