let scrolling = false;

// Fonction pour la transition douce du scroll
function smoothScrollTo(targetY) {
    if (scrolling) return;

    scrolling = true;
    const duration = 800;
    const startTime = performance.now();
    const startY = window.scrollY;

    function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = easeInOut(elapsedTime, 0, 1, duration);
        
        window.scrollTo(0, startY + progress * (targetY - startY));

        if (elapsedTime < duration) {
            requestAnimationFrame(scrollAnimation);
        } else {
            scrolling = false;
        }
    }

    function easeInOut(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(scrollAnimation);
}

// Fonction pour gérer le scroll avec la souris
function handleSmoothScroll(event) {
    if (scrolling) return;
    event.preventDefault();

    const direction = event.deltaY > 0 ? 1 : -1;
    const currentPosition = window.scrollY;

    let targetPosition = -1;
    const sectionPositions = [];
    document.querySelectorAll("header, .container, .aboutcontent, .contentmap1, .contentmap2, .contactsection").forEach(section => {
        sectionPositions.push(section.offsetTop);
    });

    for (let i = 0; i < sectionPositions.length; i++) {
        if (direction === 1 && sectionPositions[i] > currentPosition) {
            targetPosition = sectionPositions[i];
            break;
        } else if (direction === -1 && sectionPositions[i] >= currentPosition) {
            targetPosition = sectionPositions[i - 1];
            break;
        }
    }

    if (targetPosition !== -1) {
        smoothScrollTo(targetPosition);
    }
}

window.addEventListener("wheel", handleSmoothScroll, { passive: false });

// Gestion des clics sur les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(anchor.getAttribute('href'));
        if (targetSection) {
            smoothScrollTo(targetSection.offsetTop);
        }
    });
});

