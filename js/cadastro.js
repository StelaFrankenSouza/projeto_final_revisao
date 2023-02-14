const listaUsuarios = buscarDados("usuarios");

const formularioCadastro = document.getElementById("form-cadastro");

formularioCadastro.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (!formularioCadastro.checkValidity()) {
    formularioCadastro.classList.add("was-validated");
    return;
  }

  const email = document.getElementById("email").value;
  const senha1 = document.getElementById("senha1").value;
  const repeteSenha = document.getElementById("repeteSenha1");

  if (senha1 !== repeteSenha.value) {
    alert("As senhas não correspondem!");
    repeteSenha.value = "";
    return;
  }

  const novoUsuario = {
    email: email,
    senha: senha1,
    recados: [],
  };

  const retorno = listaUsuarios.some(
    (usuario) => usuario.email === novoUsuario.email
  );
  if (retorno === true) {
    alert("Email já cadastrado");
    return;
  }

  listaUsuarios.push(novoUsuario);
  salvarDados("usuarios", listaUsuarios);

  alert("Usuário cadastrado com sucesso!");
  formularioCadastro.reset();
});

function salvarDados(chave, valor) {
  localStorage.setItem(chave, JSON.stringify(valor));
}

function buscarDados(chave) {
  const retorno = localStorage.getItem(chave);

  if (retorno === null) {
    return [];
  } else {
    return JSON.parse(retorno);
  }
}
