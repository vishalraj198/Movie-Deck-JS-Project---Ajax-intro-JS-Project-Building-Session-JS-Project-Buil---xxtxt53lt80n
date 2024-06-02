// API endpoint
const API_KEY = "f531333d637d0c44abc85b3e74db2186";
const API_URL = "https://api.themoviedb.org/3/movie/top_rated";

// Pagination variables
let currentPage = 1;
const totalPages = 3;

// Function to fetch movies from API
async function fetchMovies() {
    try {
        const response = await fetch(`${API_UR}?api_key=${API_KEY}&language=en-US&page=${currentPage}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}

// Function to display movies
function displayMovies(movies) {
    const movieList = document.querySelector(".movie-list");
    movieList.innerHTML = "";
    movies.forEach(movie => {
        const { title, vote_count, vote_average, poster_path } = movie;
        const imageURL = poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : "default-image-url.jpg";
        const movieCard = `
            <div class="movie-card">
                <img src="${imageURL}" alt="${title}">
                <h3>${title || "movie-title"}</h3>
                <p>Vote Count: ${vote_count || "vote-count"}</p>
                <p>Vote Average: ${vote_average || "vote-average"}</p>
                <button onclick="toggleFavorite('${title}')"><i class="fas fa-heart"></i></button>
            </div>
        `;
        movieList.innerHTML += movieCard;
    });
}

// Function to toggle favorite movies
function toggleFavorite(title) {
    // Implement logic to add/remove from favorites and update local storage
}

// Function to show all movies
async function showAllMovies() {
    currentPage = 1;
    const movies = await fetchMovies();
    displayMovies(movies);
    document.getElementById("prevBtn").disabled = true;
    document.getElementById("currentPage").textContent = `Current Page: ${currentPage}`;
}

// Function to show favorite movies
function showFavoriteMovies() {
    // Implement logic to show only favorite movies
}

// Function to sort movies by date
function sortByDate() {
    // Implement sorting logic by date
}

// Function to sort movies by rating
function sortByRating() {
    // Implement sorting logic by rating
}

// Function to get next page of movies
async function getNextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        const movies = await fetchMovies();
        displayMovies(movies);
        document.getElementById("prevBtn").disabled = false;
        document.getElementById("currentPage").textContent = `Current Page: ${currentPage}`;
        if (currentPage === totalPages) {
            document.getElementById("nextBtn").disabled = true;
        }
    }
}

// Initial load
showAllMovies();

