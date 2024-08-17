// Select the menu icon and dropdown menu elements
const menuIcon = document.getElementById('menu-icon');
const dropdownMenu = document.getElementById('dropdown-menu');

// Toggle the visibility of the dropdown menu when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show'); // Show or hide the dropdown menu
    menuIcon.classList.toggle('move'); // Move the menu icon to indicate the menu is open
});

// Ensure the dropdown menu follows the user as they scroll
window.addEventListener('scroll', () => {
    if (dropdownMenu.classList.contains('show')) {
        dropdownMenu.style.top = `${window.scrollY + 80}px`; // Adjust the top position based on scroll position
    }
});

// Optional: Close the menu if the user clicks outside of it (enhances UX)
document.addEventListener('click', (event) => {
    if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('show'); // Hide the menu
        menuIcon.classList.remove('move'); // Reset the menu icon position
    }
});

// GIF functionality
function showRandomGif() {
    const gifs = ['arrow', 'bear', 'flower', 'heart', 'sparkle'];
    const gifName = gifs[Math.floor(Math.random() * gifs.length)];
    const gifElement = document.createElement('img');
    gifElement.src = `${gifName}.gif`;
    gifElement.className = 'glitch-gif';
    gifElement.style.top = `${Math.random() * 80}vh`; // Adjust to ensure GIFs stay within viewport
    gifElement.style.left = `${Math.random() * 80}vw`; // Adjust to ensure GIFs stay within viewport
    gifElement.addEventListener('click', () => {
        gifElement.remove();
    });
    document.body.appendChild(gifElement);
    setTimeout(() => {
        gifElement.remove();
    }, 5000);
}

setInterval(showRandomGif, 4000); // Make GIFs appear every 5 seconds
