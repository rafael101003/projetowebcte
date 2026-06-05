function toggleCard(card) {

    document.querySelectorAll(".docente").forEach(item => {
        if (item !== card) {
            item.classList.remove("ativo");
        }
    });

    card.classList.toggle("ativo");
};


document.addEventListener('DOMContentLoaded', function() {
        document.addEventListener('click', function(event) {
            // Verifica se o clique ocorreu no topo-card ou dentro dele
            const topoCard = event.target.closest('.topo-card');
            if (!topoCard) return;

            const cardAtual = topoCard.parentElement;
            const conteudoAtual = cardAtual.querySelector('.conteudo-card');
            const estaAtivo = cardAtual.classList.contains('active');

            // 1. Fecha todos os outros cards primeiro (Efeito Sanfona)
            document.querySelectorAll('.card-disciplina').forEach(card => {
                if (card !== cardAtual) {
                    card.classList.remove('active');
                    card.querySelector('.conteudo-card').style.height = '0px';
                }
            });

            // 2. Controla o estado do card clicado de forma suave
            if (!estaAtivo) {
                cardAtual.classList.add('active');
                // Aloca o tamanho dinâmico exato em pixels para o CSS poder transicionar suavemente
                conteudoAtual.style.height = conteudoAtual.scrollHeight + "px";
            } else {
                cardAtual.classList.remove('active');
                conteudoAtual.style.height = '0px';
            }
        });
});


  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    // Adiciona ou remove a classe que mostra o menu
    navLinks.classList.toggle('active');
  });
