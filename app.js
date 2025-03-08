// document.addEventListener('DOMContentLoaded', () => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Hero Animation
//     const heroTl = gsap.timeline({
//         defaults: { ease: "power3.out", duration: 1 }, // Unified duration and ease
//         paused: true, // Start paused, play after load
//         onComplete: () => {
//             // Ensure elements stay visible
//             gsap.set(".nav-container, .hero-content h1, .hero-content p, .hero-btn, .scroll-indicator", { 
//                 opacity: 1, 
//                 y: 0, 
//                 scale: 1, 
//                 clearProps: "opacity, transform" // Clear only necessary props
//             });
//         }
//     });

//     heroTl
//         .from(".nav-container", { y: -100, duration: 0.8 })
//         .from(".hero-content h1", { y: 50 }, "-=0.6")
//         .from(".hero-content p", { y: 50 }, "-=0.7")
//         .from(".hero-btn", { scale: 0, ease: "back.out(1.7)" }, "-=0.6")
//         .from(".scroll-indicator", { y: 20 }, "-=0.6");

//     // Section Animations
//     const sections = ['.services', '.about', '.features', '.stats', 
//                      '.testimonials', '.pricing', '.team', '.blog', 
//                      '.partners', '.contact'];

//     sections.forEach(section => {
//         gsap.from(`${section} .section-title`, {
//             scrollTrigger: {
//                 trigger: section,
//                 start: "top 80%",
//                 toggleActions: "play none none reverse"
//             },
//             y: 50,
//             duration: 0.8,
//             ease: "power3.out",
//             onComplete: () => gsap.set(`${section} .section-title`, { opacity: 1, y: 0 })
//         });

//         gsap.from(`${section} .service-card, ${section} .feature-card, ${section} .stat-item, 
//                    ${section} .testimonial-card, ${section} .pricing-card, ${section} .team-card, 
//                    ${section} .blog-card, ${section} .partners-grid img, ${section} .about-content, 
//                    ${section} .about-image`, {
//             scrollTrigger: {
//                 trigger: section,
//                 start: "top 80%",
//                 toggleActions: "play none none reverse"
//             },
//             y: 50,
//             opacity: 0,
//             duration: 1,
//             stagger: 0.2,
//             ease: "power3.out",
//             onComplete: () => gsap.set(`${section} .service-card, ${section} .feature-card, ${section} .stat-item, 
//                                        ${section} .testimonial-card, ${section} .pricing-card, ${section} .team-card, 
//                                        ${section} .blog-card, ${section} .partners-grid img, ${section} .about-content, 
//                                        ${section} .about-image`, { opacity: 1, y: 0 })
//         });
//     });

//     // Contact Form Animation
//     gsap.from(".contact-form > *", {
//         scrollTrigger: {
//             trigger: ".contact",
//             start: "top 80%",
//             toggleActions: "play none none reverse"
//         },
//         x: -50,
//         opacity: 0,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "power3.out",
//         onComplete: () => gsap.set(".contact-form > *", { opacity: 1, x: 0 })
//     });

//     // Footer Animation
//     gsap.from(".footer-content", {
//         scrollTrigger: {
//             trigger: ".footer",
//             start: "top 90%",
//             toggleActions: "play none none reverse"
//         },
//         scale: 0.9,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//         onComplete: () => gsap.set(".footer-content", { opacity: 1, scale: 1 })
//     });

//     // Hamburger Menu
//     const hamburger = document.querySelector('.hamburger');
//     const navMenu = document.querySelector('.nav-menu');
    
//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('active');
//         navMenu.classList.toggle('active');
//         if (navMenu.classList.contains('active')) {
//             gsap.fromTo(".nav-menu li", 
//                 { opacity: 0, y: -20 }, 
//                 { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" }
//             );
//         } else {
//             gsap.to(".nav-menu li", { 
//                 opacity: 0, y: -20, duration: 0.3, stagger: 0.05, ease: "power3.in" 
//             });
//         }
//     });

//     // Refresh ScrollTrigger on resize with debounce
//     let resizeTimeout;
//     window.addEventListener("resize", () => {
//         clearTimeout(resizeTimeout);
//         resizeTimeout = setTimeout(() => {
//             ScrollTrigger.refresh();
//         }, 200);
//     });

//     // Play animations after full page load
//     window.addEventListener('load', () => {
//         heroTl.play();
//         ScrollTrigger.refresh(); // Ensure ScrollTrigger is ready
//     });
// });









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
        .from(".hero-btn", { scale: 0.8, opacity: 0, ease: "elastic.out(1.2, 0.6)" }, "-=0.8")
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
