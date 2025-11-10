const form = document.querySelector(".form");

const apenasTexto = /^[A-Za-zÀ-ÿ\s]+$/;
const validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const telMinimo = (tel) => {
  let numeros = 0;
  for (let i = 0; i < tel.length; i++) {
    if (tel[i] >= '0' && tel[i] <= '9') numeros++;
  }
  return numeros >= 11;
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const assunto = document.getElementById("assunto").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!apenasTexto.test(nome)) {
    alert("Nome inválido. Use apenas letras.");
    return;
  }

  if (!validarEmail.test(email)) {
    alert("E-mail inválido. Digite um e-mail válido.");
    return;
  }

  if (!telMinimo(telefone)) {
    alert("Telefone inválido. Informe DDD e número com 9 dígitos.");
    return;
  }

  if (!assunto) {
    alert("O campo 'Assunto' é obrigatório.");
    return;
  }

  if (!mensagem) {
    alert("O campo 'Mensagem' é obrigatório.");
    return;
  }

  const dados = { nome, email, telefone, assunto, mensagem };
  localStorage.setItem("formContato", JSON.stringify(dados));

  console.log("Dados do formulário salvos:");
  console.log(dados);

  alert("Formulário enviado com sucesso!\nEntraremos em contato em breve.");

  form.reset();
});
