// Mostra ou esconde o botão ao rolar a página
window.onscroll = function() {
    const button = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block"; // Mostra o botão
    } else {
        button.style.display = "none"; // Esconde o botão
    }
};

// Função para voltar ao topo
document.getElementById("scrollToTop").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'}); // Rolagem suave até o topo
};

// Função para rolagem suave nos links de navegação
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        
        // Rolagem suave até a seção correspondente
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
