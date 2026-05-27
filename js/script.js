// ==========================================================================
// SCROLL ANIMATIONS (The Referee Keeping the Flow)
// ==========================================================================

// 1. Select all the elements that have the 'slide-up' class
const animatedElements = document.querySelectorAll('.slide-up');

// 2. Create a new Intersection Observer (The scout watching the pitch)
const observer = new IntersectionObserver((entries) => {
    // 3. Loop through every element the scout is watching
    entries.forEach(entry => {
        // 4. If the element enters the screen (is intersecting)
        if (entry.isIntersecting) {
            // 5. Add the 'visible' class to trigger the CSS animation
            entry.target.classList.add('visible');
        }
    });
}, {
    // 6. Trigger the animation when 15% of the element is visible
    threshold: 0.15 
});

// 7. Tell the observer to start watching our specific elements
animatedElements.forEach(el => observer.observe(el));