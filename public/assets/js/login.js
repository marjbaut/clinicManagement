const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;


if(email && password) {
  const response = await fetch('/login', {
    method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/doctor');
    console.log("successful response")
  } else {
    alert(response.statusText);
  }
  }
});


document
.querySelector('.login-form')
.addEventListener('submit', loginForm);