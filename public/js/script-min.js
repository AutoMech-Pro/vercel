/*! 
 * Christian Espinosa - Automation & Control Systems Engineer Portfolio
 * Optimized and Minified Main JavaScript
 * Version: 2.0.0
 * Author: MiniMax Agent
 */

// Performance optimizations
'use strict';

class AutomationPortfolio {
    constructor() {
        this.currentSection = 'home';
        this.isLoading = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupIntersectionObserver();
        this.initializeNavigation();
        this.setupLazyLoading();
    }

    setupEventListeners() {
        document.querySelectorAll('nav a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.smoothScrollTo(link.getAttribute('href'));
            });
        });

        const mobileMenuButton = document.getElementById('mobile-menu-button');
        if (mobileMenuButton) {
            mobileMenuButton.addEventListener('click', () => this.toggleMobileMenu());
        }

        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch (e.key) {
                    case 'h': e.preventDefault(); this.smoothScrollTo('#home'); break;
                    case 'p': e.preventDefault(); this.smoothScrollTo('#portfolio'); break;
                    case 'c': e.preventDefault(); this.smoothScrollTo('#contact'); break;
                }
            }
        });
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('section, .glass-card').forEach(el => observer.observe(el));
    }

    initializeNavigation() {
        this.updateActiveNavigation();
        window.addEventListener('scroll', () => this.updateActiveNavigation());
    }

    setupLazyLoading() {
        // Lazy load 3D model when technical section is visible
        const technicalObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.modelLoaded) {
                    this.load3DModelResources();
                    this.modelLoaded = true;
                }
            });
        }, { threshold: 0.2 });

        const technicalSection = document.getElementById('technical');
        if (technicalSection) technicalObserver.observe(technicalSection);
    }

    load3DModelResources() {
        // Load the 3D model script and Three.js library
        this.load3DScripts();
    }

    load3DScripts() {
        if (window.ThreeDModelViewer && window.THREE) {
            const container = document.getElementById('three-js-container');
            if (container) {
                window.modelViewer = new window.ThreeDModelViewer();
                window.modelViewer.init(container);
            }
            return;
        }

        // Load scripts in proper order
        if (!window.THREE) {
            const threeScript = document.createElement('script');
            threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
            threeScript.onload = () => this.load3DModelScript();
            document.head.appendChild(threeScript);
        } else {
            this.load3DModelScript();
        }
    }

    load3DModelScript() {
        if (window.ThreeDModelViewer) {
            const container = document.getElementById('three-js-container');
            if (container) {
                window.modelViewer = new window.ThreeDModelViewer();
                window.modelViewer.init(container);
            }
        } else {
            const modelScript = document.createElement('script');
            modelScript.src = '/js/3d-model.js';
            modelScript.onload = () => {
                if (window.ThreeDModelViewer && window.THREE) {
                    const container = document.getElementById('three-js-container');
                    if (container) {
                        window.modelViewer = new window.ThreeDModelViewer();
                        window.modelViewer.init(container);
                    }
                }
            };
            document.head.appendChild(modelScript);
        }
    }

    smoothScrollTo(target) {
        const element = document.querySelector(target);
        if (!element) return;

        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        this.closeMobileMenu();
    }

    updateActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) current = section.getAttribute('id');
        });

        navLinks.forEach(link => {
            link.classList.remove('text-primary-500');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-primary-500');
            }
        });
    }

    toggleMobileMenu() {
        const button = document.getElementById('mobile-menu-button');
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !isExpanded);
        button.classList.toggle('text-primary-500');
    }

    closeMobileMenu() {
        const button = document.getElementById('mobile-menu-button');
        button.setAttribute('aria-expanded', 'false');
        button.classList.remove('text-primary-500');
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const portfolio = new AutomationPortfolio();
    
    setTimeout(() => {
        if (window.EnhancedAnimations) new window.EnhancedAnimations();
    }, 500);
});

// Window resize handler
window.addEventListener('resize', () => {
    if (window.modelViewer) window.modelViewer.resize();
});

// Global error handling
window.addEventListener('error', (e) => console.error('Portfolio error:', e.error));

// Expose for module usage
window.AutomationPortfolio = AutomationPortfolio;