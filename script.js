// script.js for BlushMuse Nails website

// Form Validation Function
function validateForm() {
    const form = document.getElementById('nailForm');
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (name === '' || email === '' || message === '') {
        alert('All fields must be filled out.');
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}

// Smooth Scrolling Function
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Interactive Features
const buttons = document.querySelectorAll('.interactive-button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        // Additional interactive features can be added here
    });
});
