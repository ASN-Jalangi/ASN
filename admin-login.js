function adminLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check Admin Credentials
    if (username === "ToumikASN" && password === "Toumik@786") {
        // Redirect to Admin Control Panel
        window.location.href = "admin-control-panel.html";
    } else {
        // Show Error Message
        document.getElementById('login-error').innerText = "Invalid Username or Password.";
    }

    return false; // Prevent form submission
}
