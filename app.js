document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animation
    const heroTl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.2 }, // Smoother easing and longer duration
        paused: true,
        onComplete: () => {
            gsap.set(".nav-container, .hero-content h1, .hero-content p, .hero-btn, .scroll-indicator", { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                clearProps: "all" 
            });
        }
    });

    heroTl
        .from(".nav-container", { y: -80, opacity: 0, duration: 1 })
        .from(".hero-content h1", { y: 60, opacity: 0 }, "-=0.8")
        .from(".hero-content p", { y: 60, opacity: 0 }, "-=0.9")
        // .from(".hero-btn", { scale: 1.2, opacity: 0, ease: "elastic.out(0.2, 0.6)" }, "-=0.8")
        .from(".hero-btn", { y: 40, opacity: 0,  duration: 0.2}, "-=0.6")
        .from(".scroll-indicator", { y: 20, opacity: 0, duration: 1 }, "-=0.8");

    // Section Animations
    const sections = ['.services', '.about', '.features', '.stats', '.testimonials', '.pricing', '.team', '.blog', '.partners', '.contact'];
    
    sections.forEach(section => {
        gsap.from(`${section} .section-title`, {
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 40,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out"
        });
        
        gsap.from(`${section} .section-item`, {
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 40,
            opacity: 0,
            duration: 1.4,
            stagger: 0.2,
            ease: "power4.out"
        });
    });

    // Contact Form Animation
    // gsap.from(".contact-form > *", {
    //     scrollTrigger: {
    //         trigger: ".contact",
    //         start: "top 85%",
    //         toggleActions: "play none none reverse"
    //     },
    //     x: -50,
    //     opacity: 0,
    //     duration: 1,
    //     stagger: 0.15,
    //     ease: "power4.out"
    // });

    // Footer Animation
    gsap.from(".footer-content", {
        scrollTrigger: {
            trigger: ".footer",
            start: "top 95%",
            toggleActions: "play none none reverse"
        },
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
    });

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            gsap.fromTo(".nav-menu li", 
                { opacity: 0, y: -10 }, 
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power4.out" }
            );
        } else {
            gsap.to(".nav-menu li", { 
                opacity: 0, y: -10, duration: 0.3, stagger: 0.05, ease: "power4.in" 
            });
        }
    });

    // Refresh ScrollTrigger on resize with debounce
    let resizeTimeout;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 200);
    });

    // Play animations after full page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            heroTl.play();
            ScrollTrigger.refresh();
        }, 200);
    });
});
