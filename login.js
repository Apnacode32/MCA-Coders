document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById('signInForm');

    if (signInForm) {
        signInForm.addEventListener('submit', (e) => {
            e.preventDefault(); // पेज को रीलोड होने से रोकें
            const email = document.getElementById('signInEmail').value;
            
            // Validation
            if (email === "") {
                alert('Please enter your email.');
                return;
            }

            alert(`Welcome back! Attempting to sign in as ${email}`);
            // असली ऐप में, यहाँ सर्वर पर डेटा भेजा जाएगा
        });
    }
});