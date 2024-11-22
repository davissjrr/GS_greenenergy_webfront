const toggleDarkModeButton = document.getElementById("toggle-dark-mode");
const body = document.body;

const homeButton = document.querySelector('a[href="index.html"]');
const sobreNosButton = document.querySelector('a[href="sobrenos.html"]');
const solucoesButton = document.querySelector('a[href="solucoes.html"]');

toggleDarkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    toggleDarkModeButton.textContent = body.classList.contains("dark-mode")
        ? "Modo Claro"
        : "Modo Noturno";
});

homeButton.addEventListener("click", (e) => {
    e.preventDefault(); // evita a padronização comportamental
    alert("Bem-vindo à página inicial!");
    window.location.href = "index.html";
});

sobreNosButton.addEventListener("click", (e) => {
    e.preventDefault(); // evita a padronização comportamental
    alert("Você está acessando a página 'Sobre Nós'.");
    window.location.href = "sobrenos.html"; 
});

solucoesButton.addEventListener("click", (e) => {
    e.preventDefault(); // evita a padronização comportamental
    alert("Confira nossas soluções inovadoras!");
    window.location.href = "solucoes.html";
});
