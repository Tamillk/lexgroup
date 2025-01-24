
document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    setTimeout(() => {
        splash.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000); // Splash screen duration: 3 seconds
});
