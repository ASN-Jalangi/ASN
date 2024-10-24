// Sample admin data (use secure storage in a real app)
let adminCredentials = { userId: "ToumikASN", password: "Toumik@786" };

// Check if user is logged in
function checkAdminLogin() {
    const loggedInUserId = localStorage.getItem("adminUserId");
    return loggedInUserId === adminCredentials.userId;
}

// Display Admin Area
function displayAdminArea() {
    if (checkAdminLogin()) {
        document.getElementById("admin-area").style.display = "block";
    } else {
        alert("You must be logged in to access the Admin Control Panel.");
        window.location.href = "admin.html"; // Redirect to login page
    }
}

// Add Notice
document.getElementById("notice-form").onsubmit = function (e) {
    e.preventDefault();
    const title = document.getElementById("notice-title").value;
    const date = document.getElementById("notice-date").value;

    // Logic to add the notice (update your notices array)
    notices.push({ title, date, viewed: false });
    displayNotices(); // Refresh notice display
};

// Change Admin Credentials
document.getElementById("change-admin-form").onsubmit = function (e) {
    e.preventDefault();
    adminCredentials.userId = document.getElementById("new-user-id").value;
    adminCredentials.password = document.getElementById("new-password").value;
    alert("Credentials updated successfully!");
};

// Logout Functionality
document.getElementById("logout").onclick = function () {
    localStorage.removeItem("adminUserId");
    window.location.href = "admin.html"; // Redirect to login page
};

// Call to display admin area on load
window.onload = displayAdminArea;
