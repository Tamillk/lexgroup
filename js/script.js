
document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    // Set a timer for the splash screen duration
    setTimeout(() => {
        // Fade-out effect for the splash screen
        splash.style.opacity = 0;
        setTimeout(() => {
            splash.style.display = 'none'; // Hide the splash screen after fade-out
            mainContent.style.display = 'block'; // Show the main content
        }, 500); // Match this to the CSS transition duration
    }, 3000); // Splash screen duration: 3 seconds
});
