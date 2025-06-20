document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts
    function createHearts() {
        const heartsContainer = document.querySelector('.floating-hearts');
        const heartCount = 12;
        
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '<i class="fas fa-heart"></i>';
            
            // Random position and animation
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.fontSize = `${15 + Math.random() * 25}px`;
            heart.style.animationDuration = `${10 + Math.random() * 15}s`;
            heart.style.animationDelay = `${Math.random() * 5}s`;
            
            heartsContainer.appendChild(heart);
        }
    }
    
    createHearts();
    
    // Smooth scroll to next section when button is clicked
    const showMeBtn = document.querySelector('.show-me-btn');
    if (showMeBtn) {
        showMeBtn.addEventListener('click', function() {
            // Assuming next section is letters section
            const nextSection = document.querySelector('#letters');
            if (nextSection) {
                window.scrollTo({
                    top: nextSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Rest of your existing JavaScript...
});
function openLetter(letterId) {
    // Close any other open letters first
    document.querySelectorAll('.letter').forEach(letter => {
        if (letter.id !== letterId && letter.classList.contains('open')) {
            letter.classList.remove('open');
        }
    });
    
    // Open the selected letter
    const letter = document.getElementById(letterId);
    letter.classList.toggle('open');
}

function closeLetter(letterId) {
    document.getElementById(letterId).classList.remove('open');
}

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const navDots = document.querySelectorAll('.nav-dot');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navDots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('href') === `#${current}`) {
                dot.classList.add('active');
            }
        });
    });
    
    // Smooth scroll for navigation dots
    navDots.forEach(dot => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
