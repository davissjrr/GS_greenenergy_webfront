const senha = document.querySelector('#senha')
const usuario = document.querySelector('#usuario')
const login = document.querySelector('.btn-logar')

login.addEventListener('click', () =>{
    const usuarioValor = usuario.value.trim();
    const senhaValor = senha.value.trim();

    if (usuarioValor === 'admin' && senhaValor === 'admin'){
        alert('Login efetuado com sucesso')
        window.location.href = 'index.html'
    }else{
        alert('Usuário ou senha incorretos')
    }
    
})