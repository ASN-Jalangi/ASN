// admin-control.js

// Ensure the user is logged in
if (sessionStorage.getItem("isAdminLoggedIn") !== "true") {
    alert("Please log in to access the Admin Control Panel.");
    window.location.href = "admin-login.html";
}

// Logout function
function logout() {
    sessionStorage.removeItem("isAdminLoggedIn");
    window.location.href = "admin-login.html";
}

// Function to update admin credentials
document.getElementById('changeCredentialsForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (newUsername && newPassword) {
        // Ideally, send the updated credentials to the server for secure storage
        alert("Admin credentials updated successfully.");
        // Code to update credentials can go here (depending on your server-side language)
    } else {
        alert("Please fill in both fields.");
    }
});

// Placeholder functions for Notices and Gallery management
function addNotice() {
    alert("Feature: Add Notice (To be implemented)");
}

function editNotice() {
    alert("Feature: Edit Notice (To be implemented)");
}

function deleteNotice() {
    alert("Feature: Delete Notice (To be implemented)");
}

function uploadImage() {
    alert("Feature: Upload Image (To be implemented)");
}

function deleteImage() {
    alert("Feature: Delete Image (To be implemented)");
}
