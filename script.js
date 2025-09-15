document.addEventListener('DOMContentLoaded', () => {

    // --- Feather Icons को रेंडर करें ---
    feather.replace();

    // --- स्क्रॉल पर हेडर का स्टाइल बदलें ---
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // --- हीरो सेक्शन में टाइपिंग एनिमेशन ---
    const codeSnippet = document.getElementById('code-snippet');
    if(codeSnippet) {
        const typed = new Typed('#code-snippet', {
            strings: [
                `// We bring your ideas to life\n\nconst mcaCoders = {\n  name: 'MCA Coders',\n  services: ['Backend', 'Frontend', 'Database'],\n  isProfessional: true,\n  startProject: function() {\n    console.log('Let's build something amazing!');\n  }\n};`
            ],
            typeSpeed: 40,
            backSpeed: 20,
            loop: false,
            showCursor: true,
            cursorChar: '|',
        });
    }

    // --- 3D टिल्ट इफ़ेक्ट ---
    const tiltElements = document.querySelectorAll('[data-tilt]');
    if (tiltElements.length > 0) {
        VanillaTilt.init(tiltElements, {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
        });
    }

    // --- स्क्रॉल पर एलिमेंट्स को एनिमेट करें ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const elementsToAnimate = document.querySelectorAll('.service-card, .work-card, .team-member, .contact-box');
    elementsToAnimate.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});