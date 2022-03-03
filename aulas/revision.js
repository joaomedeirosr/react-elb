/* Objeto --> Car

 Atributos --> color , year ..

 Métodos --> sell_by_year()



  Encapsulamento --> É a classe propriamente dito ou seja sao o conjunto de atributos métodos, Objeto..
*/

class Car {
  color = "black";

  year = 2022;

  sell_by_year(year) {
    return year + this.color;
  }
}

// Instancia da classe Car (Objeto que respeita o comportamento da classe Car ou seja acompanha o molde Car)
var Ford = new Car();

Ford.color = "Blue";
