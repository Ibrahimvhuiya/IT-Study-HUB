// blog.js

// Welcome message in console
console.log("Welcome to IT Study HUB Blog!");

// Blog card hover animation (extra visual effect)
document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.03)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Optional: Smooth scroll for Read More links
document.querySelectorAll('.blog-card a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert("This blog post is coming soon!");
    });
});
