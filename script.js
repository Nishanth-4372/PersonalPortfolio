document.addEventListener("DOMContentLoaded", function() {
    // Simple fade-in effect
    const sections = document.querySelectorAll('section');
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash;
        sections.forEach(section => {
            if ('#' + section.id === hash) {
                section.style.opacity = 1;
            }
        });
    });

    // Social Media Button Link
    document.getElementById('instagram-btn').addEventListener('click', function() {
        window.open('https://instagram.com/yourusername', '_blank');
    });
});
