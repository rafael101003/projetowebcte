function toggleCard(card) {

    document.querySelectorAll(".docente").forEach(item => {
        if (item !== card) {
            item.classList.remove("ativo");
        }
    });

    card.classList.toggle("ativo");
}