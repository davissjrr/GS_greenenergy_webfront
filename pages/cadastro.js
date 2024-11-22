const senha = document.querySelector('#senha');
const usuario = document.querySelector('#usuario');
const senhaAgain = document.querySelector('#repita-senha');
const cadastrar = document.querySelector('.btn-logar');

cadastrar.addEventListener('click', () => {
    const usuarioValor = usuario.value.trim();
    const senhaValor = senha.value.trim();
    const senhaAgainValor = senhaAgain.value.trim();


    if (!usuarioValor || !senhaValor || !senhaAgainValor) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (senhaValor !== senhaAgainValor) {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        return;
    }

    alert(`Cadastro realizado com sucesso!\nUsuário: ${usuarioValor}`);
    window.location.href = '/login.html'
});
