// Login Form
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginUsername = document.getElementById('loginUsername');
    const loginPassword = document.getElementById('loginPassword');
    const loginUserError = document.getElementById('loginUsernameError');
    const loginPassError = document.getElementById('loginPasswordError');

    let isLoginValid = true;

    // Validate fields
    if (loginUsername.value.trim() === '') {
        loginUserError.style.display = 'block';
        isLoginValid = false;
    } else {
        loginUserError.style.display = 'none';
    }

    if (loginPassword.value.trim() === '') {
        loginPassError.style.display = 'block';
        isLoginValid = false;
    } else {
        loginPassError.style.display = 'none';
    }

    if (isLoginValid) {
        const storedUser = JSON.parse(localStorage.getItem('user'));

        // Check credentials
        if (storedUser && 
            (storedUser.username === loginUsername.value || storedUser.email === loginUsername.value) &&
            storedUser.password === loginPassword.value) {
            alert("You have successfully logged in!");
            window.location.href = "https://vikkymediatech.netlify.app/"; // Redirect to a mock website page
        } else {
            alert("Invalid username or password.");
        }
    }
});
