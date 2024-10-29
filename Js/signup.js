// Signup Form
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const fields = [
        { element: firstName, errorId: 'firstNameError' },
        { element: lastName, errorId: 'lastNameError' },
        { element: username, errorId: 'usernameError' },
        { element: email, errorId: 'emailError' },
        { element: password, errorId: 'passwordError' }
    ];

    let isValid = true;

    // Validate all fields
    fields.forEach(field => {
        const errorElement = document.getElementById(field.errorId);
        if (field.element.value.trim() === '') {
            errorElement.style.display = 'block';
            isValid = false;
        } else {
            errorElement.style.display = 'none';
        }
    });

    if (isValid) {
        // database save to localStorage
        const userData = {
            firstName: firstName.value,
            lastName: lastName.value,
            username: username.value,
            email: email.value,
            password: password.value
        };

        // Save user data to localStorage as "database"
        localStorage.setItem('user', JSON.stringify(userData));
        alert("You have successfully signed up!");
        window.location.href = "login.html"; // Redirect to login page
    }
});
