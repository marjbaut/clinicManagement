const signupForm = document.querySelector('form');
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value;
    const role = document.getElementById('role').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const res = await fetch('/signup', {
            method: 'POST',
            body: JSON.stringify({ first_name: firstName, last_name: lastName, gender, phone_number: phone, role, email, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(res.status)
        if (res.status === 400) {
            const errorData = await res.json();
            document.getElementById('signupMessage').innerText = 'A user with the same email exists';
        }
        else {
            window.location.href = '/login'
        }
    } catch (err) {
        console.log(err);
    }
});

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupForm);