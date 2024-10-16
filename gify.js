const apiKey = 'cKv8C11U8yC0xGd8uXGNAPRwd7ijDMN4'; // Replace with your Giphy API key
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const gifContainer = document.getElementById('gif-container');

searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        fetchGifs(query);
    }
});

async function fetchGifs(query) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=1`);
        const data = await response.json();
        displayGifs(data.data);
    } catch (error) {
        console.error('Error fetching GIFs:', error);
    }
}

function displayGifs(gifs) {
    gifContainer.innerHTML = ''; // Clear previous results
    gifs.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        img.alt = gif.title;
        img.className = 'gif';
        gifContainer.appendChild(img);
    });
}