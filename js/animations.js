// ── Scroll Animations ──
const observerOptions = {
    threshold:  0.1,
    rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('fade-in-hidden');
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card').forEach(el => {
    el.classList.add('fade-in-hidden');
    observer.observe(el);
});

// ── Back to Top Button ──
document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('back-to-top');
    const scrollProgress = document.getElementById('scroll-progress');

    const contactSection = document.getElementById('contact');

    window.addEventListener('scroll', () => {
        // Back to top: only show when contact section is in view
        const contactTop = contactSection ? contactSection.getBoundingClientRect().top : 9999;
        if (contactTop <= window.innerHeight) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// ── Copy Email ──
function copyEmail() {
    navigator.clipboard.writeText('johnmichaelmujarofficial@gmail.com').then(() => {
        const toast = document.getElementById('copy-toast');
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
    });
}
