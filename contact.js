document.addEventListener('DOMContentLoaded', () => {

    // Activate Feather Icons
    feather.replace();

    // Handle Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the default form submission

            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (name === '' || email === '' || message === '') {
                alert('Please fill out all required fields.');
                return;
            }

            // Simulate sending the form
            alert(`Thank you, ${name}! Your message has been sent.`);
            
            // In a real application, you would send this data to a server
            // using fetch() or another method.
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ name, email, message })
            // }).then(response => { ... });

            // Clear the form
            contactForm.reset();
        });
    }
});