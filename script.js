// 1. Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 2. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// 3. Modern Form Handling
const trainingForm = document.getElementById('trainingForm');
if (trainingForm) {
    trainingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button');
        const originalText = submitBtn.innerText;
        
        // Visual feedback
        submitBtn.innerText = "Processing Application... 🚀";
        submitBtn.style.opacity = "0.7";
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            alert("Application Received! Our lead DevOps instructor will contact you within 24 hours.");
            submitBtn.innerText = originalText;
            submitBtn.style.opacity = "1";
            submitBtn.disabled = false;
            trainingForm.reset();
        }, 2000);
    });
}

// 4. Navbar Background Blur on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = "rgba(2, 6, 23, 0.95)";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
    } else {
        nav.style.background = "rgba(2, 6, 23, 0.8)";
        nav.style.boxShadow = "none";
    }
});