document.addEventListener('DOMContentLoaded', () => {
    // --- Smooth Scrolling (Lenis) ---
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.js-scroll-reveal');
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    // --- Sticky Scroll Story Logic ---
    const stepContentRefs = document.querySelectorAll('.workflow-step-content');
    const stepIndicators = document.querySelectorAll('.step-indicator');
    const stepTexts = document.querySelectorAll('.step-text');
    const workflowImages = document.querySelectorAll('.workflow-img');

    // Initialize first image to be visible immediately
    updateStickyUI('1');

    const stepObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const activeStep = entry.target.getAttribute('data-step');
                    updateStickyUI(activeStep);
                }
            });
        },
        { rootMargin: "-40% 0px -40% 0px" }
    );

    stepContentRefs.forEach((ref) => stepObserver.observe(ref));

    function updateStickyUI(activeStep) {
        const stepNum = parseInt(activeStep);

        // Update Indicators and Texts
        stepIndicators.forEach((indicator, index) => {
            const currentStepNum = index + 1;
            if (currentStepNum <= stepNum) {
                indicator.style.height = '100%';
            } else {
                indicator.style.height = '0';
            }
        });

        stepTexts.forEach((text, index) => {
            const currentStepNum = index + 1;
            if (currentStepNum === stepNum) {
                text.classList.add('active');
                text.classList.remove('text-gray-400');
                text.classList.add('text-text');
            } else {
                text.classList.remove('active');
                text.classList.add('text-gray-400');
                text.classList.remove('text-text');
            }
        });

        // Update Images
        workflowImages.forEach((img) => {
            if (img.getAttribute('data-step') === activeStep) {
                img.classList.remove('opacity-0', 'scale-95');
                img.classList.add('opacity-100', 'scale-100', 'z-20');
                img.classList.remove('z-10');
            } else {
                img.classList.add('opacity-0', 'scale-95');
                img.classList.remove('opacity-100', 'scale-100', 'z-20');
                img.classList.add('z-10');
            }
        });
    }
});
