document.addEventListener('DOMContentLoaded', function() {
    // Selecting all movie cards
    var movieCards = document.querySelectorAll('.col');

    // Adding click event listeners to the buttons
    var nowShowingBtn = document.getElementById('nowShowingBtn');
    var comingSoonBtn = document.getElementById('comingSoonBtn');

    nowShowingBtn.addEventListener('click', function() {
        toggleMovies('Now Showing');
    });

    comingSoonBtn.addEventListener('click', function() {
        toggleMovies('Coming Soon');
    });

    // Function to toggle visibility of movie cards
    function toggleMovies(type) {
        movieCards.forEach(function(card) {
            var cardType = card.querySelector('.card-back h2').textContent; // Update the selector
            if (cardType === type) {
                card.style.display = 'block'; // Show the card
            } else {
                card.style.display = 'none'; // Hide the card
            }
        });
        checkForNoResults();
    }

    toggleMovies('Now Showing');

    // Selecting the search form and movie card container
    const searchForm = document.querySelector('form[role="search"]');
    const movieCardContainer = document.getElementById('movieCardContainer');

    // Add event listener to the search form
    searchForm.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the search query
        const searchQuery = searchForm.querySelector('input[type="search"]').value.toLowerCase().trim();

        // Loop through all movie cards
        movieCards.forEach(function(card) {
            // Get the movie name from the card
            const movieName = card.querySelector('.card-back h4').textContent.toLowerCase();

            // Check if the movie name contains the search query
            if (movieName.includes(searchQuery)) {
                // Show the movie card if it matches the search query
                card.style.display = 'block';
            } else {
                // Hide the movie card if it doesn't match the search query
                card.style.display = 'none';
            }
        });

        checkForNoResults();
    });

    var genreDropdownItems = document.querySelectorAll('#navbarDropdownGenre .dropdown-item');
    var languageDropdownItems = document.querySelectorAll('#navbarDropdownLanguage .dropdown-item');

    genreDropdownItems.forEach(function(item) {
        item.addEventListener('click', function() {
            filterMoviesBy('Genre', this.textContent);
        });
    });

    languageDropdownItems.forEach(function(item) {
        item.addEventListener('click', function() {
            filterMoviesBy('Language', this.textContent);
        });
    });

    function filterMoviesBy(type, value) {
        console.log('Filtering movies by:', type, 'with value:', value);
        var movieCards = document.querySelectorAll('.col');

        movieCards.forEach(function(card) {
            var genre = card.querySelector('.social-icons p:nth-child(1) span').textContent;
            var language = card.querySelector('.social-icons p:nth-child(2) span').textContent;

            if ((type === 'Genre' && genre === value) || (type === 'Language' && language === value)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        checkForNoResults();
    }

    function checkForNoResults() {
        const visibleMovieCards = document.querySelectorAll('.col[style="display: block;"]');
        const noResultsMessage = document.getElementById('noResultsMessage');
        if (visibleMovieCards.length === 0) {
            if (noResultsMessage) {
                noResultsMessage.style.display = 'block';
            } else {
                const newNoResultsMessage = document.createElement('div');
                newNoResultsMessage.id = 'noResultsMessage';
                newNoResultsMessage.textContent = 'No movies found.';
                movieCardContainer.appendChild(newNoResultsMessage);
            }
        } else {
            if (noResultsMessage) {
                noResultsMessage.style.display = 'none';
            }
        }
    }
});


/*used for cart */
// Increasing the quantity
document.addEventListener('DOMContentLoaded', function() {
    // Select all the "Buy Ticket" buttons
    const buyButtons = document.querySelectorAll('.butt');

    // Add event listener to each "Buy Ticket" button
    buyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Get the closest movie card
            const movieCard = this.closest('.col');

            // Get the image URL from the movie card
            const imageUrl = movieCard.querySelector('.card-img-top').src;

            // Store the image URL in localStorage
            localStorage.setItem('imageUrl', imageUrl);

            // Navigate to the ticket.html page
            window.location.href = 'ticket.html';

          var imageSrc = document.querySelector('.card-img-top').src;
          // Redirect to the second page with the image source as a query parameter
          window.location.href = 'ticket.html?imageSrc=' + encodeURIComponent(imageSrc);
        });
    });
});
