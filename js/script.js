// Progress Bar
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const progressBar = document.getElementById('progressBar');
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // Active Navigation
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-tertiary', 'border-b-2', 'border-tertiary', 'shadow-[0_0_10px_rgba(76,215,246,0.5)]');
            link.classList.add('text-on-surface-variant');
            
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('text-tertiary', 'border-b-2', 'border-tertiary', 'shadow-[0_0_10px_rgba(76,215,246,0.5)]');
                link.classList.remove('text-on-surface-variant');
            }
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});