const advance = document.getElementById("advance");
const nomeUsuario = document.getElementById("nomeUsuario");
const modalArea = document.querySelector(".modalArea");
const modalConta = document.querySelector(".modalConta");

const controleFinanceiro = document.getElementById("controleFinanceiro");
const adicionar = document.getElementById("adicionar");
const relatorio = document.querySelector(".relatorio");
const totalConta = document.getElementById("total");
const despesas = document.getElementById("despesas");

const saidaModal = document.getElementById("saidaModal");

const depositoDinheiro = document.getElementById("depositoDinheiro");
const depositoConta = document.querySelector(".depositoConta");
const butDepositar = document.getElementById("depositar");
const saidaModalDep = document.getElementById("saidaModalDep");

const entrada = document.getElementById("entrada");

let valorConta = 2000;
let totalDespesas = 0;

// Atualiza o valor inicial exibido na tela
totalConta.innerHTML = valorConta.toFixed(2);
despesas.innerHTML = totalDespesas.toFixed(2);

advance.addEventListener("click", function () {
  const name = document.getElementById("name").value;

  if (name === "") {
    alert("Preencha o campo nome");
  } else {
    modalArea.style.display = "block";
    nomeUsuario.innerHTML = name; // Substitui o operador += para garantir o valor correto
  }
});

controleFinanceiro.addEventListener("click", function () {
  modalConta.style.display = "block";
  modalArea.style.display = "none";
});

adicionar.addEventListener("click", function () {
  const data = document.getElementById("date").value;
  const titulo = document.getElementById("titulo").value;
  const valor = parseFloat(document.getElementById("valor").value);

  function verificarValor() {
    if (isNaN(valor) || valor <= 0) {
      alert("Insira um valor válido para despesa");
    } else if (valor > valorConta) {
      alert("Valor inserido é maior que o valor disponível na conta");
    } else {
      totalDespesas += valor;
      valorConta -= valor;

      totalConta.innerHTML = valorConta.toFixed(2);
      despesas.innerHTML = totalDespesas.toFixed(2);

      relatorio.innerHTML += `<br><br>${data} ${titulo} ${valor.toFixed(2)}`;
    }
  }

  verificarValor();
});

saidaModal.addEventListener("click", function () {
  modalConta.style.display = "none";
  modalArea.style.display = "block";
});

depositoDinheiro.addEventListener("click", function () {
  depositoConta.style.display = "block";
});

let totalDepositos = parseFloat(entrada.innerHTML) || 0;

butDepositar.addEventListener("click", function () {
  let inputValorDep = parseFloat(document.getElementById("valorDep").value);

  if (isNaN(inputValorDep) || inputValorDep <= 0) {
    alert("Insira um valor válido para depósito");
  } else {
    totalDepositos += inputValorDep; // Add the deposit to the total deposits
    valorConta += inputValorDep; // Add the deposit value to the account balance

    entrada.innerHTML = totalDepositos.toFixed(2);
    totalConta.innerHTML = valorConta.toFixed(2);

    alert("Valor inserido na conta!");
  }
});

saidaModalDep.addEventListener("click", function () {
  depositoConta.style.display = "none";
});
