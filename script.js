<script>
    // Mostra o botão quando a página é rolada para baixo
    window.onscroll = function() {
        const button = document.getElementById('scrollToTop');
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            button.style.display = "block"; // Mostra o botão
        } else {
            button.style.display = "none"; // Esconde o botão
        }
    };

    // Rola para o topo ao clicar no botão
    document.getElementById('scrollToTop').onclick = function() {
        document.body.scrollTop = 0; // Para Safari
        document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
    };
</script>
