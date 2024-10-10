const serviceCards = document.querySelectorAll('.service-card');
const serviceImage = document.getElementById('service-image');
const serviceTitle = document.getElementById('service-title');
const serviceDescription = document.getElementById('service-description');

let activeCard = null;

serviceCards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        if (activeCard && activeCard !== card) {
            activeCard.classList.remove('border-green-500');
        }
        card.classList.add('border-green-500');
        activeCard = card;

        const imageUrl = card.getAttribute('data-image');
        const title = card.getAttribute('data-title');
        const text = card.getAttribute('data-text');

        serviceImage.src = imageUrl;
        serviceTitle.textContent = title;
        serviceDescription.textContent = text;
    });

    card.addEventListener('mouseleave', () => {
        if (activeCard === card) {
            card.classList.remove('border-green-500');
            activeCard = null;
        }
    });
});
