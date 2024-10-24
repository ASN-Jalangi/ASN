// Admin credentials (Hardcoded for now)
const adminUserId = "ToumikASN";
const adminPassword = "Toumik@786";

// Handle Admin Login
function handleAdminLogin(event) {
    event.preventDefault();
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    if (userId === adminUserId && password === adminPassword) {
        window.location.href = 'admin-control-panel.html'; // Redirect to the control panel
    } else {
        alert("Invalid login credentials. Please try again.");
    }
}
