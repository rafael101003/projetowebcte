function toggleCard(card) {

    document.querySelectorAll(".docente").forEach(item => {
        if (item !== card) {
            item.classList.remove("ativo");
        }
    });

    card.classList.toggle("ativo");
};

  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    // Adiciona ou remove a classe que mostra o menu
    navLinks.classList.toggle('active');
  });

