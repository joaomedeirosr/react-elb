function letraMaiuscula(palavra) {
  var letra = palavra.charAt(0);
  var resto = palavra.slice(1);

  return letra.toUpperCase() + resto.toLowerCase();
}

function fazer() {
  var caixa = document.getElementById("resultado");
  var input = document.getElementById("valor");

  var valor = input.value;

  caixa.innerHTML = letraMaiuscula(valor);
}

var cidades = [];

function addCidade() {
  var input = document.getElementById("cidade");

  var novaCidade = letraMaiuscula(input.value);

  if (cidades.includes(novaCidade) == true) {
    alert("cidade já cadastrada");
    return false;
  }

  cidades.push(novaCidade);
  listarCidades();
}

function ordenarCidades() {
  cidades.sort();
  listarCidades();
}

function listarCidades() {
  var lista = "<ul>";

  var ult = cidades.length;

  for (var id = 0; id < ult; id += 1) {
    lista +=
      "<li>" +
      cidades[id] +
      "<button onClick='deletar(" +
      id +
      ")'>X</button></li>";
  }

  lista += "</ul>";

  var caixa = document.getElementById("resultado");
  caixa.innerHTML = lista;
}

function deletar(id) {
  cidades.splice(id, 1);

  listarCidades();
}
