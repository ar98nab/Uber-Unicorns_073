const data = [
    'Podcasts',
    'Live Events',
    'Made For You',
    'New Releases',
    'Hindi',
    'Punjabi',
    'Tamil',
    'Ghazals',
    'Podcast Charts',
    'Podcast New Releases',
    'Video Podcasts',
    'Business & Technology'
];

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function handleSearch(event) {
    const query = event.target.value.toLowerCase();
    const results = data.filter(item => item.toLowerCase().includes(query));
    console.log(`Searching for: ${query}`);
    console.log('Results:', results);
    displayResults(results);
}

function displayResults(results) {
    const resultsContainer = document.querySelector('#krcard');
    const allItems = resultsContainer.querySelectorAll('.grid-item');

    allItems.forEach(item => {
        if (results.includes(item.textContent)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

const searchBar = document.querySelector('.search-bar');
searchBar.addEventListener('input', debounce(handleSearch, 300));

document.addEventListener('DOMContentLoaded', function() {
   

    const backButton = document.getElementById('krback');
    backButton.addEventListener('click', function() {
        window.location.href = './Melodify.html';
    });
});