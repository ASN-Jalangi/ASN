// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Get the login form and elements
    const loginForm = document.getElementById('admin-login-form');
    const errorMessage = document.getElementById('error-message');

    // Admin credentials (these should ideally be validated on the server side)
    const adminCredentials = {
        username: "ToumikASN",
        password: "Toumik@786"
    };

    // Handle form submission
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        // Get the entered values
        const enteredUsername = document.getElementById('username').value;
        const enteredPassword = document.getElementById('password').value;

        // Validate credentials
        if (enteredUsername === adminCredentials.username && enteredPassword === adminCredentials.password) {
            // Successful login, redirect to the Admin Control Panel
            window.location.href = 'admin-control-panel.html';
        } else {
            // Display error message
            errorMessage.textContent = "Invalid username or password. Please try again.";
        }
    });
});
