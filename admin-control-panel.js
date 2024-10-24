// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Example logic to manage notices (this can be expanded based on requirements)
    const manageNoticesBtn = document.getElementById('manage-notices');
    const manageGalleryBtn = document.getElementById('manage-gallery');
    const logoutBtn = document.getElementById('logout');

    manageNoticesBtn.addEventListener('click', () => {
        alert("Manage Notices section clicked");
        // Add code to dynamically load or manage notices here
    });

    manageGalleryBtn.addEventListener('click', () => {
        alert("Manage Gallery section clicked");
        // Add code to dynamically load or manage gallery here
    });

    // Logout button logic
    logoutBtn.addEventListener('click', () => {
        window.location.href = 'admin-login.html';
    });
});
