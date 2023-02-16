const listaUsuarios = buscarDados("usuarios");

const formularioLogin = document.getElementById('form-login')

formularioLogin.addEventListener('submit', (evento) =>{
    evento.preventDefault()

    if(!formularioLogin.checkValidity()){

        formularioLogin.classList.add('was-validated')

        return
    }

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

   const usuarioEncontrado = listaUsuarios.find((usuario) => usuario.email === email && usuario.senha === password)

    if(!usuarioEncontrado){
        alert('Usuário não cadastrado')

        return
    }

salvarDados('usuarioLogado', usuarioEncontrado)

alert('Login efetuado com sucesso! Você será redirecionado para página de recados!')

window.location.href="./indexrecados.html"

})


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