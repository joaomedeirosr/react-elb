function capWord(sentenca) {
  return (
    sentenca && sentenca[0].toUpperCase() + sentenca.slice(1).toLowerCase()
  );
}
capWord();

function makeWord() {
  const texto = document.getElementById("valor");
  const box1 = document.getElementById("resultado");

  const valor = texto.value;

  box1.innerHTML = capWord(valor);
}

function adicionaCidade() {
  const cidade = document.getElementById("valor-cidade");
  const box2 = document.getElementById("lista");

  const lista = cidade.value;
  box2.innerHTML = capWord(lista);
}
