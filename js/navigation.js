// ── Navigation ──

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        hamburger.classList.remove('active');
        navUl.classList.remove('mobile-open');
    });
});

// Highlight active nav link based on scroll position
window.addEventListener('scroll', () => {
    const scrollPos = scrollY + 150;
    const sections = [
        document.getElementById('home'),
        document.getElementById('about'),
        document.getElementById('projects'),
        document.getElementById('skills'),
        document.getElementById('contact'),
    ].filter(Boolean);

    let current = 'home';
    sections.forEach(section => {
        if (section.offsetTop <= scrollPos) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// hamburger menu toggle for mobile
const hamburger = document.getElementById('hamburgerBtn');
const navUl = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navUl.classList.toggle('mobile-open');
});

// ── Timeline accordion toggle ──
function toggleTimeline(card) {
    const parent = card.closest('.timeline');
    const isOpen = card.classList.contains('open');

    // Close all cards in the same timeline
    parent.querySelectorAll('.timeline-card').forEach(c => c.classList.remove('open'));

    // If it wasn't open, open it
    if (!isOpen) {
        card.classList.add('open');
    }
}
