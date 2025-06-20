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

// Highlight active navigation dot based on scroll position
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
