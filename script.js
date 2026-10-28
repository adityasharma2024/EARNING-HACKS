// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Cursor Glow Effect
const cursorGlow = document.querySelector('.cursor-glow');

if (!prefersReducedMotion && !isTouchDevice) {
    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    });
}

// Add click particle effects
function createClickParticles(x, y) {
    if (prefersReducedMotion || isTouchDevice) return;
    
    const particleCount = 8;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: var(--cyan-primary);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${x}px;
            top: ${y}px;
            opacity: 1;
        `;
        document.body.appendChild(particle);
        
        const angle = (i / particleCount) * Math.PI * 2;
        const velocity = 50 + Math.random() * 50;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let posX = x;
        let posY = y;
        let opacity = 1;
        
        function animateParticle() {
            posX += vx * 0.02;
            posY += vy * 0.02;
            opacity -= 0.02;
            
            particle.style.left = posX + 'px';
            particle.style.top = posY + 'px';
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animateParticle);
            } else {
                particle.remove();
            }
        }
        
        requestAnimationFrame(animateParticle);
    }
}

// Add click effect to entire body
document.addEventListener('click', (e) => {
    createClickParticles(e.clientX, e.clientY);
});

// 3D Device Cursor Tracking
const device3d = document.getElementById('device3d');

if (device3d && !prefersReducedMotion && !isTouchDevice) {
    const heroSection = document.querySelector('.hero');
    
    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        requestAnimationFrame(() => {
            device3d.style.transform = `
                perspective(1000px)
                rotateY(${x * 20}deg)
                rotateX(${-y * 20}deg)
                translateZ(30px)
            `;
        });
    });
    
    heroSection.addEventListener('mouseleave', () => {
        requestAnimationFrame(() => {
            device3d.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
        });
    });
    
    // Add click effect to device
    device3d.addEventListener('click', () => {
        device3d.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px) scale(0.95)';
        setTimeout(() => {
            device3d.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px) scale(1)';
        }, 200);
    });
}

// Magnetic Button Effect
function initMagneticButtons() {
    if (prefersReducedMotion || isTouchDevice) return;
    
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            requestAnimationFrame(() => {
                btn.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px) scale(1.05)`;
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            requestAnimationFrame(() => {
                btn.style.transform = 'translate(0, 0) scale(1)';
            });
        });
        
        // Add click scale effect
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'translate(0, 0) scale(0.95)';
        });
        
        btn.addEventListener('mouseup', () => {
            btn.style.transform = 'translate(0, 0) scale(1)';
        });
    });
}

initMagneticButtons();

// Tilt Card Effect
function initTiltCards() {
    if (prefersReducedMotion || isTouchDevice) return;
    
    const tiltCards = document.querySelectorAll('.tilt-card');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            requestAnimationFrame(() => {
                card.style.transform = `
                    perspective(1000px)
                    rotateY(${x * 12}deg)
                    rotateX(${-y * 12}deg)
                    translateY(-15px)
                    scale(1.02)
                `;
                card.style.boxShadow = '0 25px 50px rgba(0, 212, 255, 0.2)';
            });
        });
        
        card.addEventListener('mouseleave', () => {
            requestAnimationFrame(() => {
                card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0) scale(1)';
                card.style.boxShadow = '';
            });
        });
        
        // Add click effect
        card.addEventListener('click', () => {
            card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(-5px) scale(0.98)';
            setTimeout(() => {
                card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0) scale(1)';
            }, 150);
        });
    });
}

initTiltCards();

// Parallax Effect for Background Elements
if (!prefersReducedMotion && !isTouchDevice) {
    const bgGradient1 = document.querySelector('.bg-gradient-1');
    const bgGradient2 = document.querySelector('.bg-gradient-2');
    const particles = document.querySelectorAll('.particle');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        
        requestAnimationFrame(() => {
            if (bgGradient1) {
                bgGradient1.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
            }
            if (bgGradient2) {
                bgGradient2.style.transform = `translate(${-x * 20}px, ${-y * 20}px)`;
            }
            
            particles.forEach((particle, index) => {
                const speed = (index + 1) * 10;
                particle.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        });
    });
}

// Scroll-Triggered Animations
const scrollRevealTargets = document.querySelectorAll(
    '.hero-content, .hero-visual, .section-header, .feature-card, .cta-container, .footer-container'
);

