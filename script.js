const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('trainingForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    btn.innerText = "Sending Application... 🚀";
    btn.disabled = true;

    try {
        const response = await fetch(this.action, {
            method: 'POST',
            body: new FormData(this),
            headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
            alert("Success! Your application has been sent to Praneeth.");
            this.reset();
        } else {
            alert("Error sending form. Please check your internet connection.");
        }
    } catch (error) {
        alert("Submission failed. Please try again later.");
    } finally {
        btn.innerText = "Send Application";
        btn.disabled = false;
    }
});