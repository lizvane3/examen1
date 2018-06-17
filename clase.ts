// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo
{
    base:number = 2;
    altura:number = 4;


    calcularArea():number {
       return this.base * this.altura;
   }
}

let figura:Rectangulo = new Rectangulo();

console.log(figura.calcularArea());