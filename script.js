document.addEventListener('DOMContentLoaded', function () {
    // Check if the user has enabled reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Get the elements
    const staticImage = document.querySelector('img[alt="Static Image"]');
    const animatedGif = document.getElementById('animated-gif');

    // Display the appropriate image based on reduced motion preference
    if (prefersReducedMotion) {
        // If reduced motion is preferred, hide the animated GIF and display the static image
        animatedGif.style.display = 'none';
    } else {
        // If reduced motion is not preferred, hide the static image and display the animated GIF
        staticImage.style.display = 'none';
    }
});