document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 100}ms`;
});

if (prefersReducedMotion) {
    scrollRevealTargets.forEach(target => target.classList.add('is-visible'));
} else {
    const scrollRevealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    scrollRevealTargets.forEach(target => {
        target.classList.add('scroll-reveal');
        scrollRevealObserver.observe(target);
    });
}

// Counter Animation
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * (target - start) + start);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(update);
}

// Trigger Counter Animation
const statValues = document.querySelectorAll('.stat-value[data-count]');

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.dataset.count);
            animateCounter(entry.target, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statValues.forEach(stat => {
    statsObserver.observe(stat);
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');

function updateNavbarOnScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
}

window.addEventListener('scroll', updateNavbarOnScroll, { passive: true });
updateNavbarOnScroll();

// Telegram Modal
const telegramModal = document.getElementById('telegramModal');
const closeModal = document.getElementById('closeModal');

// Check if user has seen modal
const hasSeenModal = localStorage.getItem('telegramModalSeen');

if (!hasSeenModal && telegramModal && !prefersReducedMotion) {
    setTimeout(() => {
        telegramModal.classList.add('active');
    }, 5000);
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        telegramModal.classList.remove('active');
        localStorage.setItem('telegramModalSeen', 'true');
    });
}

if (telegramModal) {
    telegramModal.addEventListener('click', (e) => {
        if (e.target === telegramModal) {
            telegramModal.classList.remove('active');
            localStorage.setItem('telegramModalSeen', 'true');
        }
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Ripple Effect on Buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        if (prefersReducedMotion) return;
        
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            left: ${x}px;
            top: ${y}px;
            width: 120px;
            height: 120px;
            margin-left: -60px;
            margin-top: -60px;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add hover glow effect to all buttons
document.querySelectorAll('.cta-button, .nav-cta, .social-link').forEach(button => {
    button.addEventListener('mouseenter', () => {
        if (!prefersReducedMotion && !isTouchDevice) {
            button.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        }
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Device Floating Animation (for touch devices or reduced motion)
if (isTouchDevice || prefersReducedMotion) {
    if (device3d) {
        device3d.style.animation = 'deviceFloat 6s ease-in-out infinite';
    }
    
    const floatStyle = document.createElement('style');
    floatStyle.textContent = `
        @keyframes deviceFloat {
            0%, 100% {
                transform: translateY(0) rotateX(0deg) rotateY(0deg);
            }
            50% {
                transform: translateY(-20px) rotateX(2deg) rotateY(-2deg);
            }
        }
    `;
    document.head.appendChild(floatStyle);
}

// Message Animation Loop - Continuously animate messages
function initMessageAnimation() {
    const messages = document.querySelectorAll('.animated-message');
    if (messages.length === 0) return;
    
    // Reset and replay animation every 5 seconds
    setInterval(() => {
        messages.forEach((msg, index) => {
            msg.style.animation = 'none';
            msg.offsetHeight; // Trigger reflow
            msg.style.animation = `messageSlideIn 0.5s ease-out forwards ${index * 0.3}s`;
        });
    }, 5000);
}

initMessageAnimation();

// Performance Optimization: Pause animations when tab is not visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.body.classList.add('paused');
    } else {
        document.body.classList.remove('paused');
    }
});

// Add paused state to CSS
const pausedStyle = document.createElement('style');
pausedStyle.textContent = `
    .paused * {
        animation-play-state: paused !important;
    }
`;
document.head.appendChild(pausedStyle);

// Track Telegram clicks for analytics
document.querySelectorAll('a[href*="t.me"]').forEach(link => {
    link.addEventListener('click', function() {
        console.log('Telegram link clicked');
        // Add your analytics tracking here
    });
});

// Add parallax scroll effect for background
if (!prefersReducedMotion && !isTouchDevice) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const bgGradient1 = document.querySelector('.bg-gradient-1');
        const bgGradient2 = document.querySelector('.bg-gradient-2');
        
        if (bgGradient1) {
            bgGradient1.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        if (bgGradient2) {
            bgGradient2.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
    });
}

// Add hover effect to trust indicators
document.querySelectorAll('.trust-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-3px)';
        item.style.color = 'var(--cyan-primary)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
        item.style.color = 'var(--text-muted)';
    });
});

// Add click effect to feature cards icon
document.querySelectorAll('.feature-icon-wrapper').forEach(icon => {
    icon.addEventListener('click', () => {
        icon.style.transform = 'scale(1.2) rotate(10deg)';
        setTimeout(() => {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
    });
});

// Add magnetic effect to device screen
const deviceScreen = document.querySelector('.device-screen');
if (deviceScreen && !prefersReducedMotion && !isTouchDevice) {
    deviceScreen.addEventListener('mousemove', (e) => {
        const rect = deviceScreen.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        const screenContent = deviceScreen.querySelector('.screen-content');
        if (screenContent) {
            screenContent.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
        }
    });
    
    deviceScreen.addEventListener('mouseleave', () => {
        const screenContent = deviceScreen.querySelector('.screen-content');
        if (screenContent) {
            screenContent.style.transform = 'translate(0, 0)';
        }
    });
}

// Add hover effect to stat cards
document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.borderColor = 'var(--cyan-primary)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.borderColor = '';
    });
});

// Add interactive message cards
document.querySelectorAll('.message-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateX(5px)';
        card.style.background = 'linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(0, 212, 255, 0.05) 100%)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateX(0)';
        card.style.background = '';
    });
});

console.log('🚀 Earning Hacks Premium Landing Page Loaded Successfully!');
