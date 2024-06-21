function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Unsplash API configuration
    const unsplashAccessKey = '9YOBABp1Lb8XAZl-EqYWPM1DjF7ulWeTt9sCby7y-YE';
    const unsplashEndpoint = 'https://api.unsplash.com/photos/random';
    const unsplashQuery = 'mountain';

    // DOM elements
    const heroSection = document.getElementById('hero-section');
    const tourCardsContainer = document.getElementById('tour-cards');

    // Fetch a random mountain image for the hero section
    fetch(`${unsplashEndpoint}?query=${unsplashQuery}&client_id=${unsplashAccessKey}`)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.urls.regular;
            heroSection.style.backgroundImage = `url(${imageUrl})`;
        })
        .catch(error => console.error('Error fetching hero image:', error));

    // Fetch tour locations from the Unsplash API
    fetch(`${unsplashEndpoint}?query=${unsplashQuery}&client_id=${unsplashAccessKey}&count=3`)
        .then(response => response.json())
        .then(data => {
            data.forEach(tour => {
                const tourCard = createTourCard(tour);
                tourCardsContainer.appendChild(tourCard);
            });
        })
        .catch(error => console.error('Error fetching tour locations:', error));

    // Function to create a tour card element
    function createTourCard(tour) {
        const tourCard = document.createElement('div');
        tourCard.classList.add('tour-card');

        const imageElement = document.createElement('img');
        imageElement.src = tour.urls.regular;
        imageElement.alt = tour.alt_description || 'Tour Image';
        tourCard.appendChild(imageElement);

        const titleElement = document.createElement('h3');
        titleElement.textContent = tour.location.name || 'Unknown Location';
        tourCard.appendChild(titleElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = tour.description || 'No description available.';
        tourCard.appendChild(descriptionElement);

        return tourCard;
    }
});
