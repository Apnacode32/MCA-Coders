document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.getElementById('signUpForm');

    if (signUpForm) {
        signUpForm.addEventListener('submit', (e) => {
            e.preventDefault(); // पेज को रीलोड होने से रोकें
            const name = document.getElementById('signUpName').value;
            const email = document.getElementById('signUpEmail').value;

            // Validation
            if (name === "" || email === "") {
                alert('Please fill in all fields.');
                return;
            }
            
            alert(`Thanks for joining, ${name}! A confirmation has been sent to ${email}.`);
            // असली ऐप में, यहाँ सर्वर पर डेटा भेजा जाएगा
        });
    }
});