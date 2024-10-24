// admin-login.js

document.getElementById('adminLoginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check if the credentials are correct
    if (username === "ToumikASN" && password === "Toumik@786") {
        alert("Login Successful");
        sessionStorage.setItem("isAdminLoggedIn", "true"); // Set login status in session storage
        window.location.href = "admin-control.html"; // Redirect to the Admin Control Panel
    } else {
        alert("Invalid User ID or Password");
    }
});
