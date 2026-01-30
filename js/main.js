// AI Evals Handbook - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                navLinks?.classList.remove('active');
                navToggle?.classList.remove('active');
            }
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    document.querySelectorAll('.problem-card, .framework-card, .case-study-card, .code-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Add visible class styles
    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Interactive demo animation
    const demoSection = document.getElementById('demo');
    if (demoSection) {
        const demoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate the comparison bars
                    setTimeout(() => {
                        document.querySelectorAll('.bar-fill').forEach(bar => {
                            const width = bar.style.width;
                            bar.style.width = '0';
                            setTimeout(() => {
                                bar.style.width = width;
                            }, 100);
                        });
                    }, 300);
                    demoObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        demoObserver.observe(demoSection);
    }

    // Navbar background on scroll
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.background = 'rgba(10, 10, 11, 0.95)';
        } else {
            nav.style.background = 'rgba(10, 10, 11, 0.8)';
        }

        lastScroll = currentScroll;
    });

    // Code syntax highlighting enhancement (if needed)
    document.querySelectorAll('pre code').forEach(block => {
        // Add line numbers
        const lines = block.innerHTML.split('\n');
        if (lines.length > 3) {
            block.innerHTML = lines.map((line, i) => {
                return `<span class="line-number">${i + 1}</span>${line}`;
            }).join('\n');
        }
    });

    // Reading time calculation
    const content = document.querySelector('.docs-content .content, .docs-content .content-grid');
    const h1 = document.querySelector('.docs-content h1');

    if (content && h1) {
        const text = content.textContent || '';
        const wordCount = text.trim().split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200);

        if (readingTime > 0) {
            const readingTimeEl = document.createElement('p');
            readingTimeEl.className = 'reading-time';
            readingTimeEl.textContent = `${readingTime} min read`;
            h1.insertAdjacentElement('afterend', readingTimeEl);
        }
    }

    // Add anchor links to h2 headings with IDs
    document.querySelectorAll('h2[id]').forEach(heading => {
        const anchor = document.createElement('a');
        anchor.className = 'anchor-link';
        anchor.href = `#${heading.id}`;
        anchor.textContent = '#';
        anchor.setAttribute('aria-label', `Link to ${heading.textContent}`);
        heading.insertAdjacentElement('afterbegin', anchor);
    });

    console.log('AI Evals Handbook loaded');
});
