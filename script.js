// script.js

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Validation
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    let isValid = true;
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    if (!isValid) {
        e.preventDefault();
        alert('Please fill all fields!');
    }
});

// Animations
const animatedElements = document.querySelectorAll('.animate');

const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

animatedElements.forEach(el => {
    observer.observe(el);
});

// Interactive Features
const toggleButtons = document.querySelectorAll('.toggle');

toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const content = document.querySelector(this.dataset.target);
        content.classList.toggle('active');
    });
